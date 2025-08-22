import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { setAuthTokenFunctions } from '../api/apiClient.js';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null); // 메모리에 토큰 저장
  
  // useRef로 최신 토큰을 항상 참조할 수 있도록 함
  const accessTokenRef = useRef(null);

  /**
   * Access Token 메모리 저장 함수
   */
  const setToken = (token) => {
    setAccessToken(token);
    accessTokenRef.current = token; // ref도 동시에 업데이트
  };

  /**
   * Access Token 조회 함수 - ref를 사용하여 항상 최신 값 반환
   */
  const getToken = () => {
    console.log('🔍 AuthContext: getToken 호출됨 - 현재 토큰 (ref):', accessTokenRef.current ? accessTokenRef.current.substring(0, 20) + '...' : 'null');
    return accessTokenRef.current;
  };

  /**
   * 로그인 함수
   */
  const login = async (loginId, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // 쿠키 자동 포함
        body: JSON.stringify({ loginId, password })
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다.');
      }

      const data = await response.json();

      // Access Token을 메모리에 저장
      console.log('🔑 AuthContext: accessToken 메모리에 저장 중...', data.accessToken ? data.accessToken.substring(0, 20) + '...' : 'null');
      setAccessToken(data.accessToken);
      accessTokenRef.current = data.accessToken; // ref도 즉시 업데이트
      
      // 사용자 정보 저장 (localStorage 유지 - 재로그인 편의성)
      const userInfo = {
        loginId: data.loginId,
        username: data.username
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      
      setUser(userInfo);
      setIsAuthenticated(true);
      console.log('✅ AuthContext: 인증 상태 업데이트 완료 - isAuthenticated:', true);

      return data;
    } catch (error) {
      console.error('로그인 오류:', error);
      throw error;
    }
  };

  /**
   * 로그아웃 함수
   */
  const logout = async () => {
    try {
      // 서버에 로그아웃 요청 (refreshToken 블랙리스트 등록)
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include' // 쿠키의 refreshToken 전송
      });
    } catch (error) {
      console.error('로그아웃 요청 실패:', error);
    } finally {
      // 메모리 및 저장소 정리
      setAccessToken(null);
      accessTokenRef.current = null; // ref도 정리
      localStorage.removeItem('userInfo');
      setUser(null);
      setIsAuthenticated(false);
      
      // 로그인 페이지로 리다이렉트
      window.location.href = '/bodyswitch-admin/';
    }
  };

  /**
   * Refresh Token으로 Access Token 재발급
   */
  const refreshAccessToken = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        accessTokenRef.current = data.accessToken; // ref도 업데이트
        return data.accessToken;
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      throw error;
    }
  };

  /**
   * 토큰 유효성 검증
   */
  const verifyToken = async () => {
    if (!accessToken) return false;
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        credentials: 'include'
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  /**
   * 인증 상태 초기화
   */
  const initializeAuth = async () => {
    const userInfo = localStorage.getItem('userInfo');

    try {
      // Refresh Token으로 Access Token 재발급 시도
      const newAccessToken = await refreshAccessToken();
      
      if (newAccessToken && userInfo) {
        setUser(JSON.parse(userInfo));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('인증 초기화 실패:', error);
      // Refresh Token도 만료되었거나 없는 경우
      setAccessToken(null);
      accessTokenRef.current = null; // ref도 정리
      localStorage.removeItem('userInfo');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // apiClient에 토큰 함수 연결 (ref 기반이므로 한 번만 등록하면 됨)
    console.log('🔄 AuthContext: apiClient에 토큰 함수 등록');
    setAuthTokenFunctions(getToken, refreshAccessToken);
    
    initializeAuth();
  }, []);

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    verifyToken,
    getToken,
    setToken,
    refreshAccessToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};