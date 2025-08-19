import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppHeader, AppFooter, QuickMenuWidget } from "../components/layout/index.jsx";
import { KakaoConsultModal, ScrollToTopButton } from "../components/ui/index.jsx";
import ManagementProgramPage from "../pages/ManagementProgramPage.jsx";
import MemberAppInfoPage from "../pages/MemberAppInfoPage.jsx";
import EventListPage from "../pages/EventListPage.jsx";
import NoticePage from "../pages/NoticeListPage.jsx";
import CompanyAboutPage from "../pages/CompanyAboutPage.jsx";
import ServiceIntroPage from "../pages/ServiceIntroPage.jsx";
import ContactInquiryPage from "../pages/ContactInquiryPage.jsx";
import NoticeDetailPage from "../pages/NoticeDetailPage.jsx";
import EventDetailPage from "../pages/EventDetailPage.jsx";

/**
 * 사용자용 라우트 컴포넌트
 * 기존 App.jsx의 AppContent 로직을 이곳으로 이동
 */
const UserRoutes = () => {
	const pricingSectionRef = useRef(null);
	const location = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const scrollToPricingSection = () => {
		if (pricingSectionRef.current) {
			pricingSectionRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	useEffect(() => {
		if (location.hash === '#pricing' && location.pathname === '/') {
			setTimeout(() => {
				scrollToPricingSection();
			}, 100);
		}
	}, [location]);

	return (
		<div className="min-h-screen bg-white">
			<AppHeader />
			<div>
				<QuickMenuWidget onPriceClick={scrollToPricingSection} onKakaoClick={openModal} />
				<Routes>
					<Route path="/" element={<ManagementProgramPage pricingSectionRef={pricingSectionRef} />} />
					<Route path="/member-app" element={<MemberAppInfoPage />} />
					<Route path="/event" element={<EventListPage />} />
					<Route path="/event/:id" element={<EventDetailPage />} />
					<Route path="/notice" element={<NoticePage />} />
					<Route path="/notice/:id" element={<NoticeDetailPage />} />
					<Route path="/about" element={<CompanyAboutPage />} />
					<Route path="/introduction" element={<ServiceIntroPage />} />
					<Route path="/inquiry" element={<ContactInquiryPage />} />
				</Routes>
			</div>
			<AppFooter />

			<KakaoConsultModal isOpen={isModalOpen} onClose={closeModal} />
			<ScrollToTopButton />
		</div>
	);
};

export default UserRoutes;