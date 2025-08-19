import React from 'react';
import {
	MemberAppHeroSection,
	AppChatFeaturesSection,
	FeedbackNotesSection,
	LocationSearchSection,
	AppDownloadGuideSection
} from "../components/features/index.jsx";

const MemberAppInfoPage = () => {
	return (
		<div>
			<MemberAppHeroSection />
			<AppChatFeaturesSection />
			<FeedbackNotesSection />
			<LocationSearchSection />
			<AppDownloadGuideSection />
		</div>
	);
};

export default MemberAppInfoPage;