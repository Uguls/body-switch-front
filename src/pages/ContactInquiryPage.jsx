import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import phoneIcon from '../assets/svgs/phone-icon.svg';
import mailIcon from '../assets/svgs/mail-icon.svg';

// 문의 안내 컴포넌트
const InquiryGuide = () => {
	const PhoneIcon = () => (
		<img src={phoneIcon} alt="전화" width="21" height="20" />
	);
	const MailIcon = () => (
		<img src={mailIcon} alt="이메일" width="21" height="17" />
	);

	return (
		<div className="w-[104%] bg-white rounded-2xl shadow-lg p-6 md:p-8" style={{ filter: "drop-shadow(0px 0px 20px rgba(0,0,0,0.2))" }}>
			<div className="flex flex-col md:flex-row items-center gap-5">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-3">
						<div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#4ab3bc] flex-shrink-0"><PhoneIcon /></div>
						<p className="text-lg font-bold text-neutral-700">02-2295-8220</p>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#4ab3bc] flex-shrink-0"><MailIcon /></div>
						<p className="text-lg font-bold text-neutral-700">bodyswitch@naver.com</p>
					</div>
				</div>
				<div className="w-full md:w-px md:h-28 bg-gray-200 my-4 md:my-0"></div>
				<div className="flex flex-col gap-2 text-center md:text-left">
					<p className="text-2xl font-bold text-neutral-800">바디스위치 사용 방법이 궁금해요</p>
					<p className="text-base text-neutral-700 leading-relaxed">
						바디스위치에 대해 궁금한 점이나 신청여부를 문의할 수 있습니다<br />
						아래 서식을 통해 문의주시면 담당자가 친절히 응대 드리도록 하겠습니다<br />
						문의사항은 좌측 연락처로 문의 주시면 더욱 빠른 상담이 가능합니다
					</p>
				</div>
			</div>
		</div>
	);
};

// 휴대폰 번호 포맷팅 함수 (010-0000-0000)
const formatPhoneNumber = (value) => {
	const numbers = value.replace(/[^\d]/g, '');
	if (numbers.length <= 3) {
		return numbers;
	} else if (numbers.length <= 7) {
		return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
	} else {
		return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
	}
};

// 일반 전화번호 포맷팅 함수 (02-0000-0000 또는 031-000-0000)
const formatTelNumber = (value) => {
	const numbers = value.replace(/[^\d]/g, '');
	if (numbers.length <= 2) {
		return numbers;
	} else if (numbers.startsWith('02')) {
		// 서울 지역번호 (02)
		if (numbers.length <= 6) {
			return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
		} else {
			return `${numbers.slice(0, 2)}-${numbers.slice(2, 6)}-${numbers.slice(6, 10)}`;
		}
	} else {
		// 기타 지역번호 (031, 032 등)
		if (numbers.length <= 3) {
			return numbers;
		} else if (numbers.length <= 6) {
			return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
		} else {
			return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
		}
	}
};

// 입력 필드 컴포넌트
const FormInput = ({ label, name, value, onChange, placeholder, required = false, error, type = 'text' }) => {
	const handleInputChange = (e) => {
		let formattedValue = e.target.value;
		
		if (name === 'phoneNumber') {
			formattedValue = formatPhoneNumber(e.target.value);
		} else if (name === 'number') {
			formattedValue = formatTelNumber(e.target.value);
		}
		
		onChange({
			...e,
			target: {
				...e.target,
				name,
				value: formattedValue
			}
		});
	};

	return (
		<div className="w-full">
			<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
				<label htmlFor={name} className="flex-shrink-0 w-full md:w-32 text-left text-base font-medium text-neutral-700">
					{label}
					{required && <span className="text-red-500 ml-1">*</span>}
				</label>
				<input
					type="text"
					id={name}
					name={name}
					value={value}
					onChange={handleInputChange}
					placeholder={placeholder}
					maxLength={name === 'phoneNumber' ? 13 : name === 'number' ? 13 : undefined}
					// FIX: Added text-gray-900 to make input text visible
					className={`w-full px-4 py-3 rounded-md bg-white border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]`}
				/>
			</div>
			{error && <p className="text-red-500 text-sm mt-1 md:ml-36">{error}</p>}
		</div>
	);
};


const InquiryPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		position: '',
		number: '',
		phoneNumber: '',
		email: '',
		content: ''
	});
	const [isAgreed, setIsAgreed] = useState(false);
	const [errors, setErrors] = useState({});

	// FIX: Added placeholder text based on the provided image
	const formFields = [
		{ name: 'name', label: '이름', placeholder: '이름', required: true },
		{ name: 'company', label: '소속 (회사)', placeholder: '소속 (회사)', required: true },
		{ name: 'position', label: '직급', placeholder: '직급', required: false },
		{ name: 'number', label: '전화번호', placeholder: '전화번호', required: false },
		{ name: 'phoneNumber', label: '휴대폰 번호', placeholder: '휴대폰 번호', required: true },
		{ name: 'email', label: '이메일 주소', placeholder: '이메일 주소', required: true, type: 'email' },
	];

	const validate = () => {
		let newErrors = {};
		formFields.forEach(field => {
			if (field.required && !formData[field.name].trim()) {
				newErrors[field.name] = '필수 입력 항목입니다.';
			}
		});

		if (!formData.content.trim()) {
			newErrors.content = '필수 입력 항목입니다.';
		}

		if (formData.email && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
			if (!newErrors.email) newErrors.email = '유효한 이메일 주소를 입력해주세요.';
		}

		if (!isAgreed) {
			newErrors.agreement = '개인정보 수집 및 이용에 동의해야 합니다.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			try {
				// NOTE: The endpoint URL should be configured for your environment.
				// Using a placeholder for the example.
				await axios.post(`${import.meta.env.VITE_API_BASE_URL}/inquiries`, formData);
				alert('문의가 성공적으로 접수되었습니다. 감사합니다.');
				navigate('/');
			} catch (err) {
				console.error('문의 제출 실패:', err);
				alert('문의 제출에 실패했습니다. 다시 시도해 주세요.');
			}
		} else {
			// Focus on the first field with an error
			const firstErrorKey = Object.keys(errors).find(key => errors[key]);
			if (firstErrorKey) {
				// A short delay can help ensure the element is available to focus
				setTimeout(() => {
					const firstErrorField = document.querySelector(`[name=${firstErrorKey}]`);
					if (firstErrorField) {
						firstErrorField.focus();
					}
				}, 0);
			}
			alert('입력 내용을 다시 확인해주세요.');
		}
	};

	return (
		<div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
			{/* Top background section */}
			<div className="w-full relative">
				<svg
					width="100%"
					viewBox="0 0 1920 827"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					className="w-full block"
					style={{ 
						height: 'clamp(350px, 50vh, 500px)',
						maxHeight: '60vh'
					}}
				>
					<path
						d="M0 0L1920 0L1920 827C1617.28 730.544 1294.73 678.485 960.001 678.484C625.276 678.484 302.722 730.544 0 827L0 0Z"
						fill="#108389"
					></path>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center px-4">
					<p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
						" 바디스위치의 궁금한 점을 보내주세요 "
					</p>
				</div>
			</div>

			{/* Main form section */}
			<div className="w-full max-w-4xl mx-auto relative z-10 -mt-24 sm:-mt-32 md:-mt-40 px-4">
				{/* Top info area (InquiryGuide component) */}
				<InquiryGuide />

				{/* Bottom form area */}
				<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 mt-10">
					{formFields.map(field => (
						<FormInput
							key={field.name}
							{...field}
							value={formData[field.name]}
							onChange={handleChange}
							error={errors[field.name]}
						/>
					))}

					<div className="w-full">
						<div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
							<label htmlFor="content" className="flex-shrink-0 w-full md:w-32 text-left text-base font-medium text-neutral-700 pt-3">
								문의 내용
								<span className="text-red-500 ml-1">*</span>
							</label>
							<div className="w-full relative">
								<textarea
									id="content"
									name="content"
									value={formData.content}
									onChange={handleChange}
									placeholder="내용을 입력하여 주세요 ex) 도입신청에 필요한 서류가 있을까요?"
									rows="6"
									maxLength="1000"
									// FIX: Added text-gray-900 to make textarea text visible
									className={`w-full px-4 py-3 rounded-md bg-white border ${errors.content ? 'border-red-500' : 'border-gray-300'} text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]`}
								></textarea>
								<div className="absolute bottom-2 right-2 text-sm text-gray-500">
									{formData.content.length}/1000
								</div>
							</div>
						</div>
						{errors.content && <p className="text-red-500 text-sm mt-1 md:ml-36">{errors.content}</p>}
					</div>

					<div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 mt-4">
						<div className="hidden md:block flex-shrink-0 w-32"></div> {/* Label placeholder */}
						<div className="w-full">
							<div className="bg-gray-100 p-4 rounded-md border border-gray-200">
								<div className="flex items-center">
									<input
										type="checkbox"
										id="agreement"
										checked={isAgreed}
										onChange={(e) => setIsAgreed(e.target.checked)}
										className="w-5 h-5 text-[#4ab3bc] bg-gray-100 border-gray-300 rounded focus:ring-[#4ab3bc] focus:ring-2"
									/>
									<label htmlFor="agreement" className="ml-3 text-sm text-neutral-700 cursor-pointer">
										개인정보 수집 및 이용 안내에 동의합니다.
									</label>
								</div>
								<div className="mt-3 text-xs text-gray-500 leading-relaxed">
									<span className="font-bold">개인정보 수집 이용 안내</span><br />
									문의에 대한 처리 및 답변을 위해 성명, 연락처 정보가 수집되며, 수집된 정보는 3년간 보관합니다.
									이에 동의하지 않을 경우 문의/제안/신고 등록이 불가하며, 선택 항목은 입력하지 않더라도 서비스 이용에 제한을 두지 않습니다.
								</div>
							</div>
							{errors.agreement && <p className="text-red-500 text-sm mt-2">{errors.agreement}</p>}
						</div>
					</div>

					<div className="w-full flex justify-center mt-8">
						<button
							type="submit"
							className="w-full md:w-60 px-6 py-3 rounded-full bg-[#4ab3bc] text-xl font-bold text-white transition-all hover:bg-[#3d919a] focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#4ab3bc]/50"
						>
							문의하기
						</button>
					</div>
				</form>
			</div>
			<div className="h-40"></div>
		</div>
	);
};

export default InquiryPage;
