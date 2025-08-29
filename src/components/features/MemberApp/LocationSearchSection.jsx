import React from 'react';
import { CheckIcon } from '../../ui/index.jsx';
import mapSearchWideImage from '../../../assets/app-screenshots/member/map-search-wide.png';
import mapMockupImage from '../../../assets/app-screenshots/member/map-mockup.png';


function MapSearchSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full relative gap-8 md:gap-16 pb-24 sm:pb-32 md:pb-48">
			{/* 상단 헤더 */}
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left break-words">
						<span className="text-[#4ab3bc]" style={{fontFamily: 'esamanru, sans-serif'}}>가까운 센터</span>
						<span className="text-[#4d4d4d]" style={{fontFamily: 'esamanru, sans-serif'}}>를 </span>
						<span className="text-[#4ab3bc]" style={{fontFamily: 'esamanru, sans-serif'}}>쉽고 빠르게</span>
						<span className="text-[#4d4d4d]" style={{fontFamily: 'esamanru, sans-serif'}}> 탐색하세요</span>
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]"
					   style={{ fontFamily: 'esamanru-light, sans-serif' }}>
						지도 위에서 센터 정보와 가격을 한 눈에 확인하세요
					</p>
				</div>
			</div>

			{/* 지도 및 설명 섹션 */}
			<div className="w-full relative bg-[#efefef] overflow-hidden">
				{/* 배경 이미지 */}
				<img src={mapSearchWideImage} className="w-full h-full absolute inset-0 object-cover" style={{ filter: 'blur(10px)' }} alt="배경 흑백 지도"/>

				{/* 배경 장식 SVG */}
				<svg width="1731" height="890" viewBox="0 0 1731 890" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
					<path d="M1367.97 -19.8691L1084.94 263.151L1730.89 909.1L1705.1 934.893L1059.15 288.944L737.244 610.852L1047.95 921.558L989.558 979.95L678.852 669.244L323.5 1024.6L216.261 917.357L571.612 562.005L0.078125 -9.5293L58.4707 -67.9219L630.005 503.612L1260.73 -127.108L1367.97 -19.8691Z" fill="#BCE0E2" fillOpacity="0.6"></path>
				</svg>

				<div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-[1536px] mx-auto px-4 sm:px-8 py-12 md:py-24 gap-8">

					<div className="w-full lg:w-3/5 relative" style={{minHeight: '500px'}}>
						<div className="absolute left-[5%] sm:left-[10%] top-[5%] lg:top-[-15%] lg:left-[2%] w-auto z-20" style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }}>
							<div className="flex justify-center items-center h-auto relative gap-2.5 px-6 py-3 rounded-2xl bg-white">
								<p className="text-2xl md:text-3xl lg:text-[40px] text-left text-[#4d4d4d]"
									style={{fontFamily: 'esamanru-light, sans-serif'}}
								>
								내 주변 센터
								</p>
							</div>
							<div className="flex justify-start items-center relative gap-2.5 pl-6">
								<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path></svg>
							</div>
						</div>

						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[55%] w-[75%] max-w-md z-10">
							<img
								src={mapMockupImage}
								className="w-full h-auto rounded-[22px] object-cover"
								alt="핀과 가격이 표시된 지도 앱 목업"/>
						</div>
					</div>

					<div className="w-full lg:w-2/5 flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-6"
					     style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
					>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>지도 기반 탐색</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>간편한 위치 검색</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>실시간 요금 확인</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>내 주변 센터 찾기</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>쉽고 빠른 가격비교</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MapSearchSection;
