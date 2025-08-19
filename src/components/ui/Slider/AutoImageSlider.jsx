import React, { useState, useEffect } from 'react';

const AutoImageSlider = ({ 
	images, 
	interval = 4000, 
	className = '',
	imageClassName = '',
	showDots = true,
	showArrows = false,
	pauseOnHover = true 
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	// 자동 슬라이드 효과
	useEffect(() => {
		if (isPaused || images.length <= 1) return;

		const slideInterval = setInterval(() => {
			setCurrentIndex((prevIndex) => 
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, interval);

		return () => clearInterval(slideInterval);
	}, [currentIndex, isPaused, interval, images.length]);

	// 특정 슬라이드로 이동
	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	// 이전/다음 슬라이드
	const goToPrevious = () => {
		setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
	};

	const goToNext = () => {
		setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
	};

	// hover 시 일시정지
	const handleMouseEnter = () => {
		if (pauseOnHover) setIsPaused(true);
	};

	const handleMouseLeave = () => {
		if (pauseOnHover) setIsPaused(false);
	};

	if (!images || images.length === 0) {
		return <div className={className}>No images to display</div>;
	}

	return (
		<div 
			className={`relative ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* 이미지 컨테이너 */}
			<div className="relative w-full h-full overflow-hidden">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							index === currentIndex ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<img
							src={image.src}
							alt={image.alt || `Slide ${index + 1}`}
							className={`w-full h-full ${imageClassName}`}
						/>
					</div>
				))}
			</div>

			{/* 이전/다음 화살표 */}
			{showArrows && images.length > 1 && (
				<>
					<button
						onClick={goToPrevious}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
						aria-label="Previous image"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
					<button
						onClick={goToNext}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
						aria-label="Next image"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</>
			)}

			{/* 도트 인디케이터 */}
			{showDots && images.length > 1 && (
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-colors duration-300 ${
								index === currentIndex 
									? 'bg-white' 
									: 'bg-white/50 hover:bg-white/75'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default AutoImageSlider;