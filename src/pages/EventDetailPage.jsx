import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"; // Link 컴포넌트 추가
import axios from "axios";
import { OptimizedImage } from "../components/ui/Image/index.jsx";

// HTML을 안전하게 렌더링하는 함수
const renderHTML = (htmlString) => {
	return { __html: htmlString };
};

const EventDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchEventDetail = async () => {
			try {
				const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/event/${id}`);
				setEvent(response.data);
			} catch (err) {
				setError("이벤트 상세 정보를 불러오는 데 실패했습니다.");
				console.error("Error fetching event detail:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchEventDetail();
	}, [id]);

	const handleGoBack = () => {
		navigate("/event");
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

	if (!event) {
		return (
			<div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-gray-500">
				이벤트를 찾을 수 없습니다.
			</div>
		);
	}

	return (
		<div className="pt-24 flex flex-col items-center w-full px-4">
			<div className="flex flex-col items-center max-w-[1536px] mx-auto w-full">
				{/* 제목 섹션 */}
				<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-t-0 border-r-0 border-b-2 border-l-0 border-[#e6e6e6]">
					<p className="text-[32px] md:text-[40px] font-medium text-[#333]"
					   style={{fontFamily: 'esamanru, sans-serif'}}>
						이벤트
					</p>
				</div>

				{/* 상세 정보 헤더 */}
				<div className="flex flex-col justify-start items-center w-full relative gap-[9px] mt-8 md:mt-16">
					<div className="flex flex-col md:flex-row justify-center items-center relative gap-2 md:gap-4">
						<p className={`text-lg md:text-2xl font-semibold text-center ${
							event.status === 'IN_PROGRESS' ? 'text-[#4ab3bc]' :
							event.status === 'EXPIRED' ? 'text-[#ff6b6b]' :
							event.status === 'UPCOMING' ? 'text-[#ffa500]' : 'text-[#4ab3bc]'
						}`}>
							{event.status === 'IN_PROGRESS' ? '진행중 이벤트' :
							 event.status === 'EXPIRED' ? '종료된 이벤트' :
							 event.status === 'UPCOMING' ? '진행 예정 이벤트' : '진행중 이벤트'}
						</p>
						<div className="hidden md:block w-0.5 h-5 rounded-[999px] bg-[#e6e6e6]"></div>
						<p className="text-lg md:text-2xl font-medium text-center text-[#b3b3b3]">
							{event.createdAt}
						</p>
					</div>
					<p className="w-full text-[28px] md:text-[40px] font-semibold text-center text-[#333] px-4">
						{event.title}
					</p>
					<p className="w-full text-base md:text-2xl font-medium text-center text-[#666] px-4 mt-3">
						{event.subTitle}
					</p>
				</div>

				{/* 이벤트 이미지 및 상세 내용 */}
				<div className="flex flex-col items-center w-full relative gap-8 md:gap-16 mt-8 md:mt-16">
					<div className="max-w-[1200px] w-full px-4 text-center">
						<div
							className="text-sm md:text-base font-medium text-neutral-700 whitespace-pre-wrap break-words overflow-wrap-anywhere"
							style={{ 
								fontFamily: 'Pretendard-Regular, sans-serif', 
								fontSize: "larger",
								wordBreak: 'break-word',
								overflowWrap: 'anywhere',
								hyphens: 'auto'
							}}
							dangerouslySetInnerHTML={renderHTML(event.content)}
						/>
					</div>
				</div>

				{/* previousEvent가 있을 경우 다음 글 섹션 렌더링 */}
				{event.previousEvent && (
					<div className="flex flex-col justify-start items-start w-full max-w-[1200px] relative gap-4 mt-12 md:mt-20">
						<p className="text-xl md:text-2xl font-medium text-center text-[#b3b3b3]">다음글</p>
						<Link
							to={`/event/${event.previousEvent.id}`}
							className="flex flex-col md:flex-row justify-start items-center w-full min-h-48 md:h-64 relative rounded-2xl bg-white shadow-[0px_0px_12px_0_rgba(0,0,0,0.16)] overflow-hidden transition-all duration-500 transform hover:scale-[1.01]"
						>
							<div className="flex-grow-0 flex-shrink-0 w-full md:w-[30%] h-48 md:h-64 relative overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transition-all duration-800 md:hover:w-[35%]">
								<OptimizedImage
									src={event.previousEvent.imgUrl}
									alt={event.previousEvent.title}
									className="w-full h-full"
									width={400}
									height={256}
									sizes="(max-width: 768px) 100vw, 30vw"
								/>
							</div>
							<div className="flex flex-col justify-between items-start flex-grow p-4 md:p-6 transition-all duration-500 md:hover:flex-shrink h-full">
								<div className="flex flex-col justify-start items-start self-stretch gap-3 md:gap-6">
									<p className="text-[20px] md:text-[32px] font-semibold text-left text-[#333]">
										{event.previousEvent.title}
									</p>
									{/* 💡 truncate 클래스를 사용하여 내용의 맨 윗줄만 표시 */}
									<p className="w-full text-sm md:text-base font-medium text-left text-neutral-800 truncate">
										{event.previousEvent.subTitle.replace(/<[^>]*>/g, '')}
									</p>
								</div>
								<div className="flex justify-start items-center relative gap-2.5">
									<p className="text-xs md:text-sm font-medium text-left text-[#ccc]">
										{event.previousEvent.startDate}
									</p>
								</div>
							</div>
						</Link>
					</div>
				)}

				{/* 목록으로 돌아가기 버튼 */}
				<div className="flex justify-center w-full mt-12 md:mt-16">
					<button
						className="flex justify-center items-center relative gap-2 px-4 py-3 rounded-2xl bg-[#666] cursor-pointer"
						onClick={handleGoBack}
					>
						<svg
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-8 md:w-12 h-8 md:h-12 relative"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M7.59007 32.8696L7.74777 32.8777C8.52566 32.958 9.13292 33.6244 9.13292 34.4348C9.13292 35.2451 8.52566 35.9116 7.74777 35.9918L7.59007 36H7.56596C6.71403 35.9998 6.0231 35.2991 6.0231 34.4348C6.0231 33.5705 6.71403 32.8698 7.56596 32.8696H7.59007ZM40.4571 32.8696L40.6148 32.8777C41.3929 32.9579 42 33.6244 42 34.4348C42 35.2452 41.3929 35.9117 40.6148 35.9918L40.4571 36H16.9808C16.1287 36 15.4379 35.2992 15.4379 34.4348C15.4379 33.5703 16.1287 32.8696 16.9808 32.8696H40.4571ZM7.56596 22.4348C8.41806 22.4348 9.10882 23.1356 9.10882 24C9.10882 24.8644 8.41806 25.5652 7.56596 25.5652H7.54286C6.69076 25.5652 6 24.8644 6 24C6 23.1356 6.69076 22.4348 7.54286 22.4348H7.56596ZM40.4571 22.4348L40.6148 22.4429C41.3929 22.5231 42 23.1896 42 24C42 24.8104 41.3929 25.4769 40.6148 25.5571L40.4571 25.5652H16.9808C16.1287 25.5652 15.4379 24.8644 15.4379 24C15.4379 23.1356 16.1287 22.4348 16.9808 22.4348H40.4571ZM7.59007 12L7.74777 12.0082C8.52566 12.0884 9.13292 12.7549 9.13292 13.5652C9.13292 14.3756 8.52566 15.042 7.74777 15.1223L7.59007 15.1304H7.56596C6.71403 15.1302 6.0231 14.4295 6.0231 13.5652C6.0231 12.7009 6.71403 12.0002 7.56596 12H7.59007ZM40.4571 12L40.6148 12.0082C41.3929 12.0883 42 12.7548 42 13.5652C42 14.3756 41.3929 15.0421 40.6148 15.1223L40.4571 15.1304H16.9808C16.1287 15.1304 15.4379 14.4297 15.4379 13.5652C15.4379 12.7008 16.1287 12 16.9808 12H40.4571Z"
								fill="white"
							></path>
						</svg>
						<p className="text-[24px] md:text-[32px] font-medium text-white">목록으로</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventDetailPage;