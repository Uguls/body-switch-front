import React from 'react';
import AppHeroSection from "../components/MemberApp/AppHeroSection.jsx";
import ChatSection from "../components/MemberApp/ChatSection.jsx";
import FeedbackNoteSection from "../components/MemberApp/FeedbackNoteSection.jsx";
import MapSearchSection from "../components/MemberApp/MapSearchSection.jsx";
import AppDownloadSection from "../components/MemberApp/AppDownloadSection.jsx";

const MemberAppPage = () => {
	return (
		<div>
			<AppHeroSection />
			<ChatSection />
			<FeedbackNoteSection />
			<MapSearchSection />
			<AppDownloadSection />
		</div>
	);
};

export default MemberAppPage;