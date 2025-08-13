// src/components/PricingCard.jsx
import React from 'react';

const PricingCard = ({
	                     title,
	                     price,
	                     members,
	                     featureTitle = "회원 등록수", // 기본값을 설정해두면 편리합니다.
	                     headerColor,
	                     textColor,
	                     isRecommended = false,
	                     isWide = false,
	                     children, // 골프 요금제처럼 복잡한 내용을 위해 children prop을 활용합니다.
                     }) => {
	const cardWidth = isWide ? 'w-full' : 'w-full sm:w-[360px]';

	return (
		<div
			className={`flex flex-col flex-shrink-0 ${cardWidth} overflow-hidden rounded-2xl relative`}
			style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }}
		>
			{/* 추천 배너 (isRecommended가 true일 때만 보임) */}
			{isRecommended && (
				<div className="absolute top-0 right-0 w-24 h-24">
					<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M96 0L0 0L96 96V0Z" fill="#EEB412" />
					</svg>
					<p className="absolute top-[28px] right-[8px] text-xl font-bold text-white transform rotate-45">
						추천
					</p>
				</div>
			)}

			{/* 카드 헤더 */}
			<div className={`flex justify-center items-center py-4 ${headerColor}`}>
				<p className="text-[42px] text-center text-white">{title}</p>
			</div>

			{/* 카드 바디 */}
			<div className="flex flex-col justify-start items-center flex-grow gap-8 p-6 bg-white">
				<div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
					<p className={`text-[52px] font-bold text-center ${textColor}`}>{price}</p>
					<p className="text-[42px] text-center text-[#4d4d4d]">/월</p>
				</div>
				<div className="flex flex-col justify-start items-center self-stretch p-6 rounded-2xl bg-[#f2f2f2]">
					{children ? (
						children // children이 있으면 그대로 렌더링
					) : (
						// 없으면 기본 구조를 렌더링
						<>
							<p className="text-[32px] text-center text-[#4d4d4d]">{featureTitle}</p>
							<p className="text-[42px] font-bold text-center text-[#4d4d4d]">{members}</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default PricingCard;