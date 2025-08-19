// src/api/api.js

const BASE_URL = 'http://localhost:8080';

// 1. 로그인 API
export const login = async (loginId, password) => {
	const response = await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		// credentials: 'include',
		body: JSON.stringify({ loginId, password }),
	});

	if (!response.ok) {
		// 401 Unauthorized 에러의 경우 좀 더 구체적인 메시지를 전달
		if (response.status === 401) {
			throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
		}
		throw new Error('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
	}

	const data = await response.json();
	// AccessToken을 localStorage에 저장
	if (data.accessToken) {
		localStorage.setItem('accessToken', data.accessToken);
	}
	return data;
};

// 2. 토큰 갱신 API
export const refreshToken = async () => {
	const response = await fetch(`${BASE_URL}/admin/refresh`, {
		method: 'POST',
		credentials: 'include', // 쿠키의 refreshToken을 자동으로 전송
	});

	if (!response.ok) {
		// 토큰 갱신 실패 시 기존 토큰 삭제 및 로그인 페이지로 유도
		logout();
		throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
	}

	const data = await response.json();
	if (data.accessToken) {
		localStorage.setItem('accessToken', data.accessToken);
	}
	return data;
};

// 3. 로그아웃 API
export const logout = async () => {
	// 서버에 로그아웃 요청을 보내 쿠키를 삭제하도록 함
	await fetch(`${BASE_URL}/admin/logout`, {
		method: 'POST',
		credentials: 'include',
	});

	// 클라이언트 측에서도 토큰을 깨끗하게 정리
	localStorage.removeItem('accessToken');
	// 필요하다면 로그인 페이지로 이동
	// window.location.href = '/login';
};

/**
 * 4. 인증이 필요한 API 호출을 위한 래퍼(wrapper) 함수
 * @param {string} url - 요청할 엔드포인트 (e.g., '/admin/products')
 * @param {object} options - fetch API에 전달할 추가 옵션
 * @returns {Promise<Response>} - fetch 응답 객체
 */
export const apiCall = async (url, options = {}) => {
	const accessToken = localStorage.getItem('accessToken');

	const headers = {
		'Content-Type': 'application/json',
		...options.headers,
	};

	// AccessToken이 있다면 Authorization 헤더에 추가
	if (accessToken) {
		headers['Authorization'] = `Bearer ${accessToken}`;
	}

	let response = await fetch(`${BASE_URL}${url}`, {
		...options,
		headers,
		credentials: 'include',
	});

	// 401 에러(AccessToken 만료) 발생 시 토큰 갱신 시도
	if (response.status === 401) {
		try {
			await refreshToken();
			const newAccessToken = localStorage.getItem('accessToken');

			// 갱신된 토큰으로 원래 요청을 다시 시도
			headers['Authorization'] = `Bearer ${newAccessToken}`;
			response = await fetch(`${BASE_URL}${url}`, {
				...options,
				headers,
				credentials: 'include',
			});

		} catch (error) {
			// refreshToken 실패 시 로그아웃 처리
			// 로그인 페이지로 리다이렉트하는 로직을 여기에 추가할 수 있습니다.
			console.error("토큰 갱신 실패:", error);
			logout();
			// 에러를 다시 던져서 호출한 쪽에서 후속 처리를 할 수 있게 함
			throw new Error('인증이 만료되었습니다.');
		}
	}

	return response;
};

// 사용 예시:
// const productsResponse = await apiCall('/admin/products');
// const products = await productsResponse.json();