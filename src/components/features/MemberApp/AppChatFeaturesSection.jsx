import React from 'react';

// 사용할 이미지 파일들을 import 합니다.
import gangsaTalkImage from '/src/assets/app-screenshots/instructor/chat-interface.jpg';
import centerTalkImage from '/src/assets/app-screenshots/member/chat-interface.png';

function ChatSection() {
	return (
		<div className="flex flex-col justify-start items-center w-full gap-8 md:gap-16 pb-24 sm:pb-32 md:pb-48 mt-42 bg-white">
			{/* 상단 헤더 */}
			<div
				className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
				style={{ fontFamily: 'esamanru, sans-serif' }}
			>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="flex-grow-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words" style={{ fontFamily: 'esamanru, sans-serif' }}>
						실시간 소통으로 강사와 빠른 피드백
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					{/* 여기도 마찬가지로 flex-shrink-0 클래스를 제거합니다. */}
					<p className="flex-grow-0 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]"
					   style={{ fontFamily: 'esamanru-light, sans-serif' }}
					>
						강사와 회원이 함께 쌍방향 소통으로 만드는 운동 루틴
					</p>
				</div>
			</div>

			{/* 강사톡 섹션: 이미지 컨테이너 */}
			<div className="w-full flex justify-center px-4 sm:px-8">
				{/* [수정] xl(extra large) 화면 이상에서 최대 너비를 늘려 이미지가 더 커지도록 합니다. */}
				<img
					src={gangsaTalkImage}
					alt="강사톡 채팅 화면 예시"
					className="w-full h-auto"
				/>
			</div>

			{/* 센터톡 섹션: 이미지 컨테이너 */}
			<div className="w-full flex justify-center px-4 sm:px-8">
				{/* [수정] xl(extra large) 화면 이상에서 최대 너비를 늘려 이미지가 더 커지도록 합니다. */}
				<img
					src={centerTalkImage}
					alt="센터톡 채팅 화면 예시"
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
}

export default ChatSection;
