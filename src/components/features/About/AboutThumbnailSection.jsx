import React from 'react';
import companyBackgroundImage from '../../../assets/images/about/company-background.png';
import companyTitleImage from '../../../assets/images/about/company-title.png';

const ThumbnailSection = () => {
	return (
		<div className="pt-20 md:pt-24 flex flex-col items-center w-full">
			<div className="flex justify-center items-center w-full relative gap-2.5 py-6 md:py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
				<p className="flex-grow-0 flex-shrink-0 text-3xl md:text-[40px] font-medium text-left text-[#333]"
				   style={{fontFamily: 'esamanru, sans-serif'}}>
					회사소개
				</p>
			</div>

			<div className="relative w-full">
				<img
					src={companyBackgroundImage}
					alt="회사소개 배경"
					className="w-full h-auto"
				/>

				<div className="absolute inset-0 bg-black/80"></div>

				<div className="absolute inset-0 flex items-center justify-center">
					<img
						src={companyTitleImage}
						alt="회사소개 제목"
						className="w-3/4 md:w-1/2 lg:w-2/5 h-auto transform scale-110 md:scale-100"
					/>
				</div>
			</div>
		</div>
	);
};

export default ThumbnailSection;
