import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EventListPage = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeTab, setActiveTab] = useState("IN_PROGRESS");
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const fetchEvents = async (page = 0, status = "IN_PROGRESS") => {
		setLoading(true);
		try {
			const response = await axios.get(`http://localhost:8080/event`, {
				params: {
					filter: status,
					page: page,
					size: 10
				}
			});
			setEvents(response.data.events);
			setCurrentPage(response.data.currentPage);
			setTotalPages(response.data.totalPages);
		} catch (err) {
			setError("이벤트 정보를 불러오는 데 실패했습니다.");
			console.error("Error fetching events:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchEvents(currentPage, activeTab);
	}, [currentPage, activeTab]);

	const handleTabChange = (tab) => {
		setActiveTab(tab);
		setCurrentPage(0);
	};

	const handlePageChange = (page) => {
		if (page >= 0 && page < totalPages) {
			setCurrentPage(page);
		}
	};

	// 💡 페이징 버튼을 렌더링하는 함수 구현
	const renderPagination = () => {
		const pages = [];
		const maxPageNumbers = 5;
		const startPage = Math.max(0, currentPage - Math.floor(maxPageNumbers / 2));
		const endPage = Math.min(totalPages, startPage + maxPageNumbers);

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
		<div className="pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col items-center max-w-[1536px] mx-auto">
				{/* 제목 섹션 */}
				<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
					<p className="flex-grow-0 flex-shrink-0 text-[40px] font-medium text-left text-[#333]">
						이벤트
					</p>
				</div>

				{/* 탭 메뉴 */}
				<div className="flex justify-center items-center gap-px w-[1200px]">
					<div
						className={`flex flex-col justify-center items-center w-80 relative gap-2.5 px-3 py-2 cursor-pointer transition-colors duration-300 ${
							activeTab === "IN_PROGRESS" ? "" : ""
						}`}
						onClick={() => handleTabChange("IN_PROGRESS")}
					>
						<p className={`flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left transition-colors duration-300 ${
							activeTab === "IN_PROGRESS" ? "text-[#4ab3bc]" : "text-[#999]"
						}`}>
							진행중 이벤트
						</p>
						<div className={`w-full h-0.5 transition-colors duration-300 absolute bottom-0 ${
							activeTab === "IN_PROGRESS" ? "bg-[#4ab3bc]" : "bg-transparent"
						}`}></div>
					</div>
					<div
						className={`flex flex-col justify-center items-center w-80 relative gap-2.5 px-3 py-2 cursor-pointer transition-colors duration-300 ${
							activeTab === "EXPIRED" ? "" : ""
						}`}
						onClick={() => handleTabChange("EXPIRED")}
					>
						<p className={`flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left transition-colors duration-300 ${
							activeTab === "EXPIRED" ? "text-[#4ab3bc]" : "text-[#999]"
						}`}>
							종료된 이벤트
						</p>
						<div className={`w-full h-0.5 transition-colors duration-300 absolute bottom-0 ${
							activeTab === "EXPIRED" ? "bg-[#4ab3bc]" : "bg-transparent"
						}`}></div>
					</div>
				</div>

				{/* 이벤트 목록 */}
				<div className="flex flex-col justify-start items-start w-[1200px] gap-12 mt-12">
					{Array.isArray(events) && events.length > 0 ? (
						events.map((event) => (
							<Link
								key={event.id}
								to={`/event/${event.id}`}
								className="flex justify-start items-center w-full h-64 relative rounded-2xl bg-white shadow-[0px_0px_12px_0_rgba(0,0,0,0.16)] overflow-hidden transition-all duration-500 transform hover:scale-[1.01]"
							>
								{/* 이미지 컨테이너 */}
								<div className="flex-grow-0 flex-shrink-0 w-[30%] h-64 relative overflow-hidden rounded-l-2xl transition-all duration-800 hover:w-[35%]">
									<div
										className="w-full h-full bg-cover bg-no-repeat bg-center"
										style={{ backgroundImage: `url(${event.imageUrl})` }}
									></div>
								</div>
								{/* 텍스트 컨테이너 */}
								<div className="flex flex-col justify-between items-start flex-grow p-6 transition-all duration-500 hover:flex-shrink">
									<div className="flex flex-col justify-start items-start self-stretch gap-6">
										<p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-[#333]">
											{event.title}
										</p>
										<p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#666]">
											{event.subTitle}
										</p>
									</div>
									<div className="flex justify-center items-center relative gap-2.5">
										<p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#b3b3b3]">
											{event.createdAt}
										</p>
									</div>
								</div>
							</Link>
						))
					) : (
						<div className="py-16 text-center text-lg text-gray-500 w-full">
							등록된 이벤트가 없습니다.
						</div>
					)}
				</div>

				{/* 💡 페이징 버튼 섹션 추가 */}
				<div className="flex justify-center items-center relative gap-4 mt-8">
					{renderPagination()}
				</div>
			</div>
		</div>
	);
};

export default EventListPage;