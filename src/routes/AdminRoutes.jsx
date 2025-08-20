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

const AdminRoutes = () => {
	const location = useLocation();


	// 로그인 페이지 경로를 명확하게 수정
	const isLoginPage = location.pathname === '/bodyswitch-admin/';

	return (
		<div className="min-h-screen bg-white">
			{!isLoginPage && <AdminHeader />}

			<main className={!isLoginPage ? "pt-24" : ""}>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					{/* 문의 사항 */}
					<Route path="/inquiries" element={<InquiriesListPage />} />
					<Route path="/inquiries/:id" element={<InquiryDetailPage />} />
					{/* 공지사항 */}
					<Route path="/notices" element={<NoticesListPage />} />
					<Route path="/notice/create" element={<NoticeCreatePage />} />
					<Route path="/notice/:id" element={<NoticeDetailPage />} />
					<Route path="/notice/edit/:id" element={<NoticeEditPage />} />
					{/* 이벤트 */}
					<Route path="/events" element={<EventsListPage />} />
					<Route path="/event/create" element={<EventCreatePage />} />
					<Route path="/event/:id" element={<EventDetailPage />} />
					<Route path="/event/edit/:id" element={<EventEditPage />} />
				</Routes>
			</main>
		</div>
	);
};

export default AdminRoutes;
