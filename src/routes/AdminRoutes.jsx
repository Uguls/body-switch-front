import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
	LoginPage,
	InquiriesListPage,
	InquiryDetailPage,
	NoticesListPage,
	NoticeDetailPage,
	NoticeCreatePage,
	NoticeEditPage,
	EventCreatePage,
	EventsListPage,
	EventDetailPage,
	EventEditPage
} from '../pages/admin/index.js';
import AdminHeader from "../components/layout/AdminHeader.jsx";
import PrivateRoute from "../components/common/PrivateRoute.jsx";

const AdminRoutes = () => {
	const location = useLocation();


	// 로그인 페이지 경로 체크 (슬래시 유무 관계없이)
	const isLoginPage = location.pathname === '/bodyswitch-admin/' || location.pathname === '/bodyswitch-admin';

	return (
		<div className="min-h-screen bg-white">
			{!isLoginPage && <AdminHeader />}

			<main className={!isLoginPage ? "pt-24" : ""}>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					{/* 보호된 관리자 라우트 */}
					<Route path="/inquiries" element={
						<PrivateRoute>
							<InquiriesListPage />
						</PrivateRoute>
					} />
					<Route path="/inquiries/:id" element={
						<PrivateRoute>
							<InquiryDetailPage />
						</PrivateRoute>
					} />
					{/* 공지사항 */}
					<Route path="/notices" element={
						<PrivateRoute>
							<NoticesListPage />
						</PrivateRoute>
					} />
					<Route path="/notice/create" element={
						<PrivateRoute>
							<NoticeCreatePage />
						</PrivateRoute>
					} />
					<Route path="/notice/:id" element={
						<PrivateRoute>
							<NoticeDetailPage />
						</PrivateRoute>
					} />
					<Route path="/notice/edit/:id" element={
						<PrivateRoute>
							<NoticeEditPage />
						</PrivateRoute>
					} />
					{/* 이벤트 */}
					<Route path="/events" element={
						<PrivateRoute>
							<EventsListPage />
						</PrivateRoute>
					} />
					<Route path="/event/create" element={
						<PrivateRoute>
							<EventCreatePage />
						</PrivateRoute>
					} />
					<Route path="/event/:id" element={
						<PrivateRoute>
							<EventDetailPage />
						</PrivateRoute>
					} />
					<Route path="/event/edit/:id" element={
						<PrivateRoute>
							<EventEditPage />
						</PrivateRoute>
					} />
				</Routes>
			</main>
		</div>
	);
};

export default AdminRoutes;
