/**
 * Authentication utilities
 * @deprecated 이 파일은 더 이상 사용되지 않습니다.
 * 메모리 기반 토큰 관리를 위해 AuthContext를 사용하세요.
 * 
 * Legacy token management functions (localStorage 기반)
 * 현재는 AuthContext에서 메모리 기반으로 토큰을 관리합니다.
 */

/**
 * @deprecated Use AuthContext.isAuthenticated instead
 */
export const isAuthenticated = () => {
  console.warn('auth.js isAuthenticated is deprecated. Use AuthContext instead.');
  return !!localStorage.getItem('accessToken');
};

/**
 * @deprecated Use AuthContext.getToken() instead
 */
export const getAccessToken = () => {
  console.warn('auth.js getAccessToken is deprecated. Use AuthContext instead.');
  return localStorage.getItem('accessToken');
};

/**
 * @deprecated Use AuthContext.logout() instead
 */
export const clearAuthTokens = () => {
  console.warn('auth.js clearAuthTokens is deprecated. Use AuthContext instead.');
  localStorage.removeItem('accessToken');
};

/**
 * @deprecated Use AuthContext.setToken() instead
 */
export const setAccessToken = (token) => {
  console.warn('auth.js setAccessToken is deprecated. Use AuthContext instead.');
  localStorage.setItem('accessToken', token);
};