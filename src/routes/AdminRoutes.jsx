import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminInquiriesPage from '../pages/admin/AdminInquiriesPage.jsx';
import AdminLogin from "../pages/AdminLogin.jsx";
import AdminHeader from "../components/layout/AdminHeader.jsx";
import InquiryDetail from "../pages/admin/InquiryDetail.jsx";
import AdminNoticeListPage from "../pages/admin/AdminNoticeListPage.jsx";
import NoticeCreatePage from "../pages/admin/NoticeCreatePage.jsx";
import AdminNoticeDetailPage from "../pages/admin/AdminNoticeDetailPage.jsx";
import NoticeEditPage from "../pages/admin/NoticeEditPage.jsx";

const AdminRoutes = () => {
	const location = useLocation();

	// 라우터의 현재 경로를 확인하기 위한 로그
	console.log('AdminRoutes 현재 경로:', location.pathname);

	// 로그인 페이지 경로를 명확하게 수정
	const isLoginPage = location.pathname === '/bodyswitch-admin/';

	return (
		<div className="min-h-screen bg-white">
			{!isLoginPage && <AdminHeader />}

			<main className={!isLoginPage ? "pt-24" : ""}>
				<Routes>
					{/* GitHub Pages 배포 등을 고려하여 basename에 맞게 경로 수정 */}
					<Route path="/" element={<AdminLogin />} />
					<Route path="/inquiries" element={<AdminInquiriesPage />} />
					<Route path="/inquiries/:id" element={<InquiryDetail />} />
					<Route path="/notices" element={<AdminNoticeListPage />} />
					<Route path="/notice/create" element={<NoticeCreatePage />} />
					<Route path="/notice/:id" element={<AdminNoticeDetailPage />} />
					<Route path="/notice/edit/:id" element={<NoticeEditPage />} />
				</Routes>
			</main>
		</div>
	);
};

export default AdminRoutes;
