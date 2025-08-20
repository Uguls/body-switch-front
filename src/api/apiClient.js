import axios from 'axios';

// 1. Axios 인스턴스 생성
const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL, // 환경변수에서 기본 URL 설정
	withCredentials: true, // 쿠키 기반 인증 시 필요할 수 있음
});

// 2. 요청 인터셉터(Request Interceptor) 설정
//    - 모든 요청이 서버로 전송되기 전에 가로채서 특정 작업을 수행합니다.
apiClient.interceptors.request.use(
	(config) => {
		// localStorage에서 accessToken을 가져옵니다.
		const accessToken = localStorage.getItem('accessToken');

		// 토큰이 존재하면 Authorization 헤더에 추가합니다.
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
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
		// 정상 응답은 그대로 반환
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		// 401 에러(토큰 만료 등)이고, 재시도한 요청이 아닐 경우
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true; // 재시도 플래그 설정

			try {
				// 토큰 갱신 API 호출 (이전에 만든 api.js의 refreshToken 함수 활용 가능)
				// const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/refresh`, {}, { withCredentials: true });
				// localStorage.setItem('accessToken', data.accessToken);

				// 갱신된 토큰으로 원래 요청을 다시 시도
				// apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
				// return apiClient(originalRequest);

				// 토큰 갱신 실패 시 로그인 페이지로 이동
				window.location.href = '/bodyswitch-admin/';

			} catch (refreshError) {
				// 토큰 갱신 실패
				localStorage.removeItem('accessToken');
				window.location.href = '/bodyswitch-admin/';
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);


export default apiClient;
