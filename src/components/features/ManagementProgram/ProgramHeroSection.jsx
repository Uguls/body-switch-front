import React from 'react';
import { Link } from 'react-router-dom';
import { AutoImageSlider } from '../../ui/index.jsx'; // ui 컴포넌트 경로는 실제 프로젝트에 맞게 확인해주세요.

const CapsuleImageSection = () => {
	const heroImages = [
		{ src: "/src/assets/images/hero/management-program-1.png", alt: "바디스위치 이미지 1" },
		{ src: "/src/assets/images/hero/management-program-2.jpg", alt: "바디스위치 이미지 2" },
		{ src: "/src/assets/images/hero/management-program-3.jpg", alt: "바디스위치 이미지 3" },
		{ src: "/src/assets/images/hero/management-program-4.jpg", alt: "바디스위치 이미지 4" }
	];

	return (
		<div
			className="relative overflow-hidden w-full min-h-screen"
			style={{ background: 'linear-gradient(135deg, #e0f7fa 20%, #ffffff 100%)' }}
		>
			{/* --- 텍스트 & 버튼 통합 그룹 --- */}
			{/* z-index를 20으로 설정하여 다른 모든 요소보다 위에 오도록 합니다. */}
			<div
				className="absolute flex flex-col items-start"
				style={{
					left: '10vw',
					top: '27vh',
					zIndex: 20
				}}
			>
				{/* 메인 카피 & 브랜드명 */}
				<div className="flex flex-col items-start">
					{/* 텍스트 색상을 흰색으로 변경하여 어두운 오버레이 위에서 잘 보이게 합니다. */}
					<p
						className="text-left text-black"
						style={{
							fontFamily: 'InkLipquid, sans-serif',
							fontSize: 'clamp(32px, 4vw, 56px)',
							textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' // 가독성을 위한 그림자 효과 추가
						}}
					>
						더 쉬운 관리, 더 큰 성공
					</p>
					<p
						className="font-medium text-left text-black"
						style={{
							fontFamily: 'esamanru, sans-serif',
							fontSize: 'clamp(48px, 6vw, 80px)',
							textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' // 가독성을 위한 그림자 효과 추가
						}}
					>
						바디스위치
					</p>
				</div>

				{/* 해시태그 */}
				<p
					className="text-left text-black/80" // 흰색에 투명도를 살짝 주어 계층감 표현
					style={{
						marginTop: 'clamp(16px, 2vh, 24px)',
						fontFamily: 'Pretendard-Regular, sans-serif',
						fontSize: 'clamp(14px, 1.6vw, 24px)',
						lineHeight: '1.6'
					}}
				>
					#회원관리 #입장관리 #일정관리 #수강권발급
					<br />
					#커뮤니티_관리 #임직원관리 #매장관리 #매출관리
				</p>

				{/* 도입문의 버튼 */}
				<Link to="/introduction" style={{ marginTop: 'clamp(24px, 3vh, 32px)' }}>
					<div
						className="flex justify-center items-center relative gap-2.5 rounded-[50px] bg-[#4ab3bc] hover:bg-[#3a9ba4] transition-colors duration-200"
						style={{
							width: 'clamp(180px, 15vw, 220px)',
							padding: 'clamp(12px, 1.2vw, 16px) clamp(16px, 1.5vw, 24px)',
						}}
					>
						<p className="font-bold text-left text-white" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>
							도입문의 →
						</p>
					</div>
				</Link>
			</div>

			{/* ✨ --- 모바일용 오버레이 --- ✨ */}
			{/* 모바일 슬라이더와 동일한 스타일을 가지지만, 반투명한 검은색 배경을 가집니다. */}
			{/* z-index는 10으로 설정하여 이미지(0)와 텍스트(20) 사이에 위치합니다. */}
			<div
				className="absolute overflow-hidden block sm:hidden"
				style={{
					width: '80vw',
					height: '50vw',
					top: '10vh',
					right: '-15vw',
					borderRadius: '200px',
					transform: 'rotate(-45deg)',
					backgroundColor: 'rgba(0, 0, 0, 0.35)', // 오버레이 색상 및 투명도
					zIndex: 10
				}}
			/>

			{/* --- 이미지 슬라이더 (모바일 & 데스크톱) --- */}

			{/* 모바일 슬라이더 (sm 사이즈 이하) */}
			{/* z-index를 0으로 설정하여 가장 아래에 깔리도록 합니다. */}
			<div
				className="absolute overflow-hidden z-0 block sm:hidden"
				style={{
					width: '80vw',
					height: '50vw',
					top: '10vh',
					right: '-15vw',
					borderRadius: '200px',
					transform: 'rotate(-45deg)',
					boxShadow: '-3px 3px 15px rgba(0, 0, 0, 0.2)'
				}}
			>
				<div
					className="w-full h-full"
					style={{
						transform: 'rotate(45deg) scale(1.5) translateX(-8%) translateY(10%)',
						transformOrigin: 'center'
					}}
				>
					<AutoImageSlider
						images={heroImages} interval={3000} className="w-full h-full"
						imageClassName="w-full h-full object-contain" showDots={false} showArrows={false} pauseOnHover={true}
					/>
				</div>
			</div>

			{/* 데스크톱 슬라이더 (lg 사이즈 이상) */}
			{/* 데스크톱에서는 텍스트와 겹치지 않으므로 z-index 수정이 필요 없습니다. */}
			<div
				className="absolute overflow-hidden z-10 hidden lg:block"
				style={{
					width: '35vw',
					height: '18vw',
					top: '12vh',
					right: '1vw',
					borderRadius: '200px',
					transform: 'rotate(-45deg) scale(2.3)',
					boxShadow: '-5px 5px 20px rgba(0, 0, 0, 0.2)'
				}}
			>
				<div
					className="w-full h-full"
					style={{
						transform: 'rotate(45deg) scale(1.5) translateX(-5%) translateY(7%)',
						transformOrigin: 'center'
					}}
				>
					<AutoImageSlider
						images={heroImages} interval={3000} className="w-full h-full"
						imageClassName="w-full h-full object-contain" showDots={false} showArrows={false} pauseOnHover={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default CapsuleImageSection;