import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NoticeListPage = () => {
	const [notices, setNotices] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchNotices = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/notice?page=${currentPage}`);
				setNotices(response.data.notices);
				setCurrentPage(response.data.currentPage);
				setTotalPages(response.data.totalPages);
			} catch (err) {
				setError("데이터를 불러오는 데 실패했습니다.");
				console.error("Error fetching notices:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchNotices();
	}, [currentPage]);

	const handlePageChange = (page) => {
		if (page >= 0 && page < totalPages) {
			setCurrentPage(page);
		}
	};

	const renderPagination = () => {
		const pages = [];
		const maxPageNumbers = 5;
		const startPage = Math.max(0, currentPage - Math.floor(maxPageNumbers / 2));
		const endPage = Math.min(totalPages, startPage + maxPageNumbers);

		// 이전 페이지 버튼
		pages.push(
			<div
				key="prev"
				className={`flex flex-col justify-center items-center h-10 w-10 relative p-2.5 rounded border border-[#d9d9d9] ${
					currentPage === 0 ? "bg-white cursor-not-allowed" : "bg-white cursor-pointer"
				}`}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
				     className={`flex-grow-0 flex-shrink-0 w-[24.48px] h-[24.48px] relative ${
					     currentPage === 0 ? "fill-[#DEDEDE]" : "fill-[#58B9C1]"
				     }`}>
					<path fillRule="evenodd" clipRule="evenodd" d="M8.85645 12.9972L14.7536 18.8943L15.8354 17.8125L11.0201 12.9972L15.8354 8.18332L14.7536 7.09998L8.85645 12.9972Z" fill={currentPage === 0 ? "#DEDEDE" : "#58B9C1"}></path>
				</svg>
			</div>
		);

		// 페이지 번호
		for (let i = startPage; i < endPage; i++) {
			pages.push(
				<div
					key={i}
					className={`flex flex-col justify-center items-center h-10 w-10 relative p-2.5 rounded cursor-pointer ${
						i === currentPage ? "bg-[#58b9c1] text-white" : "bg-white border border-[#d9d9d9] text-neutral-800"
					}`}
					onClick={() => handlePageChange(i)}
				>
					<p className="text-base font-medium text-left">{i + 1}</p>
				</div>
			);
		}

		// 다음 페이지 버튼
		pages.push(
			<div
				key="next"
				className={`flex flex-col justify-center items-center h-10 w-10 relative p-2.5 rounded border border-[#d9d9d9] ${
					currentPage === totalPages - 1 ? "bg-white cursor-not-allowed" : "bg-white cursor-pointer"
				}`}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
				     className={`flex-grow-0 flex-shrink-0 w-[24.48px] h-[24.48px] relative ${
					     currentPage === totalPages - 1 ? "fill-[#DEDEDE]" : "fill-[#58B9C1]"
				     }`}>
					<path fillRule="evenodd" clipRule="evenodd" d="M17.1353 12.9972L11.2381 18.8943L10.1563 17.8125L14.9716 12.9972L10.1563 8.18332L11.2381 7.09998L17.1353 12.9972Z" fill={currentPage === totalPages - 1 ? "#DEDEDE" : "#58B9C1"}></path>
				</svg>
			</div>
		);

		return pages;
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen text-2xl font-semibold">
				로딩 중...
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen text-2xl font-semibold text-red-500">
				{error}
			</div>
		);
	}

	return (
		<div className="pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col items-center max-w-[1536px] mx-auto">
				{/* 제목 섹션 */}
				<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
					<p className="text-[40px] font-medium text-[#333]">
						공지사항
					</p>
				</div>

				{/* 검색 섹션 */}
				<div className="flex justify-center items-center w-full gap-2 py-4 bg-[#f2f2f2]">
					<div className="flex justify-center items-center w-[480px] h-12 px-4 py-3 rounded-lg bg-white border border-[#d9d9d9]">
						<p className="w-[448px] h-[21px] text-base font-medium text-[#a6a6a6]">
							검색어를 입력해 주세요
						</p>
					</div>
					<div className="flex justify-start items-center h-12 gap-28 px-6 py-3 rounded-lg bg-[#4ab3bc]">
						<p className="text-xl font-medium text-white">
							검색
						</p>
					</div>
				</div>

				{/* 공지사항 목록 헤더 */}
				<div className="flex flex-col justify-start items-start w-full">
					<div className="flex justify-start items-center w-full border border-[#b3b3b3]">
						<div className="flex justify-center items-center w-40 h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">번호</p>
						</div>
						<div className="flex justify-center items-center w-[560px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">제목</p>
						</div>
						<div className="flex justify-center items-center w-80 h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">내용</p>
						</div>
						<div className="flex justify-center items-center w-[120px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">작성자</p>
						</div>
						<div className="flex justify-center items-center flex-grow h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">작성일</p>
						</div>
						<div className="flex justify-center items-center w-[120px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">조회수</p>
						</div>
					</div>

					{/* 공지사항 목록 본문 */}
					{notices && notices.length > 0 ? (
						notices.map((notice) => (
							<Link
								key={notice.id}
								to={`/notice/${notice.id}`}
								className="flex justify-start items-center w-full h-[62px] border-t-0 border-r-0 border-b border-l-0 border-[#d9d9d9] hover:bg-gray-50 transition-colors cursor-pointer"
							>
								<div className="flex justify-center items-center w-40 py-3">
									<p className="text-base font-medium text-neutral-800">{notice.id}</p>
								</div>
								{/* 제목: truncate 클래스 적용 */}
								<div className="flex justify-start items-center w-[560px] px-4 py-3">
									<p className="w-full text-base font-medium text-neutral-800 truncate">
										{notice.title}
									</p>
								</div>
								{/* 내용: truncate 클래스 적용 */}
								<div className="flex justify-start items-center w-80 px-4 py-3">
									<p className="w-full text-base font-medium text-neutral-800 truncate">
										{notice.content}
									</p>
								</div>
								<div className="flex justify-center items-center w-[120px] py-3">
									<p className="text-base font-medium text-neutral-800">{notice.author}</p>
								</div>
								<div className="flex justify-center items-center flex-grow py-3">
									<p className="text-base font-medium text-neutral-800">{notice.createdAt}</p>
								</div>
								<div className="flex justify-center items-center w-[120px] py-3">
									<p className="text-base font-medium text-neutral-800">{notice.viewCount}</p>
								</div>
							</Link>
						))
					) : (
						<div className="py-16 text-center text-lg text-gray-500">
							공지사항이 없습니다.
						</div>
					)}
				</div>

				{/* 페이지네이션 섹션 */}
				<div className="flex justify-start items-center relative gap-4 mt-8">
					{renderPagination()}
				</div>
			</div>
		</div>
	);
};

export default NoticeListPage;