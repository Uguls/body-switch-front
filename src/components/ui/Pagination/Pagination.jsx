import React from 'react';

/**
 * Reusable pagination component
 * @param {Object} props - Pagination props
 * @param {number} props.currentPage - Current active page (0-indexed)
 * @param {number} props.totalPages - Total number of pages
 * @param {function} props.onPageChange - Callback function when page changes
 * @param {number} props.maxPageNumbers - Maximum page numbers to show (default: 5)
 */
const Pagination = ({ 
	currentPage, 
	totalPages, 
	onPageChange, 
	maxPageNumbers = 5 
}) => {
	if (totalPages <= 1) return null;

	const handlePageChange = (page) => {
		if (page >= 0 && page < totalPages && page !== currentPage) {
			onPageChange(page);
		}
	};

	const renderPagination = () => {
		const pages = [];
		const startPage = Math.max(0, currentPage - Math.floor(maxPageNumbers / 2));
		const endPage = Math.min(totalPages, startPage + maxPageNumbers);

		// Previous button
		pages.push(
			<div
				key="prev"
				className={`flex flex-col justify-center items-center h-10 w-10 relative p-2.5 rounded border border-[#d9d9d9] ${
					currentPage === 0 ? "bg-white cursor-not-allowed" : "bg-white cursor-pointer"
				}`}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				<svg 
					width="26" 
					height="26" 
					viewBox="0 0 26 26" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg"
					className={`flex-grow-0 flex-shrink-0 w-[24.48px] h-[24.48px] relative ${
						currentPage === 0 ? "fill-[#DEDEDE]" : "fill-[#58B9C1]"
					}`}
				>
					<path 
						fillRule="evenodd" 
						clipRule="evenodd" 
						d="M8.85645 12.9972L14.7536 18.8943L15.8354 17.8125L11.0201 12.9972L15.8354 8.18332L14.7536 7.09998L8.85645 12.9972Z" 
						fill={currentPage === 0 ? "#DEDEDE" : "#58B9C1"}
					/>
				</svg>
			</div>
		);

		// Page numbers
		for (let i = startPage; i < endPage; i++) {
			pages.push(
				<div
					key={i}
					className={`flex flex-col justify-center items-center h-10 w-10 relative p-2.5 rounded cursor-pointer ${
						i === currentPage 
							? "bg-[#58b9c1] text-white" 
							: "bg-white border border-[#d9d9d9] text-neutral-800"
					}`}
					onClick={() => handlePageChange(i)}
				>
					<p className="text-base font-medium text-center">{i + 1}</p>
				</div>
			);
		}

		// Next button
		pages.push(
			<div
				key="next"
				className={`flex flex-col justify-center items-center h-10 w-10 relative p-2.5 rounded border border-[#d9d9d9] ${
					currentPage === totalPages - 1 
						? "bg-white cursor-not-allowed" 
						: "bg-white cursor-pointer"
				}`}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				<svg 
					width="26" 
					height="26" 
					viewBox="0 0 26 26" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg"
					className={`flex-grow-0 flex-shrink-0 w-[24.48px] h-[24.48px] relative ${
						currentPage === totalPages - 1 ? "fill-[#DEDEDE]" : "fill-[#58B9C1]"
					}`}
				>
					<path 
						fillRule="evenodd" 
						clipRule="evenodd" 
						d="M17.1353 12.9972L11.2381 18.8943L10.1563 17.8125L14.9716 12.9972L10.1563 8.18332L11.2381 7.09998L17.1353 12.9972Z" 
						fill={currentPage === totalPages - 1 ? "#DEDEDE" : "#58B9C1"}
					/>
				</svg>
			</div>
		);

		return pages;
	};

	return (
		<div className="flex justify-center items-center gap-4 mt-8 mb-8">
			{renderPagination()}
		</div>
	);
};

export default Pagination;