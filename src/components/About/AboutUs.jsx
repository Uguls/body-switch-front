import React from 'react';

const AboutUs = () => {
	return (
		<div className="pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] my-30 gap-2 border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="flex-grow-0 flex-shrink-0 text-6xl font-medium text-left text-[#4ab3bc]">
						About Us
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="flex-grow-0 flex-shrink-0 text-[32px] font-light text-left text-[#4d4d4d]">
						스마트한 센터 운영의 시작, 바디스위치가 함께하겠습니다.
					</p>
				</div>
			</div>
			<img
				src="/src/assets/about/회사소개_About Us_내용.png"
				alt="brand story"
				className="w-full flex flex-col justify-center items-start"
			/>
		</div>
	);
};

export default AboutUs;