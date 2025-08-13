import React from 'react';
import HeroComponent from '../components/ProgramManagement/HeroComponent.jsx';
import IntegratedPlatformSection from '../components/ProgramManagement/IntegratedPlatformSection.jsx';
import FeatureSection from '../components/ProgramManagement/FeatureSection.jsx';
import PricingSection from '../components/ProgramManagement/PricingSection.jsx';
import AdminAppCtaSection from '../components/ProgramManagement/AdminAppCtaSection.jsx';
import CtaSection from '../components/ProgramManagement/CtaSection.jsx';

const ProgramManagementPage = ({ pricingSectionRef }) => {
	return (
		<div>
			<HeroComponent />
			<IntegratedPlatformSection />
			<FeatureSection />
			<div ref={pricingSectionRef}>
				<PricingSection />
			</div>
			<AdminAppCtaSection />
			<CtaSection />
		</div>
	);
};

export default ProgramManagementPage;