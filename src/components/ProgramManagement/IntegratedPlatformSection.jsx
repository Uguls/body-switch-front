import React from 'react';

// 종목 아이콘 이미지들 import
import sportIconTop1 from '../../assets/ProgramManagement/sport_icon_top_1.png';
import sportIconTop2 from '../../assets/ProgramManagement/sport_icon_top_2.png';
import sportIconTop3 from '../../assets/ProgramManagement/sport_icon_top_3.png';
import sportIconTop4 from '../../assets/ProgramManagement/sport_icon_top_4.png';
import sportIconBottom1 from '../../assets/ProgramManagement/sport_icon_bottom_1.png';
import sportIconBottom2 from '../../assets/ProgramManagement/sport_icon_bottom_2.png';
import sportIconBottom3 from '../../assets/ProgramManagement/sport_icon_bottom_3.png';
import sportIconBottom4 from '../../assets/ProgramManagement/sport_icon_bottom_4.png';

const IntegratedPlatformSection = () => {
	return (
		<div className="w-[1920px] h-[1208px] relative">
			<svg
				width="1920"
				height="672"
				viewBox="0 0 1920 672"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute left-[-0.5px] top-[535.5px]"
				preserveAspectRatio="none"
			>
				<path
					d="M960 0C1298.86 0 1622.7 64.2813 1920 181.312V672H0V181.312C297.302 64.2811 621.143 0 960 0Z"
					fill="#F4F5F7"
				></path>
			</svg>
			
			<div className="flex flex-col justify-start items-start w-[1920px] absolute left-0 top-60 gap-16 px-48">
				<div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1536px] gap-2 border-t-0 border-r-0 border-b-0 border-l-4 border-[#e6e6e6]">
					<div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-8"
					style={{fontFamily: 'esamanru, sans-serif'}}>
						<p className="flex-grow-0 flex-shrink-0 text-6xl font-medium text-left">
							<span className="flex-grow-0 flex-shrink-0 text-6xl font-medium text-left text-[#4d4d4d]">모든 종목을 통합한 </span>
							<span className="flex-grow-0 flex-shrink-0 text-6xl font-medium text-left text-[#4ab3bc]">만능 플랫폼</span>
						</p>
					</div>
					<div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-8"
					     style={{fontFamily: 'esamanru, sans-serif'}}>
						<p className="flex-grow-0 flex-shrink-0 text-[32px] font-light text-left text-[#4d4d4d]">
							다종목 통합 관리, 하나로 해결하는 올인원 운동 플랫폼
						</p>
					</div>
				</div>
				
				<div 
					className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[612px] relative gap-[42px]"
					style={{filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))'}}
				>
					<div className="self-stretch flex-grow-0 flex-shrink-0 w-[792px] relative overflow-hidden rounded-2xl bg-[#4ab3bc]">
						<div 
							className="flex flex-col justify-center items-start absolute left-16 top-[249px] gap-6"
							style={{filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))'}}
						>
							<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
								<img
									src={sportIconTop1}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 1"
								/>
								<img
									src={sportIconTop2}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 2"
								/>
								<img
									src={sportIconTop3}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 3"
								/>
								<img
									src={sportIconTop4}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 4"
								/>
							</div>
							<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
								<img
									src={sportIconBottom1}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 5"
								/>
								<img
									src={sportIconBottom2}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 6"
								/>
								<img
									src={sportIconBottom3}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 7"
								/>
								<img
									src={sportIconBottom4}
									className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none"
									alt="종목 이미지 8"
								/>
							</div>
						</div>
						
						<div className="flex justify-center items-center absolute left-0 top-0 gap-2.5 px-8 py-4 rounded-tl-2xl rounded-br-2xl bg-[#d1f8fa]"
						     style={{fontFamily: 'esamanru, sans-serif'}}>
							<p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-left text-[#4ab3bc]">
								바디스위치
							</p>
						</div>
						
						<svg
							width="180"
							height="24"
							viewBox="0 0 180 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute left-[117.5px] top-[160.5px] opacity-50"
							preserveAspectRatio="none"
						>
							<g style={{mixBlendMode: 'plus-darker'}} opacity="0.5">
								<path
									d="M176.134 0C178.401 0.000154723 179.894 2.44305 179.044 4.54395C178.078 6.93295 177.143 9.811 177.143 12C177.143 19.3828 173.217 22.5381 171.467 23.5781C170.94 23.8911 170.328 24 169.715 24H3.15167C0.88485 23.9998 -0.608308 21.5569 0.241513 19.4561C1.20751 17.0671 2.14288 14.189 2.14288 12C2.14288 4.61715 6.06861 1.46194 7.81866 0.421875C8.34558 0.10892 8.9577 3.14853e-05 9.57061 0H176.134Z"
									fill="#4AB3BC"
								></path>
							</g>
						</svg>
						
						<svg
							width="211"
							height="24"
							viewBox="0 0 211 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute left-[319.5px] top-[160.5px] opacity-50"
							preserveAspectRatio="none"
						>
							<g style={{mixBlendMode: 'plus-darker'}} opacity="0.5">
								<path
									d="M207.491 0C209.758 0.000156756 211.251 2.44305 210.401 4.54395C209.435 6.93295 208.5 9.811 208.5 12C208.5 19.3828 204.574 22.5381 202.824 23.5781C202.297 23.8911 201.685 24 201.072 24H3.15167C0.88485 23.9998 -0.608308 21.5569 0.241513 19.4561C1.20751 17.0671 2.14288 14.189 2.14288 12C2.14288 4.61715 6.06861 1.46194 7.81866 0.421875C8.34558 0.10892 8.9577 3.14853e-05 9.57061 0H207.491Z"
									fill="#4AB3BC"
								></path>
							</g>
						</svg>
						
						<div className="w-[582px] h-[57px] absolute left-[123px] top-[151px]">
							<p className="w-[582px] absolute left-0 top-0 text-center text-white">
								<span className="w-[522px] text-[42px] text-center text-white">'</span>
								<span className="w-[522px] text-[42px] font-bold text-center text-white">모든 종목</span>
								<span className="w-[522px] text-[32px] text-center text-white">을</span>
								<span className="w-[522px] text-[42px] text-center text-white"> </span>
								<span className="w-[522px] text-[42px] font-bold text-center text-white">플랫폼 하나</span>
								<span className="w-[522px] text-[32px] text-center text-white">에 담다</span>
								<span className="w-[522px] text-[42px] text-center text-white">'</span>
							</p>
						</div>
					</div>
					
					<div className="self-stretch flex-grow relative overflow-hidden rounded-2xl bg-[#f2f2f2]">
						<div className="flex justify-center items-center absolute left-0 top-0 gap-2.5 px-8 py-4 rounded-tl-2xl rounded-br-2xl bg-[#ccc]">
							<p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-left text-[#f2f2f2]">A사</p>
						</div>
						<div className="flex flex-col justify-start items-center w-[244px] absolute left-[43px] top-[170px] gap-9 px-6 pt-6 pb-12 rounded-2xl bg-[#e6e6e6]">
							<p className="flex-grow-0 flex-shrink-0 w-[195px] text-[42px] font-bold text-center text-[#b3b3b3]">
								<span className="flex-grow-0 flex-shrink-0 w-[195px] text-[42px] font-bold text-center text-[#b3b3b3]">휘트니스</span>
								<br />
								<span className="flex-grow-0 flex-shrink-0 w-[195px] text-[42px] font-bold text-center text-[#b3b3b3]">1 종목</span>
							</p>
							<img
								src={sportIconTop1}
								className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none mix-blend-luminosity grayscale"
								alt="휘트니스 이미지"
							/>
						</div>
					</div>
					
					<div className="self-stretch flex-grow relative overflow-hidden rounded-2xl bg-[#f2f2f2]">
						<div className="flex justify-center items-center absolute left-0 top-0 gap-2.5 px-8 py-4 rounded-tl-2xl rounded-br-2xl bg-[#ccc]">
							<p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-left text-[#f2f2f2]">B사</p>
						</div>
						<div className="flex flex-col justify-start items-center w-[244px] h-[370px] absolute left-[43px] top-[170px] gap-9 px-6 pt-6 pb-12 rounded-2xl bg-[#e6e6e6]">
							<p className="flex-grow-0 flex-shrink-0 w-[195px] text-[42px] font-bold text-center text-[#b3b3b3]">
								<span className="flex-grow-0 flex-shrink-0 w-[195px] text-[42px] font-bold text-center text-[#b3b3b3]">골프</span>
								<br />
								<span className="flex-grow-0 flex-shrink-0 w-[195px] text-[42px] font-bold text-center text-[#b3b3b3]">1 종목</span>
							</p>
							<img
								src={sportIconTop3}
								className="flex-grow-0 flex-shrink-0 w-[148px] h-[148px] rounded-[20px] object-none mix-blend-luminosity grayscale"
								alt="골프 이미지"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntegratedPlatformSection;