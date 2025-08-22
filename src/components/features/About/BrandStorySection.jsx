import React from 'react';

const BrandStory = () => {
	return (
		// [수정] 상단 패딩과 전체적인 여백을 반응형으로 조절합니다.
		<div className="pt-5 md:pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] my-16 md:my-24 gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					{/* [수정] 텍스트 크기를 반응형으로 변경하고, 줄바꿈 처리를 추가합니다. */}
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words">
						Brand Story
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]">
						바디스위치는 시설운영자분들의 말에 귀를 기울였습니다.
					</p>
				</div>
			</div>
			{/* 배경과 글자 이미지를 분리한 섹션 - 화면 높이에 맞춤 */}
			<div className="relative w-full h-[60vh] md:h-auto overflow-hidden">
				{/* 배경 이미지 - 화면 전체 커버 */}
				<img
					src="/src/assets/images/about/brand-story-background.jpg"
					alt="브랜드 스토리 배경"
					className="w-full h-full object-cover"
				/>
				
				{/* 어두운 오버레이 */}
				<div className="absolute inset-0 bg-black/80"></div>
				
				<div className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-4 md:p-8 lg:p-16">
					<div className="flex flex-col gap-1 md:gap-3 w-full max-w-4xl h-full justify-center">
						{[1, 2, 3, 4, 5, 6, 7].map((index) => (
							<div key={index} className="flex justify-center md:justify-start flex-1">
								<img
									src={`/src/assets/images/about/brand-story-content-${index}.png`}
									alt={`브랜드 스토리 내용 ${index}`}
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
