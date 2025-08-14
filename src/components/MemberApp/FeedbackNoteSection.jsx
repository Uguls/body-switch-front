import React from 'react';

// 반복되는 SVG 아이콘을 상수로 만들어 재사용합니다.
const CheckIcon = () => (
	<svg
		width="46"
		height="47"
		viewBox="0 0 46 47"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative"
	>
		<path
			d="M45.3462 11.0664L19.5423 33.6565L9.86165 17.6456L13.141 15.6615L20.4576 27.7605L42.8231 8.18392L45.3462 11.0664Z"
			fill="#052C2E"
		></path>
		<path
			d="M34.5013 12.9232L30.668 16.2773V11.5418H5.7513V36.4585H19.0014L19.0894 36.6045L19.2559 36.4585H30.668V26.4671L34.5013 23.1111V40.2918H1.91797V7.7085H34.5013V12.9232Z"
			fill="white"
		></path>
	</svg>
);


function FeedbackNoteSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full gap-16 pb-60">
			{/* 상단 헤더 */}
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="flex-grow-0 flex-shrink-0 text-6xl font-medium text-left text-[#4ab3bc]">
						수업 피드백으로 더 가까워지는 소통
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5 px-8">
					<p className="flex-grow-0 flex-shrink-0 text-[32px] font-light text-left text-[#4d4d4d]">
						수업 이후에도 이어지는 1:1 맞춤 케어
					</p>
				</div>
			</div>

			{/* 강의노트 섹션 */}
			<div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 px-48 py-12 bg-[#bddbdb]">
				<div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 space-y-[-4px]">
					<div className="flex justify-center items-center h-20 relative gap-2.5 px-8 py-4 rounded-2xl bg-white">
						<p className="text-[40px] font-light text-left text-[#4d4d4d]">
							강의노트
						</p>
					</div>
					<div className="flex justify-start items-center relative gap-2.5 pl-6">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2C0 0.89543 0.895431 0 2 0L19.1716 0C20.9534 0 21.8457 2.15428 20.5858 3.41421L12 12L3.41422 20.5858C2.15429 21.8457 0 20.9534 0 19.1716L0 2Z" fill="white"></path>
						</svg>
					</div>
				</div>

				<div className="flex justify-between items-center w-full max-w-[1536px] relative">
					{/* 왼쪽 이미지 영역 */}
					<div className="w-[787px] h-[576px] relative">
						<div className="flex flex-col justify-start items-start absolute left-0 top-0 opacity-60 gap-2.5 p-2.5 rounded-[22px] bg-[#f3f3f3]" style={{ boxShadow: '0px 0px 20px 0 rgba(0,0,0,0.2)' }}>
							{/* 이미지 경로는 public 폴더 기준으로 작성 */}
							<img src="/src/assets/memberApp/chat/강의노트-1.png" className="w-[292px] h-[556px] rounded-2xl" alt="강의노트 앱 화면"/>
						</div>
						<div className="flex flex-col justify-start items-start w-[546px] absolute left-[241px] top-[54px] gap-6">
							<img src="/src/assets/memberApp/chat/이미지-1.png" className="self-stretch h-[318px] rounded-2xl object-cover" style={{ boxShadow: '0px 0px 20px 0 rgba(0,0,0,0.2)' }} alt="운동 자세 이미지"/>
							<img src="/src/assets/memberApp/chat/이미지-2.png" className="w-[546px] h-[126px] object-cover" alt="피드백 내용"/>
						</div>
					</div>

					{/* 오른쪽 설명 영역 */}
					<div className="flex flex-col justify-start items-start gap-8">
						<div className="flex justify-center items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="text-[42px] font-bold text-left text-white">회원 만족도 증가</p>
						</div>
						<div className="flex justify-center items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-[42px] font-bold text-left text-white">1:1 맞춤 피드백 제공</p>
						</div>
						<div className="flex justify-center items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#15afb7]">
							<CheckIcon />
							<p className="text-[42px] text-left text-white">
								<span className="font-bold">강사</span>
								<span>∙</span>
								<span className="font-bold">회원 간 소통 강화</span>
							</p>
						</div>
						<div className="flex justify-center items-center relative gap-2.5 px-8 py-4 rounded-2xl bg-[#108389]">
							<CheckIcon />
							<p className="text-[42px] font-bold text-left text-white">수업 내용의 구체적 기록 가능</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeedbackNoteSection;