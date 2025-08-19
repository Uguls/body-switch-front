import React from 'react';

const AdminNotices = () => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold text-gray-900">공지사항 관리</h1>
				<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
					새 공지사항 작성
				</button>
			</div>

			<div className="bg-white p-6 rounded-lg shadow-sm">
				<p className="text-gray-600">공지사항 관리 기능이 곧 추가될 예정입니다.</p>
			</div>
		</div>
	);
};

export default AdminNotices;