import React from 'react';

const AdminPrograms = () => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold text-gray-900">프로그램 관리</h1>
				<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
					새 프로그램 추가
				</button>
			</div>

			<div className="bg-white p-6 rounded-lg shadow-sm">
				<p className="text-gray-600">프로그램 관리 기능이 곧 추가될 예정입니다.</p>
			</div>
		</div>
	);
};

export default AdminPrograms;