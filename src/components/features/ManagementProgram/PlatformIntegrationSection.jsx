import React from 'react';

import sportIconTop1 from '../../../assets/images/features/sport-icon-1.ico';
import sportIconTop2 from '../../../assets/images/features/sport-icon-2.ico';
import sportIconTop3 from '../../../assets/images/features/sport-icon-3.ico';
import sportIconTop4 from '../../../assets/images/features/sport-icon-4.ico';
import sportIconBottom1 from '../../../assets/images/features/sport-icon-5.ico';
import sportIconBottom2 from '../../../assets/images/features/sport-icon-6.ico';
import sportIconBottom3 from '../../../assets/images/features/sport-icon-7.ico';
import sportIconBottom4 from '../../../assets/images/features/sport-icon-8.ico';

const sportIcons = [
	sportIconTop1,
	sportIconTop2,
	sportIconTop3,
	sportIconTop4,
	sportIconBottom1,
	sportIconBottom2,
	sportIconBottom3,
	sportIconBottom4,
];

// 붓터치 모양의 하이라이트 SVG 컴포넌트 1
const HighlightSvg1 = ({className}) => (
	<svg
		width="180"
		height="24"
		viewBox="0 0 180 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none" // 이 속성 덕분에 SVG가 부모 요소에 맞게 늘어납니다.
		className={className}
	>
		<g style={{mixBlendMode: 'plus-darker'}}>
			<path
				d="M176.134 0C178.401 0.000154723 179.894 2.44305 179.044 4.54395C178.078 6.93295 177.143 9.811 177.143 12C177.143 19.3828 173.217 22.5381 171.467 23.5781C170.94 23.8911 170.328 24 169.715 24H3.15167C0.88485 23.9998 -0.608308 21.5569 0.241513 19.4561C1.20751 17.0671 2.14288 14.189 2.14288 12C2.14288 4.61715 6.06861 1.46194 7.81866 0.421875C8.34558 0.10892 8.9577 3.14853e-05 9.57061 0H176.134Z"
				fill="#2c7078"
			/>
		</g>
	</svg>
);

// 붓터치 모양의 하이라이트 SVG 컴포넌트 2
const HighlightSvg2 = ({className}) => (
	<svg
		width="211"
		height="24"
		viewBox="0 0 211 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		className={className}
	>
		<g style={{mixBlendMode: 'plus-darker'}}>
			<path
				d="M207.491 0C209.758 0.000156756 211.251 2.44305 210.401 4.54395C209.435 6.93295 208.5 9.811 208.5 12C208.5 19.3828 204.574 22.5381 202.824 23.5781C202.297 23.8911 201.685 24 201.072 24H3.15167C0.88485 23.9998 -0.608308 21.5569 0.241513 19.4561C1.20751 17.0671 2.14288 14.189 2.14288 12C2.14288 4.61715 6.06861 1.46194 7.81866 0.421875C8.34558 0.10892 8.9577 3.14853e-05 9.57061 0H207.491Z"
				fill="#2c7078"
			/>
		</g>
	</svg>
);

const PlatformIntegrationSection = () => {
	return (
		<div className="w-full h-auto relative pb-20">
			<svg
				width="100%"
				height="672"
				viewBox="0 0 1920 672"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute left-0 top-[535.5px] w-full hidden lg:block"
				preserveAspectRatio="none"
			>
				<path
					d="M960 0C1298.86 0 1622.7 64.2813 1920 181.312V672H0V181.312C297.302 64.2811 621.143 0 960 0Z"
					fill="#F4F5F7"
				></path>
			</svg>

			<div
				className="flex flex-col justify-start items-start w-full relative pt-40 sm:pt-52 lg:pt-60 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-12 lg:px-48">
				<div
					className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 border-l-4 border-[#e6e6e6]">
					<div className="self-stretch relative px-4 sm:px-6 lg:px-8">
						<p className="text-3xl sm:text-5xl lg:text-6xl font-medium text-left">
							<span className="text-[#4d4d4d]" style={{fontFamily: 'esamanru, sans-serif'}}>모든 종목을 통합한 </span>
							<span className="text-[#4ab3bc]" style={{fontFamily: 'esamanru, sans-serif'}}>만능 플랫폼</span>
						</p>
					</div>
					<div className="self-stretch relative px-4 sm:px-6 lg:px-8" style={{fontFamily: 'esamanru-light, sans-serif'}}>
						<p className="text-lg sm:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]"
						   style={{fontFamily: 'esamanru-light, sans-serif'}}>
							다종목 통합 관리, 하나로 해결하는 올인원 운동 플랫폼
						</p>
					</div>
				</div>

				<div
					className="flex flex-col lg:flex-row justify-start items-stretch self-stretch gap-6 sm:gap-8 lg:gap-[42px] xl:gap-5"
					style={{filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))'}}
				>
					<div
						className="w-full lg:flex-[1.2] h-auto relative overflow-hidden rounded-2xl bg-[#4ab3bc] p-8 flex flex-col items-center justify-center gap-8 min-h-[612px]">
						<div
							className="flex justify-center items-center absolute left-0 top-0 gap-2.5 px-8 py-4 rounded-tl-2xl rounded-br-2xl bg-[#d1f8fa]">
							<p className="text-3xl sm:text-5xl font-medium text-left text-[#4ab3bc]" style={{fontFamily: 'esamanru, sans-serif'}}>바디스위치</p>
						</div>
						<div className="w-full text-center">
							<p className="text-white text-3xl sm:text-[42px] leading-tight [text-shadow:1px_1px_2px_rgba(0,0,0,0.7)]">
								<span>'</span>
								<span className="font-bold relative inline-block mx-1">
									<HighlightSvg1
										className="absolute top-[45%] -left-5 w-120% h-[50%]"
										color="#3c96a0"
									/>
									<span className="relative z-10">모든 종목</span>
									</span>
								<span className="text-2xl sm:text-[32px] relative z-10">을 </span>
								<span className="font-bold relative inline-block mx-1" >
									<HighlightSvg2
										className="absolute top-[45%] -left-2 w-[110%] h-[50%]"
										color="#3c96a0"
									/>
									<span className="relative z-10">플랫폼 하나</span>
								</span>
								<span className="relative z-10 text-2xl sm:text-[32px]">에 담다</span>
								<span>'</span>
							</p>
						</div>
						<div className="w-full max-w-2xl grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
							{sportIcons.map((icon, index) => (
								<div key={index} className="aspect-square flex items-center justify-center">
									<img src={icon} className="w-full h-full rounded-xl sm:rounded-2xl object-cover drop-shadow-2xl"
									     alt={`종목 이미지 ${index + 1}`}/>
								</div>
							))}
						</div>
					</div>

					<div className="contents lg:flex lg:flex-col lg:flex-[1] xl:flex-row gap-6 sm:gap-8 lg:gap-[42px] xl:gap-5">
						<div
							className="self-stretch flex-grow relative overflow-hidden rounded-2xl bg-[#f2f2f2] flex justify-center items-center p-4 min-h-[400px] lg:min-h-0">
							<div
								className="flex justify-center items-center absolute left-0 top-0 gap-2.5 px-4 py-2 sm:px-8 sm:py-4 rounded-tl-2xl rounded-br-2xl bg-[#ccc]">
								<p className="text-3xl sm:text-5xl font-medium text-left text-[#f2f2f2]">A사</p>
							</div>
							<div
								className="flex flex-col justify-start items-center w-full max-w-sm gap-6 px-6 pt-20 pb-6 rounded-2xl bg-[#e6e6e6]">
								<p
									className="w-full font-bold text-center text-[#b3b3b3] break-keep min-h-[3.5rem] flex flex-col justify-center"
									style={{fontSize: 'clamp(1.25rem, 4vw, 1.875rem)'}}>
									<span>휘트니스</span>
									<span>1종목</span>
								</p>
								<img src={sportIcons[0]} className="rounded-[20px] object-cover mix-blend-luminosity grayscale"
								     style={{width: 'clamp(7rem, 20vw, 9rem)', height: 'clamp(7rem, 20vw, 9rem)'}} alt="휘트니스 이미지"/>
							</div>
						</div>

						<div
							className="self-stretch flex-grow relative overflow-hidden rounded-2xl bg-[#f2f2f2] flex justify-center items-center p-4 min-h-[400px] lg:min-h-0">
							<div
								className="flex justify-center items-center absolute left-0 top-0 gap-2.5 px-4 py-2 sm:px-8 sm:py-4 rounded-tl-2xl rounded-br-2xl bg-[#ccc]">
								<p className="text-3xl sm:text-5xl font-medium text-left text-[#f2f2f2]">B사</p>
							</div>
							<div
								className="flex flex-col justify-start items-center w-full max-w-sm gap-6 px-6 pt-20 pb-6 rounded-2xl bg-[#e6e6e6]">
								<p
									className="w-full font-bold text-center text-[#b3b3b3] break-keep min-h-[3.5rem] flex flex-col justify-center"
									style={{fontSize: 'clamp(1.25rem, 4vw, 1.875rem)'}}>
									<span>골프</span>
									<span>1종목</span>
								</p>
								<img src={sportIcons[2]} className="rounded-[20px] object-cover mix-blend-luminosity grayscale"
								     style={{width: 'clamp(7rem, 20vw, 9rem)', height: 'clamp(7rem, 20vw, 9rem)'}} alt="골프 이미지"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlatformIntegrationSection;
