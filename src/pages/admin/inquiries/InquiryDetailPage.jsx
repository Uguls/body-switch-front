import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from "../../../api/apiClient.js";
import { StatusDropdown } from "../../../components/ui/index.jsx";
import { AdminPageLayout, PageHeader, SuccessModal } from "../../../components/admin/index.js";

// 각 "라벨: 값" 쌍을 나타내는 새로운 UI 컴포넌트입니다.
const InfoPair = ({ label, children, isLastInRow = false }) => (
	<div className={`w-full md:w-1/3 flex min-w-0 ${!isLastInRow ? 'md:border-r-2 md:border-gray-200' : ''}`}>
		<div className="w-[152px] flex-shrink-0 bg-gray-100 flex justify-center items-center p-4 border-r-2 border-gray-200">
			<p className="text-base font-semibold text-neutral-800 text-center">{label}</p>
		</div>
		<div className="flex-grow flex items-center p-4 min-w-0">
			{typeof children === 'string' || typeof children === 'number' ? (
				<p className="text-base font-medium text-neutral-800 break-all">{children}</p>
			) : (
				children
			)}
		</div>
	</div>
);

// API의 영문 Status와 UI의 한글 Status를 매핑 (PENDING으로 수정)
const KOREAN_TO_ENGLISH_STATUS = {
	'미확인': 'PENDING',
	'처리중': 'PROCESSING',
	'완료': 'COMPLETE',
};
const ENGLISH_TO_KOREAN_STATUS = {
	'PENDING': '미확인',
	'PROCESSING': '처리중',
	'COMPLETE': '완료',
};


const InquiryDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [inquiry, setInquiry] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	// 모달 상태
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	useEffect(() => {
		const fetchInquiryDetail = async () => {
			try {
				setLoading(true);
				const response = await apiClient.get(`/inquiries/${id}`);
				setInquiry(response.data);
			} catch (err) {
				console.error("문의내역 상세 정보를 불러오는데 실패했습니다.", err);
				setError("데이터를 불러올 수 없습니다. 다시 시도해 주세요.");
			} finally {
				setLoading(false);
			}
		};

		fetchInquiryDetail();
	}, [id]);


	const handleStatusChange = async (newKoreanStatus) => {
		const newEnglishStatus = KOREAN_TO_ENGLISH_STATUS[newKoreanStatus];
		if (!newEnglishStatus) return;

		// 원래 상태 백업 (롤백용)
		const originalInquiry = inquiry;
		
		// UI를 먼저 업데이트 (낙관적 업데이트)
		setInquiry(prev => ({ ...prev, status: newEnglishStatus }));

		try {
			await apiClient.patch(`/inquiries/${id}/change-status`, { status: newEnglishStatus });
			
			// 성공 시 모달창 표시
			setSuccessMessage(`문의 상태가 "${newKoreanStatus}"(으)로 변경되었습니다.`);
			setShowSuccessModal(true);
			
		} catch (error) {
			console.error('상태 변경 실패:', error);
			
			// 실패 시 원래 상태로 롤백
			setInquiry(originalInquiry);
			
			alert("상태 변경에 실패했습니다. 다시 시도해주세요.");
		}
	};

	const handleGoBack = () => navigate(-1);

	// 성공 모달 닫기 핸들러
	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		setSuccessMessage('');
	};

	if (loading) return <div className="p-8 text-center">데이터를 불러오는 중입니다...</div>;
	if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
	if (!inquiry) return null;


	return (
		<div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 text-[#333]">
			<div className="flex justify-center items-center relative py-8 border-b-2 border-gray-200">
				<h1 className="text-4xl font-medium" style={{fontFamily: 'esamanru, sans-serif'}}>문의내역</h1>
			</div>

			<div className="flex justify-start items-start py-6">
				<button onClick={handleGoBack} className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-100 transition-colors">
					<svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<p className="text-base font-semibold text-[#4d4d4d]">뒤로가기</p>
				</button>
			</div>

			<div className="w-full border-t-2 border-l-2 border-r-2 border-gray-200">
				{/* --- 레이아웃 구조 변경 --- */}
				{/* Row 1 */}
				<div className="flex flex-col md:flex-row border-b-2 border-gray-200">
					<InfoPair label="번호">{inquiry.id}</InfoPair>
					<InfoPair label="소속">{inquiry.company}</InfoPair>
					<InfoPair label="휴대폰 번호" isLastInRow>{inquiry.phoneNumber}</InfoPair>
				</div>
				{/* Row 2 */}
				<div className="flex flex-col md:flex-row border-b-2 border-gray-200">
					<InfoPair label="날짜">{inquiry.createdAt || '날짜 정보 없음'}</InfoPair>
					<InfoPair label="직급">{inquiry.position}</InfoPair>
					<InfoPair label="이메일 주소" isLastInRow>{inquiry.email}</InfoPair>
				</div>
				{/* Row 3 */}
				<div className="flex flex-col md:flex-row">
					<InfoPair label="이름">{inquiry.name}</InfoPair>
					<InfoPair label="전화번호">{inquiry.number}</InfoPair>
					<InfoPair label="상태" isLastInRow>
						<StatusDropdown
							currentStatus={ENGLISH_TO_KOREAN_STATUS[inquiry.status] || '알 수 없음'}
							onStatusChange={handleStatusChange}
						/>
					</InfoPair>
				</div>

				{/* 문의 내용 */}
				<div className="flex border-t-2 border-b-2 border-gray-200">
					<div className="w-[152px] flex-shrink-0 bg-gray-100 flex justify-center items-center p-4 border-r-2 border-gray-200">
						<p className="text-base font-semibold text-neutral-800">문의 내용</p>
					</div>
					<div className="flex-grow p-6">
						<p className="w-full text-base font-medium text-neutral-800 whitespace-pre-wrap break-words">
							{inquiry.content}
						</p>
					</div>
				</div>
			</div>
			
			{/* 상태 변경 성공 모달 */}
			<SuccessModal
				isOpen={showSuccessModal}
				onClose={handleSuccessModalClose}
				message={successMessage}
			/>
		</div>
	);
};

export default InquiryDetail;
