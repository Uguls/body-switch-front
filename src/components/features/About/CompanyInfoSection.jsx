import React from 'react';
import aboutUsSolutionImage from '../../../assets/images/about/about-us-top-solution.jpg';
import aboutUsAutomationImage from '../../../assets/images/about/about-us-top-automation.jpg';
import aboutUsMarketingImage from '../../../assets/images/about/about-us-top-marketing.jpg';
import aboutUsOperatorImage from '../../../assets/images/about/about-us-operator.jpg';
import aboutUsUserImage from '../../../assets/images/about/about-us-user.jpg';
import aboutUsInstructorImage from '../../../assets/images/about/about-us-instructor.jpg';

const AboutUs = () => {
	return (
		<div className="pt-20 md:pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col justify-start items-start w-full max-w-[1536px] my-16 md:my-24 gap-2 px-4 sm:px-8 md:border-l-4 border-[#e6e6e6]"
			     style={{fontFamily: 'esamanru, sans-serif'}}>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-left text-[#4ab3bc] break-words" style={{fontFamily: 'esamanru, sans-serif'}}>
						About Us
					</p>
				</div>
				<div className="flex justify-start items-start self-stretch relative gap-2.5">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light text-left text-[#4d4d4d] break-words"
					   style={{fontFamily: 'esamanru-light, sans-serif'}}>
						스마트한 센터 운영의 시작, 바디스위치가 함께하겠습니다.
					</p>
				</div>
			</div>
			<div className="relative w-full flex justify-center items-center py-8 md:py-16">
				<div className="relative flex items-center justify-center w-full max-w-6xl">
					{/* Solution (왼쪽) */}
					<div className="relative z-30">
						<img
							src={aboutUsSolutionImage}
							alt="Solution"
							className="w-48 md:w-64 lg:w-80 h-auto"
						/>
					</div>
					
					{/* Automation (중앙) - 양쪽과 겹침 */}
					<div className="relative z-20 -ml-8 md:-ml-12 lg:-ml-16 -mr-8 md:-mr-12 lg:-mr-16">
						<img
							src={aboutUsAutomationImage}
							alt="Automation"
							className="w-48 md:w-64 lg:w-80 h-auto"
						/>
					</div>
					
					{/* Marketing (오른쪽) */}
					<div className="relative z-10">
						<img
							src={aboutUsMarketingImage}
							alt="Marketing"
							className="w-48 md:w-64 lg:w-80 h-auto"
						/>
					</div>
				</div>
			</div>
			
			{/* 하단 부분 - 검은 배경에 원형 이미지들과 텍스트 */}
			<div className="flex flex-col w-full min-h-screen lg:min-h-[1600px] bg-[#1a1a1a] px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-8">
				{/* 모바일 - 상단에 가로 배치된 3개 이미지 */}
				<div className="flex justify-center items-center gap-6 mb-8 lg:hidden">
					<img
						src={aboutUsOperatorImage}
						alt="운영자"
						className="w-28 h-28 sm:w-32 sm:h-32"
					/>
					<img
						src={aboutUsUserImage}
						alt="사용자"
						className="w-28 h-28 sm:w-32 sm:h-32"
					/>
					<img
						src={aboutUsInstructorImage}
						alt="강사"
						className="w-28 h-28 sm:w-32 sm:h-32"
					/>
				</div>
				
				{/* 데스크톱 레이아웃 */}
				<div className="hidden lg:flex justify-center items-center w-full max-w-[1400px] mx-auto">
					{/* 좌측 - 3개의 원형 이미지 (완성본) - 데스크톱만 */}
					<div className="flex flex-col justify-between items-center h-[1204px] flex-shrink-0">
						<img
							src={aboutUsOperatorImage}
							alt="운영자"
							className="w-[360px] h-[360px]"
						/>
						<img
							src={aboutUsUserImage}
							alt="사용자"
							className="w-[360px] h-[360px]"
						/>
						<img
							src={aboutUsInstructorImage}
							alt="강사"
							className="w-[360px] h-[360px]"
						/>
					</div>
					
					{/* 우측 - 텍스트 (데스크톱) */}
					<div className="flex-1 ml-8 xl:ml-12 2xl:ml-16 max-w-none">
						<div className="text-left space-y-6">
							<h2 className="text-5xl text-[#4ab3bc] mb-8"
							    style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								최적의 경험을 위한 통합 솔루션
							</h2>
							
							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								바디스위치는 사용자와 강사,<br />
								그리고 운영자를 유기적으로 연결하는 통합 플랫폼입니다.
							</p>
							
							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								고객에게는 폭넓은 서비스를 제공하고,<br />
								사용자뿐만 아니라 강사와 운영자에게도 차별화된 편의성을 선사합니다.
							</p>

							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								다양한 운동 시설과 전문 강사를 한곳에서 손쉽게 탐색하고,<br />
								원하는 서비스를 간편하게 예약할 수 있도록 지원합니다.
							</p>

							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								바디스위치는 주변 센터와 강사를 효과적으로 연결함으로써,<br />
								센터와 강사들에게 더 많은 잠재 고객과의 접점을 확대할 기회를 제공합니다.
							</p>

							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								예약 관리부터 일정 조율, 회원 관리에 이르는 모든 과정을<br />
								한눈에 효율적으로 파악하고 관리할 수 있습니다.
							</p>

							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								운영자 여러분은 바디스위치를 통해 복잡한 관리 절차를 간소화하고,<br />
								더 많은 고객을 만나 사업 성장의 기회를 확장하실 수 있습니다.
							</p>

							<p className="text-[30px] text-white leading-relaxed"
							   style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								바디스위치는 귀사의 성공적인 운영,<br />
								지속적인 성장을 위한 든든한 동반자가 되어드리겠습니다.
							</p>
						</div>
					</div>
				</div>
				
				{/* 모바일 - 텍스트 */}
				<div className="lg:hidden">
					<div className="text-left space-y-4">
						<h2 className="text-2xl font-medium text-[#4ab3bc] mb-6">
							최적의 경험을 위한 통합 솔루션
						</h2>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							바디스위치는 사용자와 강사, 그리고 운영자를 유기적으로 연결하는 통합 플랫폼입니다.
						</p>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							고객에게는 폭넓은 서비스를 제공하고, 사용자뿐만 아니라 강사와 운영자에게도 차별화된 편의성을 선사합니다.
						</p>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							다양한 운동 시설과 전문 강사를 한곳에서 손쉽게 탐색하고, 원하는 서비스를 간편하게 예약할 수 있도록 지원합니다.
						</p>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							바디스위치는 주변 센터와 강사를 효과적으로 연결함으로써, 센터와 강사들에게 더 많은 잠재 고객과의 접점을 확대할 기회를 제공합니다.
						</p>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							예약 관리부터 일정 조율, 회원 관리에 이르는 모든 과정을 한눈에 효율적으로 파악하고 관리할 수 있습니다.
						</p>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							운영자 여러분은 바디스위치를 통해 복잡한 관리 절차를 간소화하고, 더 많은 고객을 만나 사업 성장의 기회를 확장하실 수 있습니다.
						</p>
						
						<p className="text-base font-semibold text-white leading-relaxed">
							바디스위치는 귀사의 성공적인 운영, 지속적인 성장을 위한 든든한 동반자가 되어드리겠습니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
