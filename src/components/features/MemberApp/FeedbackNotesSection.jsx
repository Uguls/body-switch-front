import React from 'react';
import { CheckIcon } from '../../ui/index.jsx';
import lessonNotesImage from '../../../assets/app-screenshots/member/lesson-notes.png';
import feedbackImage1 from '../../../assets/app-screenshots/member/feedback-image-1.png';
import feedbackImage2 from '../../../assets/app-screenshots/member/feedback-image-2.png';

function FeedbackNoteSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full gap-8 md:gap-16 pb-24 sm:pb-32 md:pb-48">
			{/* 상단 헤더 */}
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words" style={{fontFamily: 'esamanru, sans-serif'}}>
						수업 피드백으로 더 가까워지는 소통
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]"
					   style={{ fontFamily: 'esamanru-light, sans-serif' }}>
						수업 이후에도 이어지는 1:1 맞춤 케어
					</p>
				</div>
			</div>

			{/* 강의노트 섹션 */}
			<div className="flex flex-col justify-start items-start self-stretch w-full gap-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-12 bg-[#bddbdb] overflow-hidden">
				<div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1536px] mx-auto relative gap-12 lg:gap-8">
					<div className="w-full lg:w-[55%] flex flex-col items-start justify-start">
						<div className="flex flex-col justify-start items-start flex-shrink-0 space-y-[-4px] mb-6">
							<div className="flex justify-center items-center h-auto relative gap-2.5 px-6 py-3 rounded-2xl bg-white">
								<p className="text-xl md:text-2xl lg:text-[40px] text-left text-[#4d4d4d]"
								   style={{ fontFamily: 'esamanru-light, sans-serif' }}>
									강의노트
								</p>
							</div>
							<div className="flex justify-start items-center relative gap-2.5 pl-6">
								<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path>
								</svg>
							</div>
						</div>
						
						<div className="flex items-center justify-center w-full">
							{/* 앱 스크린샷 (아래에 위치) */}
							<div className="w-1/2 p-2.5 rounded-[22px] bg-[#f3f3f3] shadow-xl">
								<img src={lessonNotesImage} className="w-full h-auto rounded-2xl" alt="강의노트 앱 화면"/>
							</div>
							{/* 운동 및 피드백 이미지 (위에 위치) */}
							<div className="w-3/4 flex flex-col gap-4 -ml-[25%] z-10">
								<img src={feedbackImage1} className="w-full h-auto rounded-2xl object-cover shadow-xl" alt="운동 자세 이미지"/>
								<img src={feedbackImage2} className="w-full h-auto object-cover" alt="피드백 내용"/>
							</div>
						</div>
					</div>

					{/* 오른쪽 설명 영역 */}
					<div className="flex flex-col justify-center items-start w-full lg:w-[45%] gap-3 md:gap-4 lg:gap-6">
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap"
							   style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>
								회원 만족도 증가</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap"
							   style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>
							1:1 맞춤 피드백 제공</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>강사∙회원 간 소통 강화</p>
						</div>
						<div className="flex justify-start items-center w-fit relative gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-left text-white whitespace-nowrap" style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>수업 내용의 구체적 기록 가능</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeedbackNoteSection;
