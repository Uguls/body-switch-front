import React from 'react';
import brandStoryBackgroundImage from '../../../assets/images/about/brand-story-background.jpg';
import brandStoryContent1 from '../../../assets/images/about/brand-story-content-1.png';
import brandStoryContent2 from '../../../assets/images/about/brand-story-content-2.png';
import brandStoryContent3 from '../../../assets/images/about/brand-story-content-3.png';
import brandStoryContent4 from '../../../assets/images/about/brand-story-content-4.png';
import brandStoryContent5 from '../../../assets/images/about/brand-story-content-5.png';
import brandStoryContent6 from '../../../assets/images/about/brand-story-content-6.png';
import brandStoryContent7 from '../../../assets/images/about/brand-story-content-7.png';

const BrandStory = () => {
	const brandStoryImages = [
		brandStoryContent1,
		brandStoryContent2,
		brandStoryContent3,
		brandStoryContent4,
		brandStoryContent5,
		brandStoryContent6,
		brandStoryContent7
	];

	return (
		<div className="pt-5 md:pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] my-16 md:my-24 gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words" style={{fontFamily: 'esamanru, sans-serif'}}>
						Brand Story
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]"
					   style={{fontFamily: 'esamanru-light, sans-serif'}}
					>
						바디스위치는 시설운영자분들의 말에 귀를 기울였습니다.
					</p>
				</div>
			</div>

			<div className="relative w-full h-[60vh] md:h-auto overflow-hidden">
				<img
					src={brandStoryBackgroundImage}
					alt="브랜드 스토리 배경"
					className="w-full h-full object-cover"
				/>

				<div className="absolute inset-0 bg-black/80"></div>

				<div className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-4 md:p-8 lg:p-16">
					<div className="flex flex-col gap-1 md:gap-3 w-full max-w-4xl h-full justify-center">
						{brandStoryImages.map((image, index) => (
							<div key={index} className="flex justify-center md:justify-start flex-1">
								<img
									src={image}
									alt={`브랜드 스토리 내용 ${index + 1}`}
									className="h-auto w-auto max-h-full object-contain"
									style={{ maxWidth: '80%' }}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrandStory;