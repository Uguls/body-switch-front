import React, { useState, useEffect } from 'react';
import apiClient from '../../api/apiClient'; // 1. import 구문을 apiClient로 변경
import StatusDropdown from './StatusDropdown';

const STATUS_TO_KOREAN = {
	PENDING: '미확인',
	PROCESSING: '처리중',
	COMPLETE: '완료',
};
const KOREAN_TO_STATUS = {
	미확인: 'PENDING',
	처리중: 'PROCESSING',
	완료: 'COMPLETE',
};

const AdminInquiriesPage = () => {
	const [inquiries, setInquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [pageSize, setPageSize] = useState(10);

	const [keywordInput, setKeywordInput] = useState('');
	const [startDateInput, setStartDateInput] = useState('');
	const [endDateInput, setEndDateInput] = useState('');
	const [activeStatusFilter, setActiveStatusFilter] = useState('전체');

	const [searchParams, setSearchParams] = useState({
		keyword: '',
		status: null,
		startDate: '',
		endDate: '',
	});

	useEffect(() => {
		const fetchInquiries = async () => {
			setLoading(true);
			setError(null);
			try {
				const params = {
					page: currentPage,
					size: pageSize,
					keyword: searchParams.keyword || undefined, // null 대신 undefined를 보내 파라미터에서 제외
					status: searchParams.status || undefined,
					startDate: searchParams.startDate || undefined,
					endDate: searchParams.endDate || undefined,
				};

				// 2. API 호출을 apiClient.get으로 변경
				const response = await apiClient.get('/inquiries/', { params });

				setInquiries(response.data.events || []);
				setCurrentPage(response.data.currentPage);
				setTotalPages(response.data.totalPages);

			} catch (err) {
				if (err.response && err.response.status === 403) {
					setError("해당 정보에 접근할 권한이 없습니다.");
				} else {
					setError("데이터를 불러오는 데 실패했습니다.");
				}
				console.error("Error fetching inquiries:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchInquiries();
	}, [currentPage, pageSize, searchParams]);

	const handleSearch = () => {
		setCurrentPage(0);
		setSearchParams({
			keyword: keywordInput,
			status: activeStatusFilter === '전체' ? null : KOREAN_TO_STATUS[activeStatusFilter],
			startDate: startDateInput,
			endDate: endDateInput,
		});
	};

	const handleStatusFilterClick = (status) => {
		setActiveStatusFilter(status);
		setCurrentPage(0);
		setSearchParams(prev => ({
			...prev,
			status: status === '전체' ? null : KOREAN_TO_STATUS[status]
		}));
	};

	const handlePageChange = (page) => {
		if (page >= 0 && page < totalPages) {
			setCurrentPage(page);
		}
	};

	const handleStatusChange = async (inquiryId, newKoreanStatus) => {
		const newApiStatus = KOREAN_TO_STATUS[newKoreanStatus];

		setInquiries(prevInquiries =>
			prevInquiries.map(inquiry =>
				inquiry.id === inquiryId ? { ...inquiry, status: newApiStatus } : inquiry
			)
		);

		try {
			// 상태 변경 API도 apiClient를 사용해야 토큰이 전송됩니다.
			// await apiClient.patch(`/inquiries/${inquiryId}/status`, { status: newApiStatus });
			console.log(`(API Call) Inquiry ID ${inquiryId} status changed to ${newApiStatus}`);
		} catch (err) {
			alert('상태 변경에 실패했습니다. 데이터를 새로고침합니다.');
			setSearchParams(prev => ({...prev}));
		}
	};

	const renderPagination = () => {
		// 페이지네이션 UI 렌더링 로직 (생략)
		return <div className="text-gray-600">페이지네이션 영역</div>;
	};

	return (
		<div className="pt-24 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-[1536px] mx-auto">
				{/* ... 이하 UI 코드는 동일 ... */}
				<div className="flex justify-center items-center w-full relative py-8 border-b-2 border-[#e6e6e6]">
					<p className="text-3xl md:text-[40px] font-medium text-black">문의내역</p>
				</div>

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
									placeholder="이름 또는 문의 내용을 입력해 주세요"
									className="flex-grow h-12 px-4 rounded-lg bg-white border border-[#b3b3b3] text-base text-black"
								/>
								<button onClick={handleSearch} className="h-12 px-6 rounded-lg bg-[#4ab3bc] text-white text-lg font-medium">검색</button>
							</div>
						</div>
						<div className="flex-1 w-full min-w-[300px]">
							<p className="text-xl lg:text-2xl font-semibold text-black mb-3">날짜 검색</p>
							<div className="flex items-center gap-2">
								<input type="date" value={startDateInput} onChange={e => setStartDateInput(e.target.value)} className="flex-grow h-12 px-4 rounded-lg bg-white border border-[#d9d9d9] text-black" />
								<span className="text-black">~</span>
								<input type="date" value={endDateInput} onChange={e => setEndDateInput(e.target.value)} className="flex-grow h-12 px-4 rounded-lg bg-white border border-[#d9d9d9] text-black" />
								<button onClick={handleSearch} className="h-12 px-6 rounded-lg bg-[#4ab3bc] text-white text-lg font-medium">조회</button>
							</div>
						</div>
					</div>
					<div>
						<p className="text-xl lg:text-2xl font-semibold text-black mb-3">상태 필터</p>
						<div className="flex items-center flex-wrap gap-2">
							{['전체', '미확인', '처리중', '완료'].map(status => (
								<button
									key={status}
									onClick={() => handleStatusFilterClick(status)}
									className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
										activeStatusFilter === status
											? 'bg-[#4ab3bc] text-white'
											: 'bg-white border border-[#4ab3bc] text-[#4ab3bc]'
									}`}
								>
									{status}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className="w-full overflow-x-auto">
					<div className="min-w-[1200px]">
						<div className="flex items-center w-full h-[62px] border border-[#b3b3b3] bg-gray-50 font-semibold text-black text-center">
							<div className="w-[8%] px-2">번호</div>
							<div className="w-[12%] px-2">날짜</div>
							<div className="w-[10%] px-2">이름</div>
							<div className="w-[20%] px-2">문의 내용</div>
							<div className="w-[15%] px-2">휴대폰 번호</div>
							<div className="w-[20%] px-2">이메일 주소</div>
							<div className="w-[15%] px-2">상태</div>
						</div>
						{loading ? (
							<div className="text-center py-16">로딩 중...</div>
						) : error ? (
							<div className="text-center py-16 text-red-500">{error}</div>
						) : inquiries.length > 0 ? (
							inquiries.map(inquiry => (
								<div key={inquiry.id} className="flex items-center w-full h-[62px] border-b border-x border-[#d9d9d9] text-center text-sm text-black">
									<div className="w-[8%] px-2">{inquiry.id}</div>
									<div className="w-[12%] px-2">{inquiry.createdAt}</div>
									<div className="w-[10%] px-2">{inquiry.name}</div>
									<div className="w-[20%] px-2 truncate">{inquiry.content}</div>
									<div className="w-[15%] px-2">{inquiry.phoneNumber}</div>
									<div className="w-[20%] px-2 truncate">{inquiry.email}</div>
									<div className="w-[15%] px-2 flex justify-center">
										<StatusDropdown
											currentStatus={STATUS_TO_KOREAN[inquiry.status] || '알 수 없음'}
											onStatusChange={(newKoreanStatus) => handleStatusChange(inquiry.id, newKoreanStatus)}
										/>
									</div>
								</div>
							))
						) : (
							<div className="text-center py-16 text-gray-500">문의 내역이 없습니다.</div>
						)}
					</div>
				</div>

				{totalPages > 1 && (
					<div className="flex justify-center items-center gap-4 mt-8">
						{renderPagination()}
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminInquiriesPage;
