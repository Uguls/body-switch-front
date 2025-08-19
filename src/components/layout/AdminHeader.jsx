import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogo } from '../ui/index.jsx';
import { logout } from '../../api/api.js';

const AdminHeader = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// 로그아웃 처리 함수
	const handleLogout = async () => {
		try {
			await logout(); // api.js의 logout 함수 호출
			alert('성공적으로 로그아웃되었습니다.');
			navigate('/bodyswitch-admin/'); // 로그아웃 후 로그인 페이지로 이동
		} catch (error) {
			console.error('로그아웃 실패:', error);
			alert('로그아웃 처리 중 오류가 발생했습니다.');
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-4 md:py-6 bg-white/60 backdrop-blur-[20px]">
			{/* 로고 클릭 시 관리자 대시보드로 이동하도록 설정 */}
			<Link to="/bodyswitch-admin/inquiries">
				<BrandLogo size="medium" />
			</Link>

			{/* 네비게이션 메뉴 */}
			<nav className="flex items-center gap-4 lg:gap-6">
				<Link
					to="/bodyswitch-admin/inquiries"
					className={`py-3 border-b-2 ${location.pathname.startsWith('/bodyswitch-admin/inquiries') ? 'border-[#4ab3bc]' : 'border-transparent'}`}
				>
					<p className={`text-sm lg:text-base font-bold ${location.pathname.startsWith('/bodyswitch-admin/inquiries') ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>
						문의내역
					</p>
				</Link>
				<Link
					to="/bodyswitch-admin/notices"
					className={`py-3 border-b-2 ${location.pathname.startsWith('/bodyswitch-admin/notices') ? 'border-[#4ab3bc]' : 'border-transparent'}`}
				>
					<p className={`text-sm lg:text-base font-bold ${location.pathname.startsWith('/bodyswitch-admin/notices') ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>
						공지사항
					</p>
				</Link>
				<Link
					to="/bodyswitch-admin/events"
					className={`py-3 border-b-2 ${location.pathname.startsWith('/bodyswitch-admin/events') ? 'border-[#4ab3bc]' : 'border-transparent'}`}
				>
					<p className={`text-sm lg:text-base font-bold ${location.pathname.startsWith('/bodyswitch-admin/events') ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>
						이벤트
					</p>
				</Link>

				{/* 구분선 */}
				<div className="text-gray-300">|</div>

				{/* 로그아웃 버튼 */}
				<button
					onClick={handleLogout}
					className="py-3 text-sm lg:text-base font-bold text-gray-500 hover:text-black transition-colors"
				>
					로그아웃
				</button>
			</nav>
		</header>
	);
};

export default AdminHeader;
