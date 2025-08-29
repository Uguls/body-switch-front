import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiClient from "../../../api/apiClient.js";
import { DeleteConfirmModal, SuccessModal } from "../../../components/admin/index.js";

const EventDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	useEffect(() => {
		const fetchEventDetail = async () => {
			try {
				const response = await apiClient.get(`/event/${id}`);
				setEvent(response.data);
			} catch {
				setError("이벤트 상세 정보를 불러오는 데 실패했습니다.");
			} finally {
				setLoading(false);
			}
		};

		fetchEventDetail();
	}, [id]);

	// 수정 버튼 핸들러
	const handleEdit = () => {
		navigate(`/bodyswitch-admin/event/edit/${id}`);
	};

	// 삭제 버튼 클릭 핸들러 (모달 열기)
	const handleDeleteClick = () => {
		setShowDeleteModal(true);
	};

	// 삭제 확인 핸들러 (실제 삭제 실행)
	const handleDeleteConfirm = async () => {
		try {
			await apiClient.delete(`/event/${id}`);
			setShowSuccessModal(true);
		} catch {
			setError("이벤트 삭제에 실패했습니다.");
		}
	};

	// 성공 모달 닫기 핸들러
	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		navigate("/bodyswitch-admin/events");
	};

	// 목록으로 가기 버튼 핸들러
	const handleGoBackToList = () => {
		navigate("/bodyswitch-admin/events");
	};

	// 날짜 포맷팅 함수
	const formatDate = (dateString) => {
		if (!dateString) return '';
		return new Date(dateString).toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).replace(/\./g, '.').replace(/ /g, '').replace(/\.$/, '');
	};
	// 이벤트 상태 판단 함수
	const getEventStatus = () => {
		if (!event.status) return '이벤트';
		
		switch (event.status) {
			case 'IN_PROGRESS':
				return '진행중 이벤트';
			case 'EXPIRED':
				return '완료된 이벤트';
			case 'UPCOMING':
				return '진행 예정 이벤트';
			default:
				return '이벤트';
		}
	};

	if (loading) {
		return <div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold">로딩 중...</div>;
	}

	if (error) {
		return <div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-red-500">{error}</div>;
	}

	if (!event) {
		return <div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-gray-500">이벤트를 찾을 수 없습니다.</div>;
	}

	return (
		<div className="pt-24 flex flex-col items-center w-full">
			<div className="flex flex-col justify-start items-center w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
				{/* 페이지 타이틀 */}
				<div className="flex justify-center items-center self-stretch py-8 border-b-2 border-[#e6e6e6]"
				     style={{fontFamily: 'esamanru, sans-serif'}}>
					<p className="text-[40px] font-medium text-[#333]" style={{fontFamily: 'esamanru, sans-serif'}}>이벤트</p>
				</div>

				{/* 어드민 컨트롤 버튼 영역 */}
				<div className="flex justify-between items-center self-stretch py-6">
					{/* 뒤로가기 버튼 */}
					<div
						onClick={() => navigate(-1)}
						className="flex justify-start items-center relative gap-3 pl-[26px] pr-8 py-3 rounded cursor-pointer hover:bg-gray-100 transition-colors"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
							<path d="M15 18L9 12L15 6" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
						<p className="text-base font-semibold text-[#4d4d4d]">뒤로가기</p>
					</div>
					
					{/* 수정 및 삭제 버튼 그룹 */}
					<div className="flex justify-start items-center gap-6">
						<div
							onClick={handleDeleteClick}
							className="flex justify-center items-center px-[46px] py-3 rounded bg-white border border-[#ee735a] cursor-pointer hover:bg-red-50 transition-colors"
						>
							<p className="text-base font-semibold text-[#ee735a]">삭제</p>
						</div>
						<div
							onClick={handleEdit}
							className="flex justify-center items-center px-[46px] py-3 rounded bg-[#2a9f57] cursor-pointer hover:bg-[#238b4b] transition-colors"
						>
							<p className="text-base font-semibold text-white">수정</p>
						</div>
					</div>
				</div>

				{/* 메인 콘텐츠 */}
				<div className="flex flex-col justify-start items-center w-[1200px] gap-16">
					{/* 이벤트 헤더 정보 */}
					<div className="flex flex-col justify-start items-center w-full relative gap-[9px]">
						<div className="flex justify-start items-center relative gap-4 flex-wrap">
							<p className="text-2xl font-semibold text-[#4ab3bc]">
								{getEventStatus()}
							</p>
							<div className="w-0.5 h-5 rounded-[999px] bg-[#e6e6e6]"></div>
							<p className="text-2xl font-medium text-[#b3b3b3]">
								{formatDate(event.createdAt)}
							</p>
						</div>
						<p className="text-[40px] font-semibold text-center text-[#333] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
							{event.title}
						</p>
						{event.subTitle && (
							<p className="text-[32px] font-medium text-center text-[#666] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
								{event.subTitle}
							</p>
						)}
					</div>

					{/* 이벤트 이미지 및 상세 내용 */}
					<div className="flex flex-col justify-start items-start self-stretch h-auto relative gap-16">
						{/* 이벤트 이미지 */}
						{event.imageUrl && (
							<div className="flex flex-col justify-start items-start self-stretch h-[268px] relative gap-2.5 rounded-2xl">
								<img
									src={event.imageUrl}
									alt={event.title}
									className="self-stretch h-[268px] rounded-2xl object-cover"
								/>
							</div>
						)}

						{/* 이벤트 내용 */}
						<div className="self-stretch w-full text-base font-medium text-center text-neutral-700 break-words word-wrap overflow-wrap-anywhere"
							 style={{ fontFamily: 'Pretendard-Regular, sans-serif' }}>
							<div
								className="break-words word-wrap overflow-wrap-anywhere"
								dangerouslySetInnerHTML={{ __html: event.content }}
							/>
						</div>
					</div>

					{/* 다음글 섹션 (previousEvent가 있을 경우) */}
					{event.previousEvent && (
						<div className="flex flex-col justify-start items-start self-stretch relative gap-4">
							<p className="text-2xl font-medium text-center text-[#b3b3b3]">다음글</p>
							<Link
								to={`/bodyswitch-admin/event/${event.previousEvent.id}`}
								className="flex justify-start items-center self-stretch h-64 relative rounded-2xl bg-white shadow-[0px_0px_12px_0_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.01]"
							>
								<div
									className="w-80 h-64 relative overflow-hidden rounded-2xl bg-cover bg-no-repeat bg-center"
									style={{ backgroundImage: `url(${event.previousEvent.imageUrl})` }}
								></div>
								<div className="flex flex-col justify-between items-start self-stretch flex-grow p-6">
									<div className="flex flex-col justify-start items-start self-stretch relative gap-6">
										<p className="text-[32px] font-semibold text-[#333]">
											{event.previousEvent.title}
										</p>
										<p className="text-2xl font-medium text-[#666]">
											{event.previousEvent.subTitle}
										</p>
									</div>
									<div className="flex justify-center items-center relative gap-2.5">
										<p className="text-xl font-medium text-[#b3b3b3]">
											{formatDate(event.previousEvent.createdAt)}
										</p>
									</div>
								</div>
							</Link>
						</div>
					)}

					{/* 목록으로 버튼 */}
					<div
						onClick={handleGoBackToList}
						className="flex justify-start items-center relative gap-2 px-4 py-3 rounded-2xl bg-[#666] cursor-pointer hover:bg-[#555] transition-colors"
					>
						<svg
							width="49"
							height="48"
							viewBox="0 0 49 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-12 h-12"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M8.09007 32.8696L8.24777 32.8777C9.02566 32.958 9.63292 33.6244 9.63292 34.4348C9.63292 35.2451 9.02566 35.9116 8.24777 35.9918L8.09007 36H8.06596C7.21403 35.9998 6.5231 35.2991 6.5231 34.4348C6.5231 33.5705 7.21403 32.8698 8.06596 32.8696H8.09007ZM40.9571 32.8696L41.1148 32.8777C41.8929 32.9579 42.5 33.6244 42.5 34.4348C42.5 35.2452 41.8929 35.9117 41.1148 35.9918L40.9571 36H17.4808C16.6287 36 15.9379 35.2992 15.9379 34.4348C15.9379 33.5703 16.6287 32.8696 17.4808 32.8696H40.9571ZM8.06596 22.4348C8.91806 22.4348 9.60882 23.1356 9.60882 24C9.60882 24.8644 8.91806 25.5652 8.06596 25.5652H8.04286C7.19076 25.5652 6.5 24.8644 6.5 24C6.5 23.1356 7.19076 22.4348 8.04286 22.4348H8.06596ZM40.9571 22.4348L41.1148 22.4429C41.8929 22.5231 42.5 23.1896 42.5 24C42.5 24.8104 41.8929 25.4769 41.1148 25.5571L40.9571 25.5652H17.4808C16.6287 25.5652 15.9379 24.8644 15.9379 24C15.9379 23.1356 16.6287 22.4348 17.4808 22.4348H40.9571ZM8.09007 12L8.24777 12.0082C9.02566 12.0884 9.63292 12.7549 9.63292 13.5652C9.63292 14.3756 9.02566 15.042 8.24777 15.1223L8.09007 15.1304H8.06596C7.21403 15.1302 6.5231 14.4295 6.5231 13.5652C6.5231 12.7009 7.21403 12.0002 8.06596 12H8.09007ZM40.9571 12L41.1148 12.0082C41.8929 12.0883 42.5 12.7548 42.5 13.5652C42.5 14.3756 41.8929 15.0421 41.1148 15.1223L40.9571 15.1304H17.4808C16.6287 15.1304 15.9379 14.4297 15.9379 13.5652C15.4379 12.7008 16.6287 12 17.4808 12H40.9571Z"
								fill="white"
							></path>
						</svg>
						<p className="text-[32px] font-medium text-white">목록으로</p>
					</div>
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

export default EventDetailPage;