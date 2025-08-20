/**
 * Authentication utilities
 * Token management and authentication state helpers
 */

/**
 * Check if user is authenticated
 * @returns {boolean} True if access token exists
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('accessToken');
};

/**
 * Get current access token
 * @returns {string|null} Access token or null
 */
export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

/**
 * Clear authentication tokens
 * Removes access token from localStorage
 */
export const clearAuthTokens = () => {
  localStorage.removeItem('accessToken');
};

/**
 * Set access token
 * @param {string} token - Access token to store
 */
export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};