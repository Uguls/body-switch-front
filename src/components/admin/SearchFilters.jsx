import React from 'react';

/**
 * Reusable search filters component for admin pages
 * @param {Object} props - SearchFilters props
 * @param {string} props.keywordValue - Current keyword input value
 * @param {function} props.onKeywordChange - Keyword change handler
 * @param {string} props.startDateValue - Current start date value
 * @param {function} props.onStartDateChange - Start date change handler
 * @param {string} props.endDateValue - Current end date value
 * @param {function} props.onEndDateChange - End date change handler
 * @param {string} props.statusValue - Current status filter value
 * @param {function} props.onStatusChange - Status change handler
 * @param {function} props.onSearch - Search button click handler
 * @param {function} props.onReset - Reset button click handler
 * @param {Array} props.statusOptions - Available status options
 */
const SearchFilters = ({
	keywordValue,
	onKeywordChange,
	startDateValue,
	onStartDateChange,
	endDateValue,
	onEndDateChange,
	statusValue,
	onStatusChange,
	onSearch,
	onReset,
	statusOptions = ['전체', '미확인', '처리중', '완료']
}) => {
	return (
		<div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-sm border mb-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
				{/* 키워드 검색 */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">키워드</label>
					<input
						type="text"
						value={keywordValue}
						onChange={(e) => onKeywordChange(e.target.value)}
						placeholder="제목, 내용 검색"
						className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#58b9c1] focus:border-transparent"
					/>
				</div>

				{/* 시작일 */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">시작일</label>
					<input
						type="date"
						value={startDateValue}
						onChange={(e) => onStartDateChange(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#58b9c1] focus:border-transparent"
					/>
				</div>

				{/* 종료일 */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">종료일</label>
					<input
						type="date"
						value={endDateValue}
						onChange={(e) => onEndDateChange(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#58b9c1] focus:border-transparent"
					/>
				</div>

				{/* 상태 필터 */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">상태</label>
					<select
						value={statusValue}
						onChange={(e) => onStatusChange(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#58b9c1] focus:border-transparent"
					>
						{statusOptions.map(option => (
							<option key={option} value={option}>{option}</option>
						))}
					</select>
				</div>
			</div>

			{/* 버튼 그룹 */}
			<div className="flex gap-3">
				<button
					onClick={onSearch}
					className="px-6 py-2 bg-[#58b9c1] text-white rounded-md hover:bg-[#4a9ca3] transition-colors"
				>
					검색
				</button>
				<button
					onClick={onReset}
					className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
				>
					초기화
				</button>
			</div>
		</div>
	);
};

export default SearchFilters;