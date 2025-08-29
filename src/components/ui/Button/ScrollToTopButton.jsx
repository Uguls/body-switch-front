import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// 스크롤 위치에 따라 버튼 표시/숨김
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	// 맨 위로 스크롤하는 함수
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed bottom-4 right-1 sm:right-4 lg:right-8 z-40">
			<button
				onClick={scrollToTop}
				className="relative hover:scale-110 transition-transform duration-200 outline-none focus:outline-none active:outline-none"
				style={{
					background: 'none',
					border: 'none',
					padding: 0,
					margin: 0,
					boxShadow: 'none',
					outline: 'none',
					WebkitTapHighlightColor: 'transparent'
				}}
				onMouseDown={(e) => e.preventDefault()}
				onFocus={(e) => e.preventDefault()}
				aria-label="맨 위로 이동"
			>
				<svg
					width="120"
					height="120"
					viewBox="0 0 104 104"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-20 h-20 md:w-16 md:h-16 lg:w-25 lg:h-25"
					preserveAspectRatio="xMidYMid meet"
				>
					<defs>
						<filter
							id="filter0_d_905_7324"
							x="0"
							y="0"
							width="104"
							height="104"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset />
							<feGaussianBlur stdDeviation="10" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_905_7324"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_905_7324"
								result="shape"
							/>
						</filter>
					</defs>
					<g filter="url(#filter0_d_905_7324)">
						<rect x="20" y="20" width="64" height="64" rx="32" fill="white" />
						<path
							d="M39 58L52 42L65 58"
							stroke="#404040"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default ScrollToTopButton;