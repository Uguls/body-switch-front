import React from 'react';

const IntroductionPage = () => {
	return (
		<div className="min-h-screen bg-white pt-24">
			<div className="max-w-4xl mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold text-gray-800 mb-6">
						BODY 도입문의
					</h1>
					<p className="text-xl text-gray-600 mb-8">
						맞춤형 운동 관리 솔루션을 도입하고 싶으신가요?
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 mb-16">
					<div className="bg-gray-50 p-8 rounded-lg">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">
							개인 회원님
						</h2>
						<p className="text-gray-600 mb-6">
							전문적인 운동 관리와 맞춤형 프로그램으로 건강한 변화를 시작하세요.
						</p>
						<ul className="space-y-2 text-gray-600">
							<li>• 개인 맞춤형 운동 계획</li>
							<li>• 전문 트레이너 관리</li>
							<li>• 진도 추적 및 분석</li>
							<li>• 영양 관리 가이드</li>
						</ul>
					</div>

					<div className="bg-gray-50 p-8 rounded-lg">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">
							기업 및 단체
						</h2>
						<p className="text-gray-600 mb-6">
							임직원 건강 관리를 위한 종합적인 웰니스 솔루션을 제공합니다.
						</p>
						<ul className="space-y-2 text-gray-600">
							<li>• 기업 전용 관리 시스템</li>
							<li>• 단체 프로그램 운영</li>
							<li>• 건강 데이터 분석</li>
							<li>• 전담 관리자 지원</li>
						</ul>
					</div>
				</div>

				<div className="bg-[#4ab3bc] text-white p-8 rounded-lg text-center">
					<h2 className="text-3xl font-bold mb-4">
						지금 바로 시작하세요
					</h2>
					<p className="text-lg mb-6">
						전문 상담을 통해 최적의 솔루션을 제안해드립니다.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-[#4ab3bc] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
							전화 상담 신청
						</button>
						<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#4ab3bc] transition-colors">
							온라인 문의
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroductionPage;