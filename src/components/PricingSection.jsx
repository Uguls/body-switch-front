// src/components/PricingSection.jsx
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
	// 데이터를 배열로 관리하면 렌더링이 간편해집니다.
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
			<div className="flex flex-col justify-start items-start w-full gap-2 border-l-4 border-[#e6e6e6]">
				<div className="self-stretch px-8">
					<p className="text-4xl md:text-6xl font-medium text-left">
						<span className="text-[#4d4d4d]">센터 운영을 위한 </span>
						<span className="text-[#4ab3bc]">합리적인 요금제</span>
					</p>
				</div>
				<div className="self-stretch px-8">
					<p className="text-2xl md:text-[32px] font-light text-left text-[#4d4d4d]">
						타사 대비 더 합리적인, 회원 수 기반 요금 설계
					</p>
				</div>
			</div>

			{/* 요금제 카드 목록 */}
			<div className="flex flex-col justify-start items-start self-stretch gap-8">
				{/* 상단 4개 카드 */}
				<div className="flex justify-center items-center self-stretch flex-wrap gap-8">
					{plans.map((plan) => (
						<PricingCard key={plan.title} {...plan} />
					))}
				</div>

				{/* 하단 골프 요금제 카드 */}
				<PricingCard
					title="골프 요금제"
					price="40,000원"
					headerColor="bg-[#108389]"
					textColor="text-[#108389]"
					isWide={true}
				>
					<p className="text-[32px] md:text-[42px] text-center text-[#4d4d4d]">
						<span className="font-bold">타석</span> 및 <span className="font-bold">시설제어</span>
					</p>
				</PricingCard>
			</div>
		</div>
	);
};

export default PricingSection;