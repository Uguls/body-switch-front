import React from 'react';

// 사용할 이미지 파일들을 import 합니다.
import gangsaTalkImage from '/src/assets/memberApp/chat/강사_talk.png';
import centerTalkImage from '/src/assets/memberApp/chat/센터_talk.png';

function ChatSection() {
	return (
		// 전체적인 간격(gap)과 하단 패딩(pb)을 화면 크기에 따라 조절합니다.
		<div className="flex flex-col justify-start items-center w-full gap-8 md:gap-16 pb-24 sm:pb-32 md:pb-48 bg-white">
			{/* 상단 헤더 */}
			<div
				// 모바일에서는 왼쪽 border를 없애고, md 사이즈 이상에서만 보이도록 합니다.
				// 패딩(px)도 화면 크기에 맞춰 조절합니다.
				className="flex flex-col justify-start items-start w-full max-w-[1536px] gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
				style={{ fontFamily: 'esamanru, sans-serif' }}
			>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					{/* flex-shrink-0 클래스를 제거하여 텍스트가 화면 너비에 맞게 줄어들도록 합니다. */}
					<p className="flex-grow-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words">
						실시간 소통으로 강사와 빠른 피드백
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					{/* 여기도 마찬가지로 flex-shrink-0 클래스를 제거합니다. */}
					<p className="flex-grow-0 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d]">
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
					className="w-full h-auto max-w-5xl xl:max-w-7xl"
				/>
			</div>

			{/* 센터톡 섹션: 이미지 컨테이너 */}
			<div className="w-full flex justify-center px-4 sm:px-8">
				{/* [수정] xl(extra large) 화면 이상에서 최대 너비를 늘려 이미지가 더 커지도록 합니다. */}
				<img
					src={centerTalkImage}
					alt="센터톡 채팅 화면 예시"
					className="w-full h-auto max-w-5xl xl:max-w-7xl"
				/>
			</div>
		</div>
	);
}

export default ChatSection;
