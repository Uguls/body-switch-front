import React from 'react';
import Card from './Card.jsx';
import recommendedCorner from '../../../assets/svgs/recommended-corner.svg';

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
				<div className="absolute bottom-0 right-0 w-24 h-24">
					<img src={recommendedCorner} alt="" width="96" height="96" />
					<p className="absolute bottom-[32px] right-[32px] text-2xl font-black text-white transform -rotate-45 -translate-x-1/2 -translate-y-1/2">
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