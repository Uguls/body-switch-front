import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient.js";
import { AdminPageLayout, PageHeader, DeleteConfirmModal, SuccessModal } from "../../../components/admin/index.js";

const NoticesListPage = () => {
	const [notices, setNotices] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [deleteTargetId, setDeleteTargetId] = useState(null);

	// 검색 관련 상태
	const [keywordInput, setKeywordInput] = useState("");
	const [startDateInput, setStartDateInput] = useState("");
	const [endDateInput, setEndDateInput] = useState("");

	const [searchParams, setSearchParams] = useState({
		keyword: "",
		startDate: "",
		endDate: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		const fetchNotices = async () => {
			setLoading(true);
			setError(null);
			try {
				const params = {
					page: currentPage,
					size: 10,
				};

				// 값이 있을 때만 파라미터에 추가
				if (searchParams.keyword && searchParams.keyword.trim()) {
					params.keyword = searchParams.keyword.trim();
				}
				if (searchParams.startDate) {
					params.startDate = searchParams.startDate;
				}
				if (searchParams.endDate) {
					params.endDate = searchParams.endDate;
				}

				// 검색 파라미터가 있는 경우와 없는 경우 분기
				let response;
				if (searchParams.keyword || searchParams.startDate || searchParams.endDate) {
					const queryString = new URLSearchParams(params).toString();
					response = await apiClient.get(`/notice/search?${queryString}`);
				} else {
					response = await apiClient.get(`/notice?page=${currentPage}`);
				}

				setNotices(response.data.notices);
				setCurrentPage(response.data.currentPage);
				setTotalPages(response.data.totalPages);
			} catch (err) {
				if (err.response && err.response.status === 403) {
					setError("해당 정보에 접근할 권한이 없습니다.");
				} else {
					setError("데이터를 불러오는 데 실패했습니다.");
				}
				console.error("Error fetching notices:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchNotices();
	}, [currentPage, searchParams]);

	const handlePageChange = (page) => {
		if (page >= 0 && page < totalPages) {
			setCurrentPage(page);
		}
	};

	// 검색 처리 함수
	const handleSearch = () => {
		setCurrentPage(0);
		setSearchParams({
			keyword: keywordInput.trim(),
			startDate: startDateInput,
			endDate: endDateInput,
		});
	};

	// 검색 초기화
	const handleSearchReset = () => {
		setKeywordInput("");
		setStartDateInput("");
		setEndDateInput("");
		setSearchParams({
			keyword: "",
			startDate: "",
			endDate: "",
		});
		setCurrentPage(0);
	};

	// 삭제 버튼 클릭 핸들러 (모달 열기)
	const handleDeleteClick = (noticeId, event) => {
		event.preventDefault();
		event.stopPropagation();
		setDeleteTargetId(noticeId);
		setShowDeleteModal(true);
	};

	// 삭제 확인 핸들러 (실제 삭제 실행)
	const handleDeleteConfirm = async () => {
		try {
			await apiClient.delete(`/notice/${deleteTargetId}`);
			setShowSuccessModal(true);
			setSearchParams(prev => ({...prev})); // 목록 새로고침
		} catch {
			alert("삭제에 실패했습니다.");
		}
	};

	// 성공 모달 닫기 핸들러
	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		setDeleteTargetId(null);
	};

	// 수정 페이지로 이동
	const handleEdit = (noticeId, event) => {
		event.preventDefault();
		event.stopPropagation();
		navigate(`/bodyswitch-admin/notice/edit/${noticeId}`);
	};

	// 게시글 작성 페이지로 이동
	const handleCreateNotice = () => {
		navigate("/bodyswitch-admin/notice/create");
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
			<div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold">
				로딩 중...
			</div>
		);
	}

	if (error) {
		return (
			<div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-red-500">
				{error}
			</div>
		);
	}

	return (
		<div className="pt-24 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col items-center max-w-[1400px] mx-auto w-full">
				{/* 제목 섹션 */}
				<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
					<p className="text-3xl md:text-[40px] font-medium text-[#333]"
					   style={{fontFamily: 'esamanru, sans-serif'}}>
						공지사항
					</p>
				</div>

				{/* 검색 섹션 */}
				<div className="flex flex-col items-end w-full gap-6 p-6 rounded-lg bg-[#f4f5f7] my-8">
					<div className="flex flex-col md:flex-row justify-between items-start w-full gap-6">
						<div className="flex-1 w-full min-w-[300px]">
							<p className="text-xl lg:text-2xl font-semibold text-black mb-3">키워드 검색</p>
							<div className="flex items-center gap-2">
								<input
									type="text"
									value={keywordInput}
									onChange={(e) => setKeywordInput(e.target.value)}
									onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
									placeholder="제목 또는 내용을 입력해 주세요"
									className="flex-grow h-12 px-4 rounded-lg bg-white border border-[#b3b3b3] text-base text-black"
								/>
								<button
									onClick={handleSearch}
									className="h-12 px-6 rounded-lg bg-[#4ab3bc] text-white text-lg font-medium hover:bg-[#3a9ca5] transition-colors"
								>
									검색
								</button>
							</div>
						</div>
						<div className="flex-1 w-full min-w-[300px]">
							<p className="text-xl lg:text-2xl font-semibold text-black mb-3">날짜 검색</p>
							<div className="flex items-center gap-2">
								<input
									type="date"
									value={startDateInput}
									onChange={e => setStartDateInput(e.target.value)}
									className="flex-grow h-12 px-4 rounded-lg bg-white border border-[#d9d9d9] text-black"
								/>
								<span className="text-black">~</span>
								<input
									type="date"
									value={endDateInput}
									onChange={e => setEndDateInput(e.target.value)}
									className="flex-grow h-12 px-4 rounded-lg bg-white border border-[#d9d9d9] text-black"
								/>
								<button
									onClick={handleSearch}
									className="h-12 px-6 rounded-lg bg-[#4ab3bc] text-white text-lg font-medium hover:bg-[#3a9ca5] transition-colors"
								>
									조회
								</button>
							</div>
						</div>
					</div>
					<button
						onClick={handleSearchReset}
						className="h-12 px-6 rounded-lg bg-gray-500 text-white text-lg font-medium hover:bg-gray-600 transition-colors"
					>
						검색 초기화
					</button>
				</div>

				{/* 공지사항 목록 */}
				<div className="flex flex-col justify-start items-start w-full">
					{/* 테이블 헤더 */}
					<div className="flex justify-start items-center w-full border border-[#b3b3b3] bg-gray-50">
						<div className="flex justify-center items-center w-[8%] min-w-[60px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">번호</p>
						</div>
						<div className="flex justify-center items-center w-[28%] min-w-[200px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">제목</p>
						</div>
						<div className="flex justify-center items-center w-[22%] min-w-[150px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">내용</p>
						</div>
						<div className="flex justify-center items-center w-[10%] min-w-[80px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">작성자</p>
						</div>
						<div className="flex justify-center items-center w-[12%] min-w-[100px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">작성일</p>
						</div>
						<div className="flex justify-center items-center w-[8%] min-w-[70px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">조회수</p>
						</div>
						<div className="flex justify-center items-center w-[12%] min-w-[120px] h-12 py-2.5">
							<p className="text-base font-semibold text-neutral-800">편집</p>
						</div>
					</div>

					{/* 테이블 본문 */}
					{notices && notices.length > 0 ? (
						notices.map((notice) => (
							<div
								key={notice.id}
								onClick={() => navigate(`/bodyswitch-admin/notice/${notice.id}`)}
								className="flex justify-start items-center w-full h-[62px] border-t-0 border-r-0 border-b border-l-0 border-[#d9d9d9] hover:bg-gray-50 transition-colors cursor-pointer"
							>
								<div className="flex justify-center items-center w-[8%] min-w-[60px] py-3">
									<p className="text-base font-medium text-neutral-800">{notice.id}</p>
								</div>
								<div className="flex justify-start items-center w-[28%] min-w-[200px] px-4 py-3">
									<p className="w-full text-base font-medium text-neutral-800 truncate">
										{notice.title}
									</p>
								</div>
								<div className="flex justify-start items-center w-[22%] min-w-[150px] px-4 py-3">
									<p className="w-full text-base font-medium text-neutral-800 truncate">
										{notice.content.replace(/<[^>]*>/g, '')}
									</p>
								</div>
								<div className="flex justify-center items-center w-[10%] min-w-[80px] py-3">
									<p className="text-base font-medium text-neutral-800">{notice.author}</p>
								</div>
								<div className="flex justify-center items-center w-[12%] min-w-[100px] py-3">
									<p className="text-base font-medium text-neutral-800">{notice.createdAt}</p>
								</div>
								<div className="flex justify-center items-center w-[8%] min-w-[70px] py-3">
									<p className="text-base font-medium text-neutral-800">{notice.viewCount}</p>
								</div>
								<div
									onClick={(e) => e.stopPropagation()}
									className="flex justify-center items-center w-[12%] min-w-[120px] py-3 gap-1"
								>
									<button
										onClick={(e) => handleEdit(notice.id, e)}
										className="px-2 py-1 rounded border border-[#2A9F57] text-[#2A9F57] bg-white text-xs font-medium hover:bg-green-50 transition-colors"
									>
										수정
									</button>
									<button
										onClick={(e) => handleDeleteClick(notice.id, e)}
										className="px-2 py-1 rounded border border-[#EE735A] text-[#EE735A] bg-white text-xs font-medium hover:bg-red-50 transition-colors"
									>
										삭제
									</button>
								</div>
							</div>
						))
					) : (
						<div className="py-16 text-center text-lg text-gray-500 w-full">
							{(searchParams.keyword || searchParams.startDate || searchParams.endDate)
								? '검색 결과가 없습니다.'
								: '공지사항이 없습니다.'
							}
						</div>
					)}
				</div>

				{/* 페이지네이션 */}
				{totalPages > 1 && notices && notices.length > 0 && (
					<div className="flex justify-center items-center gap-4 mt-8">
						{renderPagination()}
					</div>
				)}

				{/* 게시글 작성 버튼 */}
				<div className="flex justify-end w-full mt-4 mb-8">
					<button
						onClick={handleCreateNotice}
						className="px-6 py-3 rounded-lg bg-[#4ab3bc] text-white text-lg font-medium hover:bg-[#3a9ca5] transition-colors"
					>
						게시글 작성하기
					</button>
				</div>
			</div>

			{/* 삭제 확인 모달 */}
			<DeleteConfirmModal
				isOpen={showDeleteModal}
				onClose={() => setShowDeleteModal(false)}
				onConfirm={handleDeleteConfirm}
			/>

			{/* 삭제 성공 모달 */}
			<SuccessModal
				isOpen={showSuccessModal}
				onClose={handleSuccessModalClose}
				message="삭제가 완료되었습니다."
			/>
		</div>
	);
};

export default NoticesListPage;