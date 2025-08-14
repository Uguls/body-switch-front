import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import QuickMenu from "./components/QuickMenu.jsx";
import ProgramManagementPage from "./pages/ProgramManagementPage.jsx";
import MemberAppPage from "./pages/MemberAppPage.jsx";
import EventListPage from "./pages/EventListPage.jsx";
import NoticePage from "./pages/NoticeListPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import IntroductionPage from "./pages/IntroductionPage.jsx";
import InquiryPage from "./pages/InquiryPage.jsx";
import NoticeDetailPage from "./pages/NoticeDetailPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";

// 내부 컴포넌트로 라우터 로직 분리
const AppContent = () => {
	const pricingSectionRef = useRef(null);
	const location = useLocation();

	const scrollToPricingSection = () => {
		if (pricingSectionRef.current) {
			pricingSectionRef.current.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	// URL 해시를 확인하여 가격 섹션으로 스크롤
	useEffect(() => {
		if (location.hash === '#pricing' && location.pathname === '/') {
			setTimeout(() => {
				scrollToPricingSection();
			}, 100);
		}
	}, [location]);

	return (
		<div className="min-h-screen bg-white">
			<Header/>
			<div>
				<QuickMenu onPriceClick={scrollToPricingSection} />
				<Routes>
					<Route path="/" element={<ProgramManagementPage pricingSectionRef={pricingSectionRef} />} />
					<Route path="/member-app" element={<MemberAppPage />} />
					<Route path="/event" element={<EventListPage />} />
					<Route path="/event/:id" element={<EventDetailPage />} />
					<Route path="/notice" element={<NoticePage />} />
					<Route path="/notice/:id" element={<NoticeDetailPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/introduction" element={<IntroductionPage />} />
					<Route path="/inquiry" element={<InquiryPage />} />
				</Routes>
			</div>
			<Footer />
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

export default App
