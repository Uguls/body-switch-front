import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient.js";
import { AdminPageLayout, PageHeader, DeleteConfirmModal, SuccessModal } from "../../../components/admin/index.js";

const NoticeDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [notice, setNotice] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	useEffect(() => {
		const fetchNoticeDetail = async () => {
			try {
				// 기존 axios를 apiClient로 변경하여 일관성을 유지합니다.
				const response = await apiClient.get(`/notice/${id}`);
				setNotice(response.data);

			} catch {
				setError("공지사항 상세 정보를 불러오는 데 실패했습니다.");
			} finally {
				setLoading(false);
			}
		};

		fetchNoticeDetail();
	}, [id]);

	// 수정 버튼 핸들러
	const handleEdit = () => {
		navigate(`/bodyswitch-admin/notice/edit/${id}`); // 수정 페이지로 이동
	};

	// 삭제 버튼 클릭 핸들러 (모달 열기)
	const handleDeleteClick = () => {
		setShowDeleteModal(true);
	};

	// 삭제 확인 핸들러 (실제 삭제 실행)
	const handleDeleteConfirm = async () => {
		try {
			await apiClient.delete(`/notice/${id}`);
			setShowSuccessModal(true);
		} catch {
			setError("공지사항 삭제에 실패했습니다.");
		}
	};

	// 성공 모달 닫기 핸들러
	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		navigate("/bodyswitch-admin/notices");
	};

	// 목록으로 가기 버튼 핸들러
	const handleGoBackToList = () => {
		navigate("/bodyswitch-admin/notices"); // 관리자 공지사항 목록 경로로 이동
	};

	if (loading) {
		return <div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold">로딩 중...</div>;
	}

	if (error) {
		return <div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-red-500">{error}</div>;
	}

	if (!notice) {
		return <div className="pt-24 flex justify-center items-center h-screen text-2xl font-semibold text-gray-500">공지사항을 찾을 수 없습니다.</div>;
	}

	return (
		<div className="pt-24 flex flex-col items-center w-full min-h-screen bg-gray-50 font-sans">
			<div className="flex flex-col items-center w-full max-w-[1536px] mx-auto px-4">
				{/* 페이지 타이틀 */}
				<div className="flex justify-center items-center w-full relative py-8 border-b-2 border-[#e6e6e6]">
					<p className="text-3xl md:text-4xl font-medium text-[#333]" style={{fontFamily: 'esamanru, sans-serif'}}>공지사항</p>
				</div>

				<div className="flex justify-between items-center self-stretch py-6">
					{/* 뒤로가기 버튼 */}
					<button
						onClick={() => navigate(-1)}
						className="flex justify-start items-center relative gap-2 pr-8 py-3 rounded hover:bg-gray-200 transition-colors"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
							<path d="M15 18L9 12L15 6" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
						<p className="text-base font-semibold text-left text-[#4d4d4d]">뒤로가기</p>
					</button>
					{/* 수정 및 삭제 버튼 그룹 */}
					<div className="flex justify-start items-center gap-4">
						<button
							onClick={handleDeleteClick}
							className="flex justify-center items-center px-8 py-3 rounded-lg bg-white border border-[#ee735a] hover:bg-red-50 transition-colors"
						>
							<p className="text-base font-semibold text-left text-[#ee735a]">삭제</p>
						</button>
						<button
							onClick={handleEdit}
							className="flex justify-center items-center px-8 py-3 rounded-lg bg-[#2a9f57] hover:bg-[#238b4b] transition-colors"
						>
							<p className="text-base font-semibold text-left text-white">수정</p>
						</button>
					</div>
				</div>

				{/* 상세 정보 헤더 */}
				<div className="flex flex-col justify-start items-center w-full relative gap-2 mt-8 py-8">
					<div className="flex items-center gap-4">
						<p className="text-xl md:text-2xl font-semibold text-left text-[#4ab3bc]">공지사항</p>
						<div className="w-0.5 h-5 rounded-full bg-[#e6e6e6]"></div>
						<p className="text-xl md:text-2xl font-medium text-left text-[#b3b3b3]">{notice.createdAt}</p>
					</div>
					<p className="self-stretch text-3xl md:text-4xl font-semibold text-center text-[#333] break-words mt-2">
						{notice.title}
					</p>
				</div>

				{/* 상세 내용 본문 */}
				<div className="w-full mt-8 mb-16 py-8">
					<div
						className="prose max-w-none text-left text-lg text-gray-800"
						dangerouslySetInnerHTML={{ __html: notice.content }}
					/>
					{notice.imgUrls && notice.imgUrls.length > 0 && (
						<div className="flex flex-col gap-4 mt-8">
							{notice.imgUrls.map((url, index) => (
								<img key={index} src={url} alt={`공지 이미지 ${index + 1}`} className="w-full h-auto rounded-md" />
							))}
						</div>
					)}
				</div>

				{/* --- 목록으로 버튼 --- */}
				<div className="w-full flex justify-center mt-8 mb-16">
					<button
						onClick={handleGoBackToList}
						className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#666] hover:bg-[#555] transition-colors"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M7.59007 32.8696L7.74777 32.8777C8.52566 32.958 9.13292 33.6244 9.13292 34.4348C9.13292 35.2451 8.52566 35.9116 7.74777 35.9918L7.59007 36H7.56596C6.71403 35.9998 6.0231 35.2991 6.0231 34.4348C6.0231 33.5705 6.71403 32.8698 7.56596 32.8696H7.59007ZM40.4571 32.8696L40.6148 32.8777C41.3929 32.9579 42 33.6244 42 34.4348C42 35.2452 41.3929 35.9117 40.6148 35.9918L40.4571 36H16.9808C16.1287 36 15.4379 35.2992 15.4379 34.4348C15.4379 33.5703 16.1287 32.8696 16.9808 32.8696H40.4571ZM7.56596 22.4348C8.41806 22.4348 9.10882 23.1356 9.10882 24C9.10882 24.8644 8.41806 25.5652 7.56596 25.5652H7.54286C6.69076 25.5652 6 24.8644 6 24C6 23.1356 6.69076 22.4348 7.54286 22.4348H7.56596ZM40.4571 22.4348L40.6148 22.4429C41.3929 22.5231 42 23.1896 42 24C42 24.8104 41.3929 25.4769 40.6148 25.5571L40.4571 25.5652H16.9808C16.1287 25.5652 15.4379 24.8644 15.4379 24C15.4379 23.1356 16.1287 22.4348 16.9808 22.4348H40.4571ZM7.59007 12L7.74777 12.0082C8.52566 12.0884 9.13292 12.7549 9.13292 13.5652C9.13292 14.3756 8.52566 15.042 7.74777 15.1223L7.59007 15.1304H7.56596C6.71403 15.1302 6.0231 14.4295 6.0231 13.5652C6.0231 12.7009 6.71403 12.0002 7.56596 12H7.59007ZM40.4571 12L40.6148 12.0082C41.3929 12.0883 42 12.7548 42 13.5652C42 14.3756 41.3929 15.0421 40.6148 15.1223L40.4571 15.1304H16.9808C16.1287 15.1304 15.4379 14.4297 15.4379 13.5652C15.4379 12.7008 16.1287 12 16.9808 12H40.4571Z"
								fill="white"
							></path>
						</svg>
						<p className="text-xl font-medium text-white">목록으로</p>
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

export default NoticeDetailPage;
