import React from 'react';
import CheckmarkIcon from './CheckmarkIcon.jsx';
import faceImg from '../../assets/ProgramManagement/face_img.png';

const FeatureSection = () => {
	return (
		// 1. 여기서 'overflow-hidden'을 제거하고, SVG가 보일 공간을 확보하기 위해 아래쪽 패딩(pb-40)을 추가합니다.
		<div className="w-full relative bg-white pt-20 pb-40">
			{/* 전체 컨텐츠 컨테이너 */}
			<div className="flex flex-col justify-start items-center w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-48 gap-16">
				{/* 상단 텍스트 섹션 */}
				<div className="flex flex-col justify-start items-start w-full gap-2 border-l-4 border-[#e6e6e6]">
					<div className="self-stretch px-8">
						<p className="text-4xl md:text-6xl font-medium text-left">
							<span className="text-[#4ab3bc]">바디스위치</span>
							<span className="text-[#4d4d4d]">만의 간편한 입장경험</span>
						</p>
					</div>
					<div className="self-stretch px-8">
						<p className="text-2xl md:text-[32px] font-light text-left text-[#4d4d4d]">
							출입도 스마트하게, 바디스위치만의 기술력
						</p>
					</div>
				</div>

				{/* 메인 컨텐츠 (좌: 기능, 우: 이미지) */}
				<div className="flex flex-col lg:flex-row justify-between items-center w-full gap-16">
					{/* 왼쪽 기능 목록 */}
					<div className="flex flex-col justify-start items-start gap-8 flex-shrink-0">
						<div className="flex justify-center items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#4ab3bc]">
							<CheckmarkIcon />
							<p className="text-[32px] md:text-[42px] font-bold text-left text-white whitespace-nowrap">모바일 등록으로 간편하게</p>
						</div>
						<div className="flex justify-center items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#4ab3bc]">
							<CheckmarkIcon />
							<p className="text-[32px] md:text-[42px] font-bold text-left text-white whitespace-nowrap">안면인식으로 빠른 입장</p>
						</div>
						<div className="flex justify-center items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#4ab3bc]">
							<CheckmarkIcon />
							<p className="text-[32px] md:text-[42px] font-bold text-left text-white whitespace-nowrap">무인 출입 시스템</p>
						</div>
						<div className="flex justify-center items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#4ab3bc]">
							<CheckmarkIcon />
							<p className="text-[32px] md:text-[42px] font-bold text-left text-white whitespace-nowrap">인건비 절약</p>
						</div>
						<div className="flex justify-start items-center gap-[22px]">
							<div className="flex justify-center items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#b3d9dd]">
								<CheckmarkIcon />
								<p className="text-[32px] md:text-[42px] font-bold text-left text-white whitespace-nowrap">IOT 시스템</p>
							</div>
							<p className="text-[32px] font-bold text-left text-[#ccc] whitespace-nowrap">← COMING SOON</p>
						</div>
					</div>

					{/* 오른쪽 이미지 영역 */}
					<div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
						<img
							src={faceImg}
							alt="바디스위치 안면인식 시스템"
							className="max-w-md lg:max-w-lg w-auto h-auto"
						/>
					</div>
				</div>
			</div>

			{/* 하단 배경 곡선 SVG */}
			{/* 2. 불필요한 inline style을 제거하고 className으로만 위치를 제어합니다. */}
			<svg
				width="100%"
				viewBox="0 0 1920 579"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-0 left-0 right-0 -z-10"
				preserveAspectRatio="none"
			>
				<path
					d="M1920 579H0V139.011C253.778 259.638 537.746 327.149 837.5 327.149C1237.96 327.149 1610.24 206.662 1920 0V579Z"
					fill="#F4F5F7"
				></path>
			</svg>
		</div>
	);
};

export default FeatureSection;