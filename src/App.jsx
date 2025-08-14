import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppHeader, AppFooter, QuickMenuWidget } from "./components/layout/index.jsx";
import { KakaoConsultModal, ScrollToTopButton } from "./components/ui/index.jsx"; // ⬅️ 모달 컴포넌트 import
import ManagementProgramPage from "./pages/ManagementProgramPage.jsx";
import MemberAppInfoPage from "./pages/MemberAppInfoPage.jsx";
import EventListPage from "./pages/EventListPage.jsx";
import NoticePage from "./pages/NoticeListPage.jsx";
import CompanyAboutPage from "./pages/CompanyAboutPage.jsx";
import ServiceIntroPage from "./pages/ServiceIntroPage.jsx";
import ContactInquiryPage from "./pages/ContactInquiryPage.jsx";
import NoticeDetailPage from "./pages/NoticeDetailPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";

// 내부 컴포넌트로 라우터 로직 분리
const AppContent = () => {
	const pricingSectionRef = useRef(null);
	const location = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false); // ⬅️ 모달 상태 추가

	const openModal = () => setIsModalOpen(true); // ⬅️ 모달 열기 함수
	const closeModal = () => setIsModalOpen(false); // ⬅️ 모달 닫기 함수

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
				<QuickMenuWidget onPriceClick={scrollToPricingSection} onKakaoClick={openModal} /> {/* ⬅️ onKakaoClick props 전달 */}
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

			<KakaoConsultModal isOpen={isModalOpen} onClose={closeModal} /> {/* ⬅️ 모달 컴포넌트 렌더링 */}
			<ScrollToTopButton /> {/* ⬅️ 맨 위로 가기 버튼 */}
		</div>
	);
};

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;