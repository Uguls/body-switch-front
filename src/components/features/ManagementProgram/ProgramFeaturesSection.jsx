import React from 'react';
import { CheckIcon, Button } from '../../ui/index.jsx';
import faceImg from '../../../assets/images/features/face-recognition.webp';

const ProgramFeaturesSection = () => {
	return (
		<div className="w-full relative bg-white pt-10 sm:pt-16 lg:pt-20 pb-20 sm:pb-30 lg:pb-40 overflow-hidden">
			{/* 전체 컨텐츠 컨테이너 */}
			<div className="flex flex-col justify-start items-center w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-48 gap-8 sm:gap-12 lg:gap-16 relative z-20">
				{/* 상단 텍스트 섹션 */}
				<div className="flex flex-col justify-start items-start w-full gap-2 border-l-4 border-[#e6e6e6]"
				     style={{fontFamily: 'esamanru, sans-serif'}}>
					<div className="self-stretch px-4 sm:px-6 lg:px-8">
						<p className="text-2xl sm:text-4xl lg:text-6xl font-medium text-left break-words">
							<span className="text-[#4ab3bc]">바디스위치</span>
							<span className="text-[#4d4d4d]">만의 간편한 입장경험</span>
						</p>
					</div>
					<div className="self-stretch px-4 sm:px-6 lg:px-8">
						<p className="text-lg sm:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]">
							출입도 스마트하게, 바디스위치만의 기술력
						</p>
					</div>
				</div>

				{/* 메인 컨텐츠 (좌: 기능, 우: 이미지) */}
				<div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 sm:gap-12 lg:gap-16">
					{/* 왼쪽 기능 목록 */}
					<div className="flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-8 flex-shrink-0 relative z-20">
						<Button variant="primary" size="large" className="gap-2.5 text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[42px]">
							<CheckIcon />
							모바일 등록으로 간편하게
						</Button>
						<Button variant="primary" size="large" className="gap-2.5 text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[42px]">
							<CheckIcon />
							안면인식으로 빠른 입장
						</Button>
						<Button variant="primary" size="large" className="gap-2.5 text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[42px]">
							<CheckIcon />
							무인 출입 시스템
						</Button>
						<Button variant="primary" size="large" className="gap-2.5 text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[42px]">
							<CheckIcon />
							인건비 절약
						</Button>
						<div className="flex flex-wrap justify-start items-center gap-x-4 gap-y-2">
							<div className="flex justify-center items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#b3d9dd]">
								<CheckIcon />
								<p className="text-2xl sm:text-[32px] md:text-[42px] font-bold text-left text-white whitespace-nowrap">IOT 시스템</p>
							</div>
							<p className="text-2xl sm:text-[32px] font-bold text-left text-[#ccc] whitespace-nowrap">← COMING SOON</p>
						</div>
					</div>

					{/* 오른쪽 이미지 영역 */}
					<div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 relative z-0">
						<img
							src={faceImg}
							alt="바디스위치 안면인식 시스템"
							className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
						/>
					</div>
				</div>
			</div>

			{/* 하단 배경 곡선 SVG */}
			<svg
				width="100%"
				viewBox="0 0 1920 579"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute -bottom-20 sm:-bottom-32 lg:-bottom-40 left-0 right-0 z-10 w-full"
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

export default ProgramFeaturesSection;
