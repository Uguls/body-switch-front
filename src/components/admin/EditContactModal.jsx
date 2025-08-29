import React, { useState, useEffect } from 'react';

const EditContactModal = ({ isOpen, onClose, onConfirm, contactData }) => {
	const [formData, setFormData] = useState({
		name: '',
		department: '',
		position: '',
		number: ''
	});

	// 전화번호 포맷팅 함수
	const formatPhoneNumber = (value) => {
		const numbers = value.replace(/[^\d]/g, '');
		const limitedNumbers = numbers.slice(0, 11);
		
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

	// contactData 변경시 폼 데이터 업데이트
	useEffect(() => {
		if (contactData) {
			setFormData({
				name: contactData.name || '',
				department: contactData.department || '',
				position: contactData.position || '',
				number: formatPhoneNumber(contactData.number || '')
			});
		}
	}, [contactData]);

	// 폼 데이터 변경
	const handleFormChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }));
	};

	// 수정 완료 처리
	const handleSubmit = () => {
		if (!formData.name.trim() || !formData.department.trim()) {
			alert('필수 항목을 입력해주세요.');
			return;
		}

		// 서버 전송용 데이터 (전화번호에서 하이픈 제거)
		const submitData = {
			id: contactData.id,
			name: formData.name.trim(),
			department: formData.department.trim(),
			position: formData.position.trim(),
			number: formData.number.replace(/[^\d]/g, '')
		};

		onConfirm(submitData);
	};

	// ESC 키로 모달 닫기
	useEffect(() => {
		const handleEscKey = (e) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscKey);
			document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
		}

		return () => {
			document.removeEventListener('keydown', handleEscKey);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	return (
		<div 
			className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ease-out ${
				isOpen 
					? 'opacity-100 visible bg-black/50' 
					: 'opacity-0 invisible bg-black/0'
			}`}
		>
			<div 
				className={`bg-white rounded-2xl w-[900px] max-w-[90vw] max-h-[90vh] overflow-hidden transition-all duration-300 ease-out ${
					isOpen 
						? 'scale-100 opacity-100 translate-y-0' 
						: 'scale-95 opacity-0 translate-y-4'
				}`}
			>
				{/* 헤더 */}
				<div className="bg-neutral-800 flex items-center justify-between px-8 py-4 h-14">
					<h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
						연락처 정보 수정
					</h2>
					<button
						onClick={onClose}
						className="text-white hover:text-gray-300 transition-colors w-8 h-8 flex items-center justify-center"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</div>

				{/* 폼 내용 */}
				<div className="p-6 space-y-6">
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
							className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg text-[#333333]"
							style={{ fontFamily: 'Pretendard, sans-serif' }}
						/>
					</div>

					{/* 소속 (회사) 입력 */}
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
							className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg text-[#333333]"
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
							className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg text-[#333333]"
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
								const allowedKeys = [
									'Backspace', 'Delete', 'Tab', 'Enter',
									'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
									'Home', 'End'
								];
								
								if (!(/^[0-9]$/.test(e.key) || allowedKeys.includes(e.key))) {
									e.preventDefault();
								}
							}}
							onPaste={(e) => {
								e.preventDefault();
								const pasteData = e.clipboardData.getData('text');
								const numbersOnly = pasteData.replace(/[^\d]/g, '');
								if (numbersOnly) {
									handlePhoneChange(numbersOnly);
								}
							}}
							placeholder="010-1234-5678"
							maxLength="13"
							className="flex-1 h-14 px-6 py-4 bg-white border border-[#999999] rounded-lg text-lg text-[#333333]"
							style={{ fontFamily: 'Pretendard, sans-serif' }}
						/>
					</div>
				</div>

				{/* 버튼 영역 */}
				<div className="p-6 pt-0 flex justify-end">
					<button
						onClick={handleSubmit}
						className="bg-[#4ab3bc] text-white px-[46px] py-3 rounded font-semibold text-base hover:bg-[#3a9ca5] transition-colors"
						style={{ fontFamily: 'Pretendard, sans-serif' }}
					>
						수정완료
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditContactModal;