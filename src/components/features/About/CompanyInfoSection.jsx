import React from 'react';

const AboutUs = () => {
	return (
		// [수정] 상단 패딩과 전체적인 여백을 반응형으로 조절합니다.
		<div className="pt-20 md:pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] my-16 md:my-24 gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					{/* [수정] 텍스트 크기를 반응형으로 변경하고, 줄바꿈 처리를 추가합니다. */}
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words">
						About Us
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					{/* [수정] 텍스트 크기를 반응형으로 변경하고, 줄바꿈 처리를 추가합니다. */}
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d] break-words">
						스마트한 센터 운영의 시작, 바디스위치가 함께하겠습니다.
					</p>
				</div>
			</div>
			<img
				src="/src/assets/images/about/about-us-content.png"
				alt="About Us content"
				// [수정] 이미지가 너비에 맞게 조절되도록 클래스를 수정합니다.
				className="w-full h-auto"
			/>
		</div>
	);
};

export default AboutUs;
