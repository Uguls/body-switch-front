import React from 'react';

// 반복되는 SVG 아이콘을 상수로 만들어 재사용합니다.
const CheckIcon = () => (
	<svg
		width="46"
		height="47"
		viewBox="0 0 46 47"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		// 아이콘 크기를 반응형으로 조절합니다.
		className="w-8 h-8 md:w-10 md:h-10 lg:w-[46px] lg:h-[46px] flex-shrink-0"
	>
		{/* 스크린샷과 같이 단색 아이콘으로 보이도록 path를 하나로 합치고 fill을 currentColor로 설정하여 부모의 색상을 상속받게 할 수 있습니다. 여기서는 흰색으로 유지합니다. */}
		<path
			d="M45.3462 11.0664L19.5423 33.6565L9.86165 17.6456L13.141 15.6615L20.4576 27.7605L42.8231 8.18392L45.3462 11.0664Z"
			fill="#FFFFFF"
		></path>
	</svg>
);


function FeedbackNoteSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full gap-8 md:gap-16 pb-24 sm:pb-32 md:pb-48">
			{/* 상단 헤더 */}
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words">
						수업 피드백으로 더 가까워지는 소통
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]">
						수업 이후에도 이어지는 1:1 맞춤 케어
					</p>
				</div>
			</div>

			{/* 강의노트 섹션 */}
			<div className="flex flex-col justify-start items-start self-stretch w-full gap-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-12 bg-[#bddbdb] overflow-hidden">
				<div className="flex flex-col justify-start items-start flex-shrink-0 space-y-[-4px]">
					<div className="flex justify-center items-center h-auto relative gap-2.5 px-6 py-3 rounded-2xl bg-white">
						<p className="text-2xl md:text-3xl lg:text-[40px] font-light text-left text-[#4d4d4d]">
							강의노트
						</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 pl-6">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path>
						</svg>
					</div>
				</div>

				{/* [수정] mx-auto를 추가하여 와이드 스크린에서 중앙 정렬되도록 합니다. */}
				<div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1536px] mx-auto relative gap-12 lg:gap-8">

					{/* 왼쪽 이미지 영역: Flexbox와 음수 마진을 사용하여 겹치는 레이아웃을 유동적으로 구현 */}
					<div className="w-full lg:w-[55%] flex items-center justify-center">
						{/* z-index를 사용하여 요소의 쌓임 순서를 제어합니다. */}
						{/* 앱 스크린샷 (아래에 위치) */}
						<div className="w-1/2 p-2.5 rounded-[22px] bg-[#f3f3f3] shadow-xl">
							<img src="/src/assets/app-screenshots/member/lesson-notes.png" className="w-full h-auto rounded-2xl" alt="강의노트 앱 화면"/>
						</div>
						{/* 운동 및 피드백 이미지 (위에 위치) */}
						<div className="w-3/4 flex flex-col gap-4 -ml-[25%] z-10">
							<img src="/src/assets/app-screenshots/member/feedback-image-1.png" className="w-full h-auto rounded-2xl object-cover shadow-xl" alt="운동 자세 이미지"/>
							<img src="/src/assets/app-screenshots/member/feedback-image-2.png" className="w-full h-auto object-cover" alt="피드백 내용"/>
						</div>
					</div>

					{/* 오른쪽 설명 영역 */}
					<div className="flex flex-col justify-start items-start w-full lg:w-[45%] gap-4 md:gap-6">
						<div className="flex justify-center items-center w-full relative gap-4 px-4 py-3 md:px-8 md:py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="w-full text-xl md:text-3xl lg:text-[42px] font-bold text-left text-white">회원 만족도 증가</p>
						</div>
						<div className="flex justify-center items-center w-full relative gap-4 px-4 py-3 md:px-8 md:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="w-full text-xl md:text-3xl lg:text-[42px] font-bold text-left text-white">1:1 맞춤 피드백 제공</p>
						</div>
						<div className="flex justify-center items-center w-full relative gap-4 px-4 py-3 md:px-8 md:py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="w-full text-xl md:text-3xl lg:text-[42px] text-left text-white">
								<span className="font-bold">강사</span>
								<span className="font-bold">∙</span>
								<span className="font-bold">회원 간 소통 강화</span>
							</p>
						</div>
						<div className="flex justify-center items-center w-full relative gap-4 px-4 py-3 md:px-8 md:py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="w-full text-xl md:text-3xl lg:text-[42px] font-bold text-left text-white">수업 내용의 구체적 기록 가능</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeedbackNoteSection;
