import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 문의 안내 컴포넌트
const InquiryGuide = () => {
	const PhoneIcon = () => (
		<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.70234 12.95L7.85234 14.8C7.46234 15.19 6.84234 15.19 6.44234 14.81C6.33234 14.7 6.22234 14.6 6.11234 14.49C5.08234 13.45 4.15234 12.36 3.32234 11.22C2.50234 10.08 1.84234 8.94 1.36234 7.81C0.892344 6.67 0.652344 5.58 0.652344 4.54C0.652344 3.86 0.772344 3.21 1.01234 2.61C1.25234 2 1.63234 1.44 2.16234 0.94C2.80234 0.31 3.50234 0 4.24234 0C4.52234 0 4.80234 0.0600001 5.05234 0.18C5.31234 0.3 5.54234 0.48 5.72234 0.74L8.04234 4.01C8.22234 4.26 8.35234 4.49 8.44234 4.71C8.53234 4.92 8.58234 5.13 8.58234 5.32C8.58234 5.56 8.51234 5.8 8.37234 6.03C8.24234 6.26 8.05234 6.5 7.81234 6.74L7.05234 7.53C6.94234 7.64 6.89234 7.77 6.89234 7.93C6.89234 8.01 6.90234 8.08 6.92234 8.16C6.95234 8.24 6.98234 8.3 7.00234 8.36C7.18234 8.69 7.49234 9.12 7.93234 9.64C8.38234 10.16 8.86234 10.69 9.38234 11.22C9.48234 11.32 9.59234 11.42 9.69234 11.52C10.0923 11.91 10.1023 12.55 9.70234 12.95ZM20.6219 16.3291C20.6219 16.6091 20.5719 16.8991 20.4719 17.1791C20.4419 17.2591 20.4119 17.3391 20.3719 17.4191C20.2019 17.7791 19.9819 18.1191 19.6919 18.4391C19.2019 18.9791 18.6619 19.3691 18.0519 19.6191C18.0419 19.6191 18.0319 19.6291 18.0219 19.6291C17.4319 19.8691 16.7919 19.9991 16.1019 19.9991C15.0819 19.9991 13.9919 19.7591 12.8419 19.2691C11.6919 18.7791 10.5419 18.1191 9.40194 17.2891C9.01194 16.9991 8.62195 16.7091 8.25195 16.3991L11.5219 13.1291C11.8019 13.3391 12.0519 13.4991 12.2619 13.6091C12.3119 13.6291 12.3719 13.6591 12.4419 13.6891C12.5219 13.7191 12.6019 13.7291 12.6919 13.7291C12.8619 13.7291 12.9919 13.6691 13.1019 13.5591L13.8619 12.8091C14.1119 12.5591 14.3519 12.3691 14.5819 12.2491C14.8119 12.1091 15.0419 12.0391 15.2919 12.0391C15.4819 12.0391 15.6819 12.0791 15.9019 12.1691C16.1219 12.2591 16.3519 12.3891 16.6019 12.5591L19.9119 14.9091C20.1719 15.0891 20.3519 15.2991 20.4619 15.5491C20.5619 15.7991 20.6219 16.0491 20.6219 16.3291Z" fill="white"></path>
		</svg>
	);
	const MailIcon = () => (
		<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.6523 0H5.65234C2.65234 0 0.652344 1.5 0.652344 5V12C0.652344 15.5 2.65234 17 5.65234 17H15.6523C18.6523 17 20.6523 15.5 20.6523 12V5C20.6523 1.5 18.6523 0 15.6523 0ZM16.1223 6.09L12.9923 8.59C12.3323 9.12 11.4923 9.38 10.6523 9.38C9.81234 9.38 8.96234 9.12 8.31234 8.59L5.18234 6.09C4.86234 5.83 4.81234 5.35 5.06234 5.03C5.32234 4.71 5.79234 4.65 6.11234 4.91L9.24234 7.41C10.0023 8.02 11.2923 8.02 12.0523 7.41L15.1823 4.91C15.5023 4.65 15.9823 4.7 16.2323 5.03C16.4923 5.35 16.4423 5.83 16.1223 6.09Z" fill="white"></path>
		</svg>
	);

	return (
		<div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8" style={{ filter: "drop-shadow(0px 0px 20px rgba(0,0,0,0.2))" }}>
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

// 입력 필드 컴포넌트
const FormInput = ({ label, name, value, onChange, placeholder, required = false, error }) => (
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
				onChange={onChange}
				placeholder={placeholder}
				// FIX: Added text-gray-900 to make input text visible
				className={`w-full px-4 py-3 rounded-md bg-white border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]`}
			/>
		</div>
		{error && <p className="text-red-500 text-sm mt-1 md:ml-36">{error}</p>}
	</div>
);


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
				await axios.post('http://localhost:8080/inquiries', formData);
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
					preserveAspectRatio="xMidYMin slice"
				>
					<path
						d="M0 0L1920 0L1920 827C1617.28 730.544 1294.73 678.485 960.001 678.484C625.276 678.484 302.722 730.544 0 827L0 0Z"
						fill="#108389"
					></path>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center pb-20 md:pb-32 lg:pb-48">
					<p className="text-4xl md:text-5xl font-bold text-white text-center px-4">
						“ 바디스위치의 궁금한 점을 보내주세요 ”
					</p>
				</div>
			</div>

			{/* Main form section */}
			<div className="w-full max-w-4xl mx-auto relative z-10 -mt-48 md:-mt-56 lg:-mt-64 px-4">
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
							<textarea
								id="content"
								name="content"
								value={formData.content}
								onChange={handleChange}
								placeholder="내용을 입력하여 주세요 ex) 도입신청에 필요한 서류가 있을까요?"
								rows="6"
								// FIX: Added text-gray-900 to make textarea text visible
								className={`w-full px-4 py-3 rounded-md bg-white border ${errors.content ? 'border-red-500' : 'border-gray-300'} text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]`}
							></textarea>
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
