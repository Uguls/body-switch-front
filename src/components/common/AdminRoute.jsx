import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';

/**
 * 관리자 라우트 보호 컴포넌트
 * 관리자 인증이 필요한 페이지들을 보호합니다
 */
const AdminRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	// 로딩 중인 경우 스피너 또는 로딩 화면 표시
	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-lg">로딩 중...</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		// 인증되지 않은 경우 관리자 로그인 페이지로 리다이렉트
		return <Navigate to="/bodyswitch-admin" replace />;
	}

	return children;
};

export default AdminRoute;