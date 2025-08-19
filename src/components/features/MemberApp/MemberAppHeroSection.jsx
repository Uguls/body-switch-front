import React from 'react';

// 이미지 import
import instructorAppImage from '../../../assets/memberApp/hero/instructor-app-home.png';
import memberAppImage from '../../../assets/memberApp/hero/member-app-home.png';
import appDownload from '../../../assets/memberApp/hero/앱 다운로드.png';

const MemberAppHeroSection = () => {
	return (
		// min-h-screen으로 변경하여 다양한 화면 높이에 대응합니다.
		<div className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-50 to-white">
			{/* 왼쪽 배경 도형 SVG */}
			<svg
				width="960"
				height="895"
				viewBox="0 0 960 895"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				// 위치를 % 단위로 변경하여 화면 크기가 변해도 일관된 위치를 유지합니다.
				className="absolute left-[-15%] top-[-25%] w-auto h-full max-w-[60%] hidden lg:block"
				preserveAspectRatio="xMinYMin meet"
			>
				<path
					d="M532.815 -2L862.786 328.127C992.405 457.807 992.405 668.06 862.786 797.74C733.167 927.42 523.013 927.42 393.394 797.74L0.000488281 404.18V-1.99998L532.815 -2Z"
					fill="#007177"
					fillOpacity="0.6"
				/>
			</svg>

			{/* [수정] 메인 컨텐츠 영역: 헤더 높이를 고려하여 상단 패딩(pt-20, md:pt-24)을 추가합니다. */}
			<div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-6 pt-20 pb-12 md:pt-24 md:px-12 lg:px-8">

				{/* 왼쪽 섹션: 타이틀 및 앱 다운로드 */}
				{/* 모바일에서는 중앙 정렬, lg 이상에서는 왼쪽 정렬되도록 수정합니다. */}
				<div className="w-full lg:flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-2xl">
					{/* text-white -> text-black 으로 변경 */}
					<div className="flex flex-col justify-start items-center lg:items-start gap-4 text-black">
						{/* 글자 크기를 화면 크기에 따라 여러 단계로 조절합니다. */}
						<p className="text-4xl sm:text-5xl lg:text-[56px]"
						   style={{fontFamily: 'Inklipquid, sans-serif'}}>
							더 쉬운 관리 더 큰 성공
						</p>
						<p className="text-6xl sm:text-7xl lg:text-[80px] font-medium"
						   style={{fontFamily: 'esamanru, sans-serif'}}>
							회원 ∙ 강사 APP
						</p>
					</div>
					<div className="flex flex-col justify-start items-center lg:items-start w-full max-w-md mt-10">
						<p className="text-2xl font-bold text-black">앱 다운로드</p>
						<img src={appDownload} alt="App Download"
						     className="w-full h-auto rounded-xl"
						/>
					</div>
				</div>

				{/* 오른쪽 섹션: 앱 미리보기 */}
				{/* flex-col lg:flex-row 를 적용하여 모바일에서는 세로, lg 이상에서는 가로로 배치합니다. */}
				<div className="w-full lg:flex-1 flex flex-col lg:flex-row justify-center items-center gap-12 mt-16 lg:mt-0">
					{/* pt/pb 패딩을 제거하고 부모의 gap으로 간격을 조절하여 세로/가로 배치에 모두 대응합니다. */}
					<div className="flex flex-col justify-start items-start gap-5">
						<div className="flex items-center gap-2.5 px-2.5 border-l-2 border-[#999]">
							<p className="text-lg font-bold text-left text-[#999]">회원 APP</p>
						</div>
						<div className="p-2.5 rounded-2xl bg-[#f3f3f3]" style={{ boxShadow: '0px 0px 20px 0 rgba(0,0,0,0.2)' }}>
							{/* 고정 너비 대신 max-w 를 사용하여 화면이 작아져도 깨지지 않게 합니다. */}
							<img src={memberAppImage} alt="회원 앱 홈 화면" className="w-full max-w-[280px] h-auto rounded-xl object-cover" />
						</div>
					</div>
					{/* lg 이상 화면에서만 y축 위치를 미세 조정합니다. */}
					<div className="flex flex-col justify-start items-start gap-5 lg:-translate-y-8">
						<div className="flex items-center gap-2.5 px-2.5 border-l-2 border-[#999]">
							<p className="text-lg font-bold text-left text-[#999]">강사 APP</p>
						</div>
						<div
							className="p-2.5 rounded-2xl bg-[#f3f3f3]"
							style={{ boxShadow: '0px 0px 20px 0 rgba(0,0,0,0.2)' }}
						>
							{/* div -> img 태그로 변경하여 이미지 표시 문제를 해결합니다. */}
							<img
								src={instructorAppImage}
								alt="강사 앱 홈 화면"
								className="w-full max-w-[280px] h-auto rounded-xl object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* 오른쪽 하단 배경 도형 SVG */}
			<svg
				width="928"
				height="1099"
				viewBox="0 0 928 1099"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-[-10%] right-[-5%] w-[50%] h-auto opacity-60 hidden lg:block"
				preserveAspectRatio="xMaxYMax slice"
			>
				<path
					d="M564.39 1096.11L112.001 643.56C-34.6671 496.795 -34.6671 258.84 112.001 112.074C258.096 -34.1173 494.607 -34.6884 641.407 110.361L643.13 112.074L933.624 402.828L933.624 1096.11L564.39 1096.11Z"
					stroke="url(#paint0_linear_1114_8730)"
					strokeOpacity="0.6"
					strokeWidth="4"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1114_8730"
						x1="521.003"
						y1="0.0010913"
						x2="521.003"
						y2="986.999"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#007177" />
						<stop offset="1" stopColor="#007177" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default MemberAppHeroSection;
