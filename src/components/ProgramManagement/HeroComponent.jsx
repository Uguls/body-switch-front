import React from 'react';
import { Link } from 'react-router-dom';

const CapsuleImageSection = () => {
	return (
		<div
			className="relative overflow-hidden min-h-screen"
			style={{ background: 'linear-gradient(135deg, #e0f7fa 20%, #ffffff 100%)' }}
		>
			{/* 도입문의 버튼 */}
			<Link 
				to="/introduction" 
				className="flex justify-center items-center w-[220px] absolute left-48 top-[653px] gap-2.5 px-6 py-4 rounded-[50px] bg-[#4ab3bc] hover:bg-[#3a9aaa] transition-colors cursor-pointer"
			>
				<p className="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-white">
					도입문의 →
				</p>
			</Link>

			{/* 해시태그 텍스트 */}
			<p className="absolute left-48 top-[531px] opacity-70 text-2xl text-left text-[#2f2f2f]">
        <span className="opacity-70 text-2xl text-left text-[#2f2f2f]">
          #회원관리 #입장관리 #일정관리 #수강권발급
        </span>
				<br />
				<span className="opacity-70 text-2xl text-left text-[#2f2f2f]">
          #커뮤니티_관리 #임직원관리 #매장관리 #매출관리
        </span>
			</p>

			{/* 캡슐 이미지 컨테이너 - 화면 우측상단에 고정 */}
			<div
				className="absolute top-0 right-0 overflow-hidden z-10"
				style={{
					width: '650px',
					height: '350px',
					borderRadius: '200px',
					transform: 'rotate(-45deg) scale(2.3)',
					top: '240px',
					right: '100px',
					boxShadow: '-5px 5px 20px rgba(0, 0, 0, 0.2)'
				}}
			>
				<img
					src="/src/assets/ProgramManagement/hero_image.png"
					alt="바디스위치 이미지"
					className="w-full h-full"
					style={{
						transform: 'rotate(45deg) translateX(-25px) translateY(30px)',
						transformOrigin: 'center',
						scale: '1.5',
						objectFit: 'contain',  // cover → contain으로 변경!
						objectPosition: 'center center'
					}}
				/>
			</div>

			{/* 메인 텍스트 */}
			<div className="flex flex-col justify-start items-start absolute left-48 top-[295px] gap-4">
				<p className="flex-grow-0 flex-shrink-0 text-[56px] text-left text-[#333]">
					더 쉬운 관리, 더 큰 성공
				</p>
				<p className="flex-grow-0 flex-shrink-0 text-[80px] font-medium text-left text-[#333]">
					바디스위치
				</p>
			</div>
		</div>
	);
};

export default CapsuleImageSection;