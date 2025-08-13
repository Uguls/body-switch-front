import React, { useState } from 'react';

const InquiryPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		phone: '',
		email: '',
		inquiryType: 'individual',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: 실제 문의 제출 로직 구현
		alert('문의가 제출되었습니다. 담당자가 확인 후 연락드리겠습니다.');
		console.log('문의 데이터:', formData);
	};

	return (
		<div className="min-h-screen bg-white pt-24">
			<div className="max-w-4xl mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold text-gray-800 mb-6">
						도입 문의
					</h1>
					<p className="text-xl text-gray-600">
						BODY 서비스 도입에 대한 문의사항을 남겨주세요
					</p>
				</div>

				<form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								이름 *
							</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ab3bc] focus:border-transparent"
								placeholder="이름을 입력해주세요"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								회사/기관명
							</label>
							<input
								type="text"
								name="company"
								value={formData.company}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ab3bc] focus:border-transparent"
								placeholder="회사/기관명을 입력해주세요"
							/>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								연락처 *
							</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ab3bc] focus:border-transparent"
								placeholder="010-0000-0000"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								이메일 *
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ab3bc] focus:border-transparent"
								placeholder="example@email.com"
							/>
						</div>
					</div>

					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							문의 유형 *
						</label>
						<div className="flex gap-4">
							<label className="flex items-center">
								<input
									type="radio"
									name="inquiryType"
									value="individual"
									checked={formData.inquiryType === 'individual'}
									onChange={handleChange}
									className="mr-2 text-[#4ab3bc] focus:ring-[#4ab3bc]"
								/>
								개인 회원
							</label>
							<label className="flex items-center">
								<input
									type="radio"
									name="inquiryType"
									value="business"
									checked={formData.inquiryType === 'business'}
									onChange={handleChange}
									className="mr-2 text-[#4ab3bc] focus:ring-[#4ab3bc]"
								/>
								기업/단체
							</label>
						</div>
					</div>

					<div className="mb-8">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							문의 내용 *
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows="6"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ab3bc] focus:border-transparent resize-none"
							placeholder="도입하고자 하는 서비스나 문의사항을 상세히 작성해주세요"
						/>
					</div>

					<div className="text-center">
						<button
							type="submit"
							className="bg-[#4ab3bc] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#3a9aaa] transition-colors"
						>
							문의 제출
						</button>
					</div>
				</form>

				<div className="mt-12 text-center text-gray-600">
					<p className="mb-2">빠른 상담을 원하시면</p>
					<p className="text-xl font-bold text-[#4ab3bc]">1588-0000</p>
					<p>평일 09:00 ~ 18:00 (주말, 공휴일 제외)</p>
				</div>
			</div>
		</div>
	);
};

export default InquiryPage;