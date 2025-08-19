import React, { useState } from 'react';

const AdminUsers = () => {
	const [users] = useState([
		{ id: 1, name: '김지훈', email: 'kim@example.com', joinDate: '2024-01-15', status: 'active' },
		{ id: 2, name: '박서연', email: 'park@example.com', joinDate: '2024-01-20', status: 'active' },
		{ id: 3, name: '이민수', email: 'lee@example.com', joinDate: '2024-01-25', status: 'inactive' },
		{ id: 4, name: '정유진', email: 'jung@example.com', joinDate: '2024-02-01', status: 'active' },
	]);

	const getStatusBadge = (status) => {
		return status === 'active' 
			? <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">활성</span>
			: <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">비활성</span>;
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold text-gray-900">회원 관리</h1>
				<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
					새 회원 등록
				</button>
			</div>

			<div className="bg-white shadow-sm rounded-lg overflow-hidden">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">가입일</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{users.map((user) => (
							<tr key={user.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joinDate}</td>
								<td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(user.status)}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<button className="text-blue-600 hover:text-blue-900 mr-3">수정</button>
									<button className="text-red-600 hover:text-red-900">삭제</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminUsers;