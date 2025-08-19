import React from 'react';
import Card from './Card.jsx';

const PricingCard = ({
	title,
	price,
	members,
	featureTitle = "회원 등록수",
	headerColor,
	textColor,
	isRecommended = false,
	isWide = false,
	children,
}) => {
	const cardWidth = isWide ? 'w-full' : 'w-full sm:w-[330px]';

	return (
		<div
			className={`flex flex-col flex-shrink-0 ${cardWidth} overflow-hidden rounded-2xl relative`}
			style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }}
		>
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

			<div className={`flex justify-center items-center py-4 ${headerColor}`}>
				<p className="text-[42px] text-center text-white">{title}</p>
			</div>

			<Card background="white" padding="medium" rounded="none" shadow="none" className="flex flex-col justify-start items-center flex-grow gap-8">
				<div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
					<p className={`text-[52px] font-bold text-center ${textColor}`}>{price}</p>
					<p className="text-[42px] text-center text-[#4d4d4d]">/월</p>
				</div>
				<Card background="gray" padding="medium" rounded="xl" shadow="none" className="flex flex-col justify-start items-center self-center bg-[#f2f2f2]">
					{children ? (
						children
					) : (
						<>
							<p className="text-[32px] text-center text-[#4d4d4d]">{featureTitle}</p>
							<p className="text-[42px] font-bold text-center text-[#4d4d4d]">{members}</p>
						</>
					)}
				</Card>
			</Card>
		</div>
	);
};

export default PricingCard;