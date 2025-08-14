import React from 'react';
import ThumbnailSection from "../components/About/ThumbnailSection.jsx";
import BrandStory from "../components/About/BrandStory.jsx";
import AboutUs from "../components/About/AboutUs.jsx";
import CtaSection from "../components/ProgramManagement/CtaSection.jsx";

const AboutPage = () => {
	return (
		<>
			<ThumbnailSection />
			<BrandStory />
			<AboutUs />
			<CtaSection />
		</>
	);
};

export default AboutPage;