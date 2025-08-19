import React from 'react';
import {
	ProgramHeroSection,
	PlatformIntegrationSection,
	ProgramFeaturesSection,
	PricingPlansSection,
	AdminAppCallToAction,
	ProgramCallToAction
} from '../components/features/index.jsx';

const ManagementProgramPage = ({ pricingSectionRef }) => {
	return (
		<div>
			<ProgramHeroSection />
			<PlatformIntegrationSection />
			<ProgramFeaturesSection />
			<div ref={pricingSectionRef}>
				<PricingPlansSection />
			</div>
			<AdminAppCallToAction />
			<ProgramCallToAction />
		</div>
	);
};

export default ManagementProgramPage;