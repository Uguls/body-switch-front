import React from 'react';

/**
 * 관리자 대시보드 페이지
 * /admin 경로의 메인 페이지
 */
const AdminDashboard = () => {
	const dashboardStats = [
		{ title: '총 회원 수', value: '1,234', change: '+12%', color: 'blue' },
		{ title: '활성 프로그램', value: '45', change: '+3%', color: 'green' },
		{ title: '이번 달 문의', value: '89', change: '+15%', color: 'yellow' },
		{ title: '진행 중 이벤트', value: '5', change: '0%', color: 'purple' },
	];

	const getStatCardClass = (color) => {
		const baseClass = "bg-white p-6 rounded-lg shadow-sm border-l-4";
		const colorMap = {
			blue: `${baseClass} border-blue-500`,
			green: `${baseClass} border-green-500`,
			yellow: `${baseClass} border-yellow-500`,
			purple: `${baseClass} border-purple-500`,
		};
		return colorMap[color] || baseClass;
	};

	return (
		<div className="space-y-6">
			{/* 페이지 헤더 */}
			<div>
				<h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
				<p className="text-gray-600 mt-1">BODY 관리자 시스템에 오신 것을 환영합니다.</p>
			</div>

			{/* 통계 카드들 */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{dashboardStats.map((stat, index) => (
					<div key={index} className={getStatCardClass(stat.color)}>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-600">{stat.title}</p>
								<p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
							</div>
							<div className="text-right">
								<span className={`text-sm font-medium ${
									stat.change.startsWith('+') ? 'text-green-600' : 
									stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
								}`}>
									{stat.change}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* 최근 활동 섹션 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* 최근 가입 회원 */}
				<div className="bg-white p-6 rounded-lg shadow-sm">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">최근 가입 회원</h2>
					<div className="space-y-3">
						{['김지훈', '박서연', '이민수', '정유진'].map((name, index) => (
							<div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
								<span className="text-gray-900">{name}</span>
								<span className="text-sm text-gray-500">방금 전</span>
							</div>
						))}
					</div>
				</div>

				{/* 최근 문의 */}
				<div className="bg-white p-6 rounded-lg shadow-sm">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">최근 문의</h2>
					<div className="space-y-3">
						{[
							'프로그램 문의 - 김철수',
							'환불 문의 - 이영희',
							'기술 문의 - 박민재',
							'일반 문의 - 최수정'
						].map((inquiry, index) => (
							<div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
								<span className="text-gray-900">{inquiry}</span>
								<span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">대기</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;