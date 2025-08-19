import React, { useState, useEffect } from 'react';
// 'api.js' 파일의 경로는 실제 프로젝트 구조에 맞게 조정해주세요.
import { login } from '../api/api.js';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
	const [loginId, setLoginId] = useState('');
	const [password, setPassword] = useState('');
	const [isRememberId, setIsRememberId] = useState(false);
	const [error, setError] = useState('');

	const navigate = useNavigate(); // 페이지 이동 함수

	// 컴포넌트가 처음 렌더링될 때 저장된 아이디가 있는지 확인
	useEffect(() => {
		const savedId = localStorage.getItem('savedLoginId');
		if (savedId) {
			setLoginId(savedId);
			setIsRememberId(true);
		}
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault(); // form의 기본 제출 동작 방지
		setError(''); // 이전 에러 메시지 초기화

		if (!loginId || !password) {
			setError('아이디와 비밀번호를 모두 입력해주세요.');
			return;
		}

		try {
			const data = await login(loginId, password);

			// 아이디 저장 로직
			if (isRememberId) {
				localStorage.setItem('savedLoginId', loginId);
			} else {
				localStorage.removeItem('savedLoginId');
			}

			console.log('로그인 성공:', data);
			alert(`${data.username}님 환영합니다!`);

			navigate('/bodyswitch-admin/inquiries');

		} catch (err) {
			setError(err.message);
			console.error('로그인 실패:', err);
		}
	};

	const isButtonDisabled = !loginId || !password;

	return (
		<div className="w-full h-screen relative overflow-hidden bg-white flex">
			{/* 왼쪽 파란색 영역: 슬로건은 상단, 로고는 중앙에 위치 */}
			<div className="w-[50%] h-full bg-[#4ab3bc] relative flex justify-center items-center p-8">
				<img
					src="/src/assets/admin/관리자 페이지_상단 슬로건.png"
					alt="더 쉬운 관리, 더 큰 성공"
					className="absolute top-0 left-0 right-0 mx-auto w-auto h-auto max-w-[80%]"
				/>
				<img
					src="/src/assets/logo.png"
					alt="바디스위치 로고"
					className="w-auto h-auto max-w-[60%]"
				/>
			</div>

			{/* 오른쪽 로그인 폼 영역 */}
			<div className="flex-1 flex justify-center items-center">
				<div className="flex flex-col justify-start items-start w-full max-w-[576px] gap-8 px-4">
					<p className="self-stretch text-[42px] font-bold text-left text-[#333]">
						바디스위치 관리자
					</p>
					<hr className="w-full border-t border-[#E6E6E6]" />

					<form onSubmit={handleLogin} className="w-full flex flex-col gap-8">
						<div className="flex flex-col justify-start items-start self-stretch relative gap-3">
							<label className="self-stretch text-2xl font-semibold text-left text-[#333]">
								아이디
							</label>
							<input
								type="text"
								value={loginId}
								onChange={(e) => setLoginId(e.target.value)}
								placeholder="아이디를 입력하세요"
								className="w-full px-5 py-4 rounded-lg bg-white border border-[#b3b3b3] text-xl text-[#333] focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]"
							/>
						</div>

						<div className="flex flex-col justify-start items-start self-stretch relative gap-3">
							<label className="self-stretch text-2xl font-semibold text-left text-[#333]">
								비밀번호
							</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="비밀번호를 입력하세요"
								className="w-full px-5 py-4 rounded-lg bg-white border border-[#b3b3b3] text-xl text-[#333] focus:outline-none focus:ring-2 focus:ring-[#4ab3bc]"
							/>
						</div>

						<div
							className="flex justify-start items-center relative gap-[17px] cursor-pointer select-none"
							onClick={() => setIsRememberId(!isRememberId)}
						>
							<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
								<rect
									x="1"
									y="1.5"
									width="18"
									height="18"
									rx="2"
									fill={isRememberId ? '#4ab3bc' : 'white'}
									stroke={isRememberId ? '#4ab3bc' : '#CCCCCC'}
									strokeWidth="2"
								/>
								{isRememberId && (
									<path
										d="M15.6203 7.55554L8.88889 14.287L5.33333 10.7315L6.44444 9.62036L8.88889 12.0648L14.5093 6.44443L15.6203 7.55554Z"
										fill="white"
									/>
								)}
							</svg>
							<p className="text-xl text-left text-black">아이디 저장</p>
						</div>

						{/* 에러 메시지 표시 */}
						{error && <p className="text-red-500 text-lg">{error}</p>}

						<button
							type="submit"
							disabled={isButtonDisabled}
							className={`w-full h-[60px] rounded-lg text-2xl font-bold text-white transition-colors duration-300 ${isButtonDisabled ? 'bg-[#ccc] cursor-not-allowed' : 'bg-[#4ab3bc] hover:bg-[#3a9a9a]'}`}
						>
							로그인
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminLoginPage;
