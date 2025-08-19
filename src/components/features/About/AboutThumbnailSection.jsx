import React from 'react';

const ThumbnailSection = () => {
	return (
		// [수정] 헤더 높이를 고려하여 상단 패딩을 반응형으로 조절합니다.
		<div className="pt-20 md:pt-24 flex flex-col items-center w-full">
			<div className="flex justify-center items-center w-full relative gap-2.5 py-6 md:py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
				{/* [수정] 텍스트 크기를 화면 크기에 맞춰 조절합니다. */}
				<p className="flex-grow-0 flex-shrink-0 text-3xl md:text-[40px] font-medium text-left text-[#333]"
				   style={{fontFamily: 'esamanru, sans-serif'}}>
					회사소개
				</p>
			</div>
			<img
				src="/src/assets/about/회사소개_ 썸네일.png"
				alt="thumbnail"
				// w-full을 유지하여 이미지가 항상 가로 너비에 맞게 표시되도록 합니다.
				className="w-full h-auto"
			/>
		</div>
	);
};

export default ThumbnailSection;
