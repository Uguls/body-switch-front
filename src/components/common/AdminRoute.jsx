import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * 관리자 라우트 보호 컴포넌트
 * 관리자 인증이 필요한 페이지들을 보호합니다
 */
const AdminRoute = ({ children }) => {
	// 임시로 localStorage에서 관리자 인증 상태를 확인
	// 실제 프로젝트에서는 Context나 Redux 등을 사용하여 관리
	const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

	if (!isAdminAuthenticated) {
		// 인증되지 않은 경우 관리자 로그인 페이지로 리다이렉트
		return <Navigate to="/bodyswitch-admin" replace />;
	}

	return children;
};

export default AdminRoute;