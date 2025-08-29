// src/components/PricingSection.jsx
import React from 'react';
import { Card } from '../../ui/index.jsx';

const PricingPlansSection = () => {
	const plans = [
		{
			title: '베이직',
			price: '19,000원',
			members: '200명',
			headerColor: 'bg-[#15afb7]',
			textColor: 'text-[#15afb7]',
		},
		{
			title: '스텐다드',
			price: '35,000원',
			members: '500명',
			headerColor: 'bg-[#108389]',
			textColor: 'text-[#108389]',
			isRecommended: true,
		},
		{
			title: '프리미엄',
			price: '50,000원',
			members: '1,500명',
			headerColor: 'bg-[#0a585c]',
			textColor: 'text-[#0a585c]',
		},
		{
			title: '울트라',
			price: '65,000원',
			members: '3,000명',
			headerColor: 'bg-[#052c2e]',
			textColor: 'text-[#052c2e]',
		},
	];

	return (
		<div className="flex flex-col justify-start items-start w-full gap-16 px-4 md:px-48 py-20 md:py-40 bg-[#f4f5f7]">
			{/* 섹션 제목 */}
			<div className="flex flex-col justify-start items-start w-full gap-2 border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="self-stretch px-8">
					<p className="text-4xl md:text-6xl font-medium text-left" >
						<span className="text-[#4d4d4d]" style={{fontFamily: 'esamanru, sans-serif'}}>센터 운영을 위한 </span>
						<span className="text-[#4ab3bc]" style={{fontFamily: 'esamanru, sans-serif'}}>합리적인 요금제</span>
					</p>
				</div>
				<div className="self-stretch px-8">
					<p className="text-2xl md:text-[32px] font-light text-left text-[#4d4d4d]"
					   style={{fontFamily: 'esamanru-light, sans-serif'}}>
						타사 대비 더 합리적인, 회원 수 기반 요금 설계
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-start items-start self-center gap-8">
				<div className="flex justify-center items-center self-stretch flex-wrap gap-8">
					{plans.map((plan) => (
						<div
							key={plan.title}
							className="flex flex-col flex-shrink-0 w-full sm:w-[330px] overflow-hidden rounded-2xl relative"
							style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }}
						>
							{plan.isRecommended && (
								<div className="absolute bottom-0 right-0 w-[121px] h-[121px] z-10">
									<svg
										width="121"
										height="121"
										viewBox="0 0 121 121"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="absolute bottom-0 right-0"
										preserveAspectRatio="none"
									>
										<path d="M121 121L-7.62939e-06 121L60.5 60.5L121 1.52588e-05L121 121Z" fill="#EEB412" />
									</svg>
									<p className="absolute bottom-[10px] right-[5px] text-[40px] font-bold text-center text-white transform -rotate-45">
										추천
									</p>
								</div>
							)}

							<div className={`flex justify-center items-center py-4 ${plan.headerColor}`}>
								<p className="text-2xl sm:text-3xl md:text-[42px] text-center text-white">{plan.title}</p>
							</div>

							<Card background="white" padding="medium" rounded="none" shadow="none" className="flex flex-col justify-start items-center flex-grow gap-8">
								<div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
									<p className={`text-3xl sm:text-4xl md:text-[52px] font-bold text-center ${plan.textColor}`}>{plan.price}</p>
									<p className="text-2xl sm:text-3xl md:text-[42px] text-center text-[#4d4d4d]">/월</p>
								</div>
								<Card background="gray" padding="small" rounded="xl" shadow="none" className="flex flex-col justify-start items-center self-stretch bg-[#e6e6e6]">
									<p className="text-xl sm:text-2xl md:text-[32px] text-center text-[#4d4d4d]">회원 등록수</p>
									<p className="text-2xl sm:text-3xl md:text-[42px] font-bold text-center text-[#4d4d4d]">{plan.members}</p>
								</Card>
							</Card>
						</div>
					))}
				</div>

				{/* 하단 골프 요금제 카드 */}
				<div
					className="flex flex-col flex-shrink-0 w-full overflow-hidden rounded-2xl relative"
					style={{ filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.2))' }}
				>
					<div className="flex justify-center items-center py-4 bg-[#108389]">
						<p className="text-[42px] text-center text-white">골프 요금제</p>
					</div>

					<Card background="white" padding="medium" rounded="none" shadow="none" className="flex flex-col justify-start items-center flex-grow gap-8">
						<div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
							<p className="text-[52px] font-bold text-center text-[#108389]">40,000원</p>
							<p className="text-[42px] text-center text-[#4d4d4d]">/월</p>
						</div>
						<Card background="gray" padding="small" rounded="xl" shadow="none" className="flex flex-col justify-start items-center self-stretch bg-[#e6e6e6]">
							<p className="text-[32px] md:text-[42px] text-center text-[#4d4d4d]">
								<span className="font-bold">타석</span> 및 <span className="font-bold">시설제어</span>
							</p>
						</Card>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default PricingPlansSection;