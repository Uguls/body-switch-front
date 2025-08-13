import React from 'react';

// 반복되는 체크 아이콘
const CheckIcon = () => (
	<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative">
		<path d="M45.3462 10.5664L19.5423 33.1565L9.86165 17.1456L13.141 15.1615L20.4576 27.2605L42.8231 7.68392L45.3462 10.5664Z" fill="#052C2E"></path>
		<path d="M34.5013 12.4232L30.668 15.7773V11.0418H5.7513V35.9585H19.0014L19.0894 36.1045L19.2559 35.9585H30.668V25.9671L34.5013 22.6111V39.7918H1.91797V7.2085H34.5013V12.4232Z" fill="white"></path>
	</svg>
);

// 지도 핀 아이콘 (내부 필터 포함)
const MapPinIcon = () => (
	<svg width="96" height="140" viewBox="0 0 136 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }} preserveAspectRatio="xMidYMid meet">
		<g>
			<path d="M115.941 71.71C115.941 102.557 89.8333 145.476 67.9706 159.8C45.6012 145.16 20 102.557 20 71.71C20 43.1513 41.4772 20 67.9706 20C94.464 20 115.941 43.1513 115.941 71.71Z" fill="#108389"></path>
			<circle cx="67.9708" cy="66.6002" r="21.0157" fill="white"></circle>
		</g>
	</svg>
);


function MapSearchSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full relative gap-16">
			{/* 상단 헤더 */}
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 border-l-4 border-[#e6e6e6]">
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="text-6xl font-medium text-left">
						<span className="text-[#4ab3bc]">가까운 센터</span>
						<span className="text-[#4d4d4d]">를 </span>
						<span className="text-[#4ab3bc]">쉽고 빠르게</span>
						<span className="text-[#4d4d4d]"> 탐색하세요</span>
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="text-[32px] font-light text-left text-[#4d4d4d]">
						지도 위에서 센터 정보와 가격을 한 눈에 확인하세요
					</p>
				</div>
			</div>

			{/* 지도 및 설명 섹션 */}
			<div className="w-full h-[890px] relative overflow-hidden bg-[#efefef]">
				{/* 배경 이미지 */}
				<img src="/src/assets/memberApp/chat/넓은-지도_흑백-1.png" className="w-full h-full absolute inset-0 object-cover" style={{ filter: 'blur(10px)' }} alt="배경 흑백 지도"/>

				{/* 배경 장식 SVG */}
				<svg width="1731" height="890" viewBox="0 0 1731 890" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[50.58px] top-[-127.61px]" preserveAspectRatio="none">
					<path d="M1367.97 -19.8691L1084.94 263.151L1730.89 909.1L1705.1 934.893L1059.15 288.944L737.244 610.852L1047.95 921.558L989.558 979.95L678.852 669.244L323.5 1024.6L216.261 917.357L571.612 562.005L0.078125 -9.5293L58.4707 -67.9219L630.005 503.612L1260.73 -127.108L1367.97 -19.8691Z" fill="#BCE0E2" fillOpacity="0.6"></path>
				</svg>

				{/* 오른쪽 설명 리스트 */}
				<div className="flex flex-col justify-start items-start absolute left-[1133px] top-[158px] gap-8">
					<div className="flex justify-start items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#108389]">
						<CheckIcon />
						<p className="text-[42px] font-bold text-left text-white">지도 기반 탐색</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#15afb7]">
						<CheckIcon />
						<p className="text-[42px] font-bold text-left text-white">간편한 위치 검색</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#108389]">
						<CheckIcon />
						<p className="text-[42px] font-bold text-left text-white">실시간 요금 확인</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#15afb7]">
						<CheckIcon />
						<p className="text-[42px] font-bold text-left text-white">내 주변 센터 찾기</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#108389]">
						<CheckIcon />
						<p className="text-[42px] font-bold text-left text-white">쉽고 빠른 가격비교</p>
					</div>
				</div>

				{/* 왼쪽 '내 주변 센터' 타이틀 */}
				<div className="flex flex-col justify-start items-start absolute left-48 top-12" style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }}>
					<div className="flex justify-center items-center h-20 relative gap-2.5 px-8 py-4 rounded-2xl bg-white">
						<p className="text-[40px] font-light text-left text-[#4d4d4d]">내 주변 센터</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 pl-6">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path>
						</svg>
					</div>
				</div>

				{/* 중앙 지도 목업 */}
				<div className="w-[960px] h-[650px] absolute top-[120px] left-[192px]">
					{/* 핀/가격표들을 위한 포지셔닝 컨테이너 */}
					<div className="absolute left-[420px]">
						<div className="w-[315px] h-[650px] relative rounded-2xl bg-[#f3f3f3]" style={{ boxShadow: '0px 0px 30px 0 rgba(0,0,0,0.4)' }}>
							<img src="/src/assets/memberApp/chat/지도-목업-사진.png" className="w-[295px] h-[630px] absolute left-[10px] top-[10px] rounded-xl object-cover" alt="지도 앱 목업"/>
						</div>
					</div>
					<div className="absolute left-[537px] top-[200px]">
						<MapPinIcon />
					</div>

					{/* 가격표들 */}
					<div className="flex justify-center items-center absolute left-[640px] top-[90px] gap-2.5 px-3 py-1 rounded-xl bg-white border-2 border-[#0f7f85]">
						<p className="text-2xl text-left text-[#0f7f85]">20,000 원</p>
					</div>
					<div className="flex justify-center items-center absolute left-[350px] top-[140px] gap-2.5 px-3 py-1 rounded-xl bg-white border-2 border-[#0f7f85]">
						<p className="text-2xl text-left text-[#0f7f85]">30,000 원</p>
					</div>
					<div className="flex justify-center items-center absolute left-[690px] top-[310px] gap-2.5 px-3 py-1 rounded-xl bg-white border-2 border-[#0f7f85]">
						<p className="text-2xl text-left text-[#0f7f85]">100,000 원</p>
					</div>
					<div className="flex justify-center items-center absolute left-[400px] top-[438px] gap-2.5 px-3 py-1 rounded-xl bg-white border-2 border-[#0f7f85]">
						<p className="text-2xl text-left text-[#0f7f85]">60,000 원</p>
					</div>
				</div>

			</div>
		</div>
	);
}

export default MapSearchSection;