import React from 'react';

const ThumbnailSection = () => {
	return (
		<div className="pt-24 flex flex-col items-center w-full">
			<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
				<p className="flex-grow-0 flex-shrink-0 text-[40px] font-medium text-left text-[#333]"
				   style={{fontFamily: 'esamanru, sans-serif'}}>
					회사소개
				</p>
			</div>
			<img
				src="/src/assets/about/회사소개_ 썸네일.png"
				alt="thum nail"
				className="w-full flex flex-col justify-center items-start"
			/>
		</div>
	);
};

export default ThumbnailSection;