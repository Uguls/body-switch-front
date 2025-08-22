import axios from 'axios';

// 전역 토큰 조회 함수 참조 (나중에 AuthContext에서 설정)
let getAuthToken = null;
let refreshAuthToken = null;

// AuthContext에서 토큰 조회 함수 설정
export const setAuthTokenFunctions = (getToken, refreshToken) => {
  getAuthToken = getToken;
  refreshAuthToken = refreshToken;
};

// 1. Axios 인스턴스 생성
const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL, // 환경변수에서 기본 URL 설정
	withCredentials: true, // 쿠키 기반 인증 시 필요할 수 있음
});

// 2. 요청 인터셉터(Request Interceptor) 설정
//    - 모든 요청이 서버로 전송되기 전에 가로채서 특정 작업을 수행합니다.
apiClient.interceptors.request.use(
	(config) => {
		// AuthContext에서 accessToken을 가져옵니다.
		const accessToken = getAuthToken ? getAuthToken() : null;

		// 🔍 토큰 상태 로그
		console.log('🔑 API 요청 토큰 체크:', {
			url: config.url,
			method: config.method?.toUpperCase(),
			hasToken: !!accessToken,
			tokenPrefix: accessToken ? accessToken.substring(0, 20) + '...' : 'null'
		});

		// 토큰이 존재하면 Authorization 헤더에 추가합니다.
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
			console.log('✅ Authorization 헤더 추가됨');
		} else {
			console.log('❌ accessToken이 없어서 Authorization 헤더 추가되지 않음');
		}

		return config; // 수정된 설정(config)을 반환하여 요청을 계속 진행
	},
	(error) => {
		// 요청 설정 중 에러가 발생하면 여기서 처리합니다.
		return Promise.reject(error);
	}
);

/**
 * Response interceptor - Handles 401 errors and automatic token refresh
 * Redirects to login page if token refresh fails
 */
apiClient.interceptors.response.use(
	(response) => {
		// 🎯 정상 응답 로그
		console.log('✅ API 응답 성공:', {
			url: response.config.url,
			status: response.status,
			method: response.config.method?.toUpperCase()
		});
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		// 🚨 에러 응답 로그
		console.log('❌ API 응답 에러:', {
			url: originalRequest.url,
			status: error.response?.status,
			method: originalRequest.method?.toUpperCase(),
			error: error.message
		});

		// 401 에러(토큰 만료 등)이고, 재시도한 요청이 아닐 경우
		if (error.response?.status === 401 && !originalRequest._retry) {
			console.log('🔄 401 에러 감지 - 토큰 갱신 시도');
			originalRequest._retry = true; // 재시도 플래그 설정

			try {
				// AuthContext의 토큰 갱신 함수 사용
				if (refreshAuthToken) {
					console.log('🔄 refreshToken으로 새 accessToken 요청 중...');
					const newAccessToken = await refreshAuthToken();
					console.log('✅ 새 accessToken 발급 성공:', newAccessToken ? newAccessToken.substring(0, 20) + '...' : 'null');

					// 원래 요청에 새 토큰으로 재시도
					originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
					console.log('🔄 새 토큰으로 원래 요청 재시도:', originalRequest.url);
					return apiClient(originalRequest);
				} else {
					throw new Error('Token refresh function not available');
				}
			} catch (refreshError) {
				// 토큰 갱신 실패 시 로그아웃 처리 (AuthContext에서 처리하도록 유도)
				console.error('❌ 토큰 갱신 실패 - 로그인 페이지로 이동:', refreshError);
				window.location.href = '/bodyswitch-admin/';
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);


export default apiClient;
