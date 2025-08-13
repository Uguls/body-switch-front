import React, { useRef } from 'react';
import HeroComponent from './HeroComponent.jsx';
import IntegratedPlatformSection from './IntegratedPlatformSection.jsx';
import FeatureSection from './FeatureSection.jsx';
import PricingSection from './PricingSection.jsx';
import AdminAppCtaSection from './AdminAppCtaSection.jsx';
import CtaSection from './CtaSection.jsx';

const ManagementProgram = ({ pricingSectionRef }) => {
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

export default ManagementProgram;