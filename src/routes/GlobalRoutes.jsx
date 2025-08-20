import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserRoutes from './UserRoutes.jsx';
import AdminRoutes from './AdminRoutes.jsx';
import AdminRoute from '../components/common/AdminRoute.jsx';

/**
 * 관리자 경로 상수
 */
export const ADMIN_PATH = '/bodyswitch-admin';

/**
 * 글로벌 라우터
 * 사용자와 관리자 라우트를 분리해서 관리
 */
const GlobalRoutes = () => {
    return (
        <Routes>
            {/* 관리자 전용 라우트 */}
            <Route
                path={`${ADMIN_PATH}/*`}
                element={<AdminRoutes />}
            />
            
            {/* 일반 사용자 라우트 (모든 경로) */}
            <Route path="/*" element={<UserRoutes />} />
        </Routes>
    );
};

export default GlobalRoutes;