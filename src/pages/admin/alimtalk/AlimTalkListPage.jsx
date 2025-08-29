import React, { useState, useEffect } from 'react';
import apiClient from '../../../api/apiClient.js';
import { DeleteConfirmModal, SuccessModal, EditContactModal } from '../../../components/admin/index.js';
import { LoadingSpinner, SkeletonContactCard } from '../../../components/ui/index.jsx';

const AlimTalkListPage = () => {
	// 전화번호 포맷팅 함수 (010-0000-0000 형식)
	const formatPhoneNumber = (value) => {
		// 숫자만 추출
		const numbers = value.replace(/[^\d]/g, '');
		
		// 11자리 초과 시 자르기
		const limitedNumbers = numbers.slice(0, 11);
		
		// 포맷팅
		if (limitedNumbers.length <= 3) {
			return limitedNumbers;
		} else if (limitedNumbers.length <= 7) {
			return `${limitedNumbers.slice(0, 3)}-${limitedNumbers.slice(3)}`;
		} else {
			return `${limitedNumbers.slice(0, 3)}-${limitedNumbers.slice(3, 7)}-${limitedNumbers.slice(7)}`;
		}
	};

	// 전화번호 입력 핸들러
	const handlePhoneChange = (value) => {
		const formattedValue = formatPhoneNumber(value);
		setFormData(prev => ({ ...prev, number: formattedValue }));
	};
	// 연락처 목록 데이터
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	// 토글 상태 추적 (서버에서 active 상태를 제공하지 않으므로 로컬에서 관리)
	const [toggleStates, setToggleStates] = useState({});
	
	// 모달 상태
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [deleteTargetId, setDeleteTargetId] = useState(null);
	const [editTargetContact, setEditTargetContact] = useState(null);
	const [successMessage, setSuccessMessage] = useState('');

	// 등록 폼 데이터 (서버 DTO에 맞게 수정: company → department, phone → number)
	const [formData, setFormData] = useState({
		name: '',
		department: '',
		position: '',
		number: ''
	});

	// 연락처 목록 조회
	const fetchContacts = async () => {
		try {
			setLoading(true);
			setError(null);
			const response = await apiClient.get('/admin/address');
			const contactsData = response.data.addresses || [];
			
			// 서버에서 받은 전화번호를 포맷팅해서 표시
			const formattedContacts = contactsData.map(contact => ({
				...contact,
				number: formatPhoneNumber(contact.number || '')
			}));
			
			setContacts(formattedContacts);
			
			// 서버에서 받은 active 상태를 토글 상태로 설정
			const initialToggleStates = {};
			contactsData.forEach(contact => {
				// active가 null인 경우 true로 기본값 설정
				initialToggleStates[contact.id] = contact.active !== null ? contact.active : true;
			});
			setToggleStates(initialToggleStates);
		} catch (err) {
			console.error('연락처 목록 조회 실패:', err);
			setError('연락처 목록을 불러오는데 실패했습니다.');
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트 마운트 시 연락처 목록 조회
	useEffect(() => {
		fetchContacts();
	}, []);

	// 토글 상태 변경 (활성화/비활성화)
	const handleToggle = async (id) => {
		// 먼저 UI 상태 즉시 업데이트 (애니메이션을 위해)
		const currentState = toggleStates[id];
		setToggleStates(prev => ({
			...prev,
			[id]: !prev[id]
		}));
		
		// 애니메이션이 완료될 때까지 대기 (300ms)
		setTimeout(async () => {
			try {
				await apiClient.patch(`/admin/address/${id}`);
				
				// 성공 시에는 새로고침하지 않음 (이미 UI가 업데이트되었으므로)
				// 서버 상태와 클라이언트 상태가 동기화되었다고 가정
			} catch (err) {
				console.error('활성화 상태 변경 실패:', err);
				alert('활성화 상태 변경에 실패했습니다.');
				
				// 실패 시에만 상태 되돌리기
				setToggleStates(prev => ({
					...prev,
					[id]: !prev[id]
				}));
			}
		}, 300);
	};

	// 폼 데이터 변경
	const handleFormChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }));
	};

	// 폼 초기화
	const handleReset = () => {
		setFormData({ name: '', department: '', position: '', number: '' });
	};

	// 등록 처리
	const handleSubmit = async () => {
		if (!formData.name || !formData.department) {
			alert('필수 항목을 입력해주세요.');
			return;
		}
		
		try {
			// 서버에 전송할 데이터 (전화번호에서 하이픈 제거)
			const submitData = {
				...formData,
				number: formData.number.replace(/[^\d]/g, '') // 숫자만 추출해서 전송
			};
			
			await apiClient.post('/admin/address', submitData);
			handleReset();
			await fetchContacts(); // 목록 새로고침 (새로운 연락처의 토글 상태도 함께 설정됨)
			alert('등록이 완료되었습니다.');
		} catch (err) {
			console.error('연락처 등록 실패:', err);
			alert('등록에 실패했습니다.');
		}
	};

	// 삭제 버튼 클릭 핸들러 (모달 열기)
	const handleDeleteClick = (id, event) => {
		event.preventDefault();
		event.stopPropagation();
		setDeleteTargetId(id);
		setShowDeleteModal(true);
	};

	// 삭제 확인 핸들러 (실제 삭제 실행)
	const handleDeleteConfirm = async () => {
		try {
			await apiClient.delete(`/admin/address/${deleteTargetId}`);
			setSuccessMessage('삭제가 완료되었습니다.');
			setShowSuccessModal(true);
			await fetchContacts(); // 목록 새로고침
		} catch (err) {
			console.error('연락처 삭제 실패:', err);
			alert('삭제에 실패했습니다.');
		} finally {
			setShowDeleteModal(false);
		}
	};

	// 성공 모달 닫기 핸들러
	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		setDeleteTargetId(null);
	};

	// 수정 버튼 클릭 핸들러 (모달 열기)
	const handleEditClick = (contact, event) => {
		event.preventDefault();
		event.stopPropagation();
		setEditTargetContact(contact);
		setShowEditModal(true);
	};

	// 수정 확인 핸들러 (실제 수정 실행)
	const handleEditConfirm = async (updatedData) => {
		try {
			await apiClient.put('/admin/address', updatedData);
			setSuccessMessage('수정이 완료되었습니다.');
			setShowSuccessModal(true);
			await fetchContacts(); // 목록 새로고침
			setShowEditModal(false);
			setEditTargetContact(null);
		} catch (err) {
			console.error('연락처 수정 실패:', err);
			alert('수정에 실패했습니다.');
		}
	};

	// 에러 상태
	if (error) {
		return (
			<div className="pt-24 flex justify-center items-center h-screen">
				<p className="text-2xl font-semibold text-red-500">{error}</p>
			</div>
		);
	}

	return (
		<div className="pt-24 bg-white min-h-screen">
			{/* 제목 섹션 */}
			<div className="flex justify-center items-center w-full relative gap-2.5 py-8 border-b-2 border-[#e6e6e6]">
				<p className="text-[40px] font-medium text-[#333333]" style={{ fontFamily: 'esamanru, sans-serif' }}>
					알림톡
				</p>
			</div>

			{/* 메인 컨테이너 */}
			<div className="flex justify-center mt-8 px-48">
				<div className="flex w-full max-w-[1536px] gap-6">
					{/* 연락처 목록 섹션 */}
					<div className="flex-1 bg-white rounded-2xl p-6 border border-[#f2f2f2]">
						<p className="text-xl font-medium text-[#666666] mb-6" style={{ fontFamily: 'Pretendard, sans-serif' }}>
							연락처 목록
						</p>
						
						<div className="flex flex-col gap-6">
							{loading ? (
								<div className="space-y-6">
									{[...Array(3)].map((_, index) => (
										<SkeletonContactCard key={index} />
									))}
								</div>
							) : contacts.length === 0 ? (
								<div className="flex justify-center items-center py-12">
									<p className="text-lg text-[#666666]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										등록된 연락처가 없습니다.
									</p>
								</div>
							) : (
								contacts.map((contact) => (
								<div 
									key={contact.id}
									className={`flex items-center gap-[38px] p-6 rounded-2xl transition-all duration-300 ${
										toggleStates[contact.id] 
											? 'bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.08)]'
											: 'bg-[#f2f2f2]'
									}`}
								>
									{/* 토글 버튼 - 향상된 애니메이션 */}
									<button
										onClick={() => handleToggle(contact.id)}
										className={`w-11 h-[22px] rounded-[15px] p-[2px] flex items-center transition-all duration-300 ease-in-out ${
											toggleStates[contact.id] ? 'bg-[#4ab3bc]' : 'bg-[#d1d1d1]'
										} hover:shadow-md`}
									>
										<div 
											className={`w-[18px] h-[18px] bg-white rounded-full transition-all duration-300 ease-in-out transform ${
												toggleStates[contact.id] ? 'translate-x-5 scale-105' : 'translate-x-0 scale-100'
											} shadow-sm`}
										/>
									</button>

									{/* 연락처 정보 */}
									<div className="flex flex-col gap-[5px]">
										<div className="flex items-center gap-2">
											<p className={`text-xl font-medium transition-colors duration-300 ${
												toggleStates[contact.id] ? 'text-[#333333]' : 'text-[#b3b3b3]'
											}`} style={{ fontFamily: 'Pretendard, sans-serif' }}>
												{contact.name}
											</p>
											<p className={`text-xl font-medium transition-colors duration-300 ${
												toggleStates[contact.id] ? 'text-[#666666]' : 'text-[#b3b3b3]'
											}`} style={{ fontFamily: 'Pretendard, sans-serif' }}>
												{contact.number}
											</p>
										</div>
										<div className="flex items-center gap-1">
											<p className="text-base font-medium text-[#b3b3b3] transition-colors duration-300" 
											   style={{ fontFamily: 'Pretendard, sans-serif' }}>
												{contact.position}
											</p>
											<p className="text-base font-medium text-[#b3b3b3] transition-colors duration-300" 
											   style={{ fontFamily: 'Pretendard, sans-serif' }}>
												/
											</p>
											<p className={`text-base font-medium transition-colors duration-300 ${
												toggleStates[contact.id] ? 'text-[#4ab3bc]' : 'text-[#b3b3b3]'
											}`} style={{ fontFamily: 'Pretendard, sans-serif' }}>
												{contact.department}
											</p>
										</div>
									</div>

									{/* 액션 버튼들 */}
									<div className="flex gap-2 ml-auto">
										<button
											onClick={(e) => handleDeleteClick(contact.id, e)}
											className="px-3 py-1.5 rounded border border-[#ee735a] bg-white"
										>
											<p className="text-base font-semibold text-[#ee735a]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
												삭제
											</p>
										</button>
										<button
											onClick={(e) => handleEditClick(contact, e)}
											className="px-3 py-1.5 rounded border border-[#2a9f57] bg-white"
										>
											<p className="text-base font-semibold text-[#2a9f57]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
												수정
											</p>
										</button>
									</div>
								</div>
								))
							)}
						</div>
					</div>

					{/* 구분선 */}
					<div className="w-[2px] bg-[#e6e6e6] mx-4"></div>

					{/* 연락처 등록 섹션 */}
					<div className="w-[872px] bg-white rounded-2xl p-6">
						<p className="text-xl font-medium text-[#666666] mb-6" style={{ fontFamily: 'Pretendard, sans-serif' }}>
							연락처 등록
						</p>
						
						<div className="flex flex-col gap-6">
							{/* 이름 입력 */}
							<div className="flex items-center gap-3 h-14">
								<div className="w-[124px] flex items-center justify-center">
									<p className="text-lg font-semibold text-[#333333]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										이름
									</p>
									<p className="text-lg font-bold text-[#c1272d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										*
									</p>
								</div>
								<input
									type="text"
									value={formData.name}
									onChange={(e) => handleFormChange('name', e.target.value)}
									placeholder="이름"
									className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg"
									style={{ fontFamily: 'Pretendard, sans-serif' }}
								/>
							</div>

							{/* 소속 입력 */}
							<div className="flex items-center gap-3 h-14">
								<div className="w-[124px] flex items-center justify-center">
									<p className="text-lg font-semibold text-[#333333]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										소속 (회사)
									</p>
									<p className="text-lg font-bold text-[#c1272d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										*
									</p>
								</div>
								<input
									type="text"
									value={formData.department}
									onChange={(e) => handleFormChange('department', e.target.value)}
									placeholder="소속 (회사)"
									className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg"
									style={{ fontFamily: 'Pretendard, sans-serif' }}
								/>
							</div>

							{/* 직급 입력 */}
							<div className="flex items-center gap-3 h-14">
								<div className="w-[124px] flex items-center justify-center">
									<p className="text-lg font-semibold text-[#333333]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										직급
									</p>
								</div>
								<input
									type="text"
									value={formData.position}
									onChange={(e) => handleFormChange('position', e.target.value)}
									placeholder="직급"
									className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg"
									style={{ fontFamily: 'Pretendard, sans-serif' }}
								/>
							</div>

							{/* 전화번호 입력 */}
							<div className="flex items-center gap-3 h-14">
								<div className="w-[124px] flex items-center justify-center">
									<p className="text-lg font-semibold text-[#333333]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
										전화번호
									</p>
								</div>
								<input
									type="text"
									value={formData.number}
									onChange={(e) => handlePhoneChange(e.target.value)}
									onKeyDown={(e) => {
										// 허용되는 키: 숫자, 백스페이스, 삭제, 탭, 엔터, 화살표키
										const allowedKeys = [
											'Backspace', 'Delete', 'Tab', 'Enter',
											'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
											'Home', 'End'
										];
										
										// 숫자키 (0-9) 또는 허용된 특수키가 아니면 입력 방지
										if (!(/^[0-9]$/.test(e.key) || allowedKeys.includes(e.key))) {
											e.preventDefault();
										}
									}}
									onPaste={(e) => {
										// 붙여넣기 시에도 숫자만 허용
										e.preventDefault();
										const pasteData = e.clipboardData.getData('text');
										const numbersOnly = pasteData.replace(/[^\d]/g, '');
										if (numbersOnly) {
											handlePhoneChange(numbersOnly);
										}
									}}
									placeholder="010-1234-5678"
									maxLength="13"
									className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg"
									style={{ fontFamily: 'Pretendard, sans-serif' }}
								/>
							</div>
						</div>

						{/* 액션 버튼들 */}
						<div className="flex justify-end gap-6 mt-8">
							<button
								onClick={handleReset}
								className="px-[46px] py-3 rounded border border-[#b3b3b3] bg-white"
							>
								<p className="text-base font-semibold text-[#b3b3b3]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
									초기화
								</p>
							</button>
							<button
								onClick={handleSubmit}
								className="px-[46px] py-3 rounded bg-[#4ab3bc] text-white"
							>
								<p className="text-base font-semibold" style={{ fontFamily: 'Pretendard, sans-serif' }}>
									등록
								</p>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* 삭제 확인 모달 */}
			<DeleteConfirmModal
				isOpen={showDeleteModal}
				onClose={() => setShowDeleteModal(false)}
				onConfirm={handleDeleteConfirm}
			/>

			{/* 성공 모달 */}
			<SuccessModal
				isOpen={showSuccessModal}
				onClose={handleSuccessModalClose}
				message={successMessage}
			/>

			{/* 수정 모달 */}
			<EditContactModal
				isOpen={showEditModal}
				onClose={() => {
					setShowEditModal(false);
					setEditTargetContact(null);
				}}
				onConfirm={handleEditConfirm}
				contactData={editTargetContact}
			/>
		</div>
	);
};

export default AlimTalkListPage;