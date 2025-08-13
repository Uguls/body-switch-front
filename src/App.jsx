import React, { useRef } from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import QuickMenu from "./components/QuickMenu.jsx";
import ManagementProgram from "./components/ManagementProgram.jsx";

function App() {
	const pricingSectionRef = useRef(null);

	const scrollToPricingSection = () => {
		if (pricingSectionRef.current) {
			pricingSectionRef.current.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	return (
		<div className="min-h-screen bg-white">
			<Header/>
			<div>
				<QuickMenu onPriceClick={scrollToPricingSection} />
				<ManagementProgram pricingSectionRef={pricingSectionRef} />
			</div>
			<Footer />
		</div>
	)
}

export default App
