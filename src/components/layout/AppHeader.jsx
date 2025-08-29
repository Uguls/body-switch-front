import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from '../ui/index.jsx';
import menuIcon from '../../assets/svgs/menu-icon.svg';
import closeIcon from '../../assets/svgs/close-icon.svg';


// 햄버거 메뉴 아이콘 SVG
const MenuIcon = ({ className }) => (
	<img src={menuIcon} alt="메뉴" className={className} />
);

// 닫기 아이콘 SVG
const CloseIcon = ({ className }) => (
	<img src={closeIcon} alt="닫기" className={className} />
);

const AppHeader = () => {
	const location = useLocation();
	// 모바일 메뉴 표시 여부를 관리하는 상태
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// 네비게이션 링크 데이터를 배열로 관리하여 코드 반복을 줄입니다.
	const navLinks = [
		{ path: '/', label: '관리프로그램' },
		{ path: '/member-app', label: '회원 ∙ 강사앱' },
		{ path: '/event', label: '이벤트' },
		{ path: '/notice', label: '공지사항' },
		{ path: '/about', label: '회사소개' },
	];

	// 모바일 메뉴가 열렸을 때 배경 스크롤을 막는 효과
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		// 컴포넌트가 언마운트될 때 스타일을 초기화합니다.
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-999 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-4 md:py-6 bg-white/60 backdrop-blur-[20px] border-b border-gray-200/50">
				<Link to="/" onClick={() => setIsMenuOpen(false)}>
					<BrandLogo size="medium" />
				</Link>

				{/* 데스크탑 네비게이션 메뉴 */}
				<nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-16">
					{navLinks.map((link) => {
						const isActive = link.path === '/' ? location.pathname === link.path : location.pathname.startsWith(link.path);
						return (
							<Link
								key={link.path}
								to={link.path}
								className={`py-3 border-b-2 transition-colors duration-300 ${isActive ? 'border-[#4ab3bc]' : 'border-transparent hover:border-[#4ab3bc]/50'}`}
								style={{fontFamily: 'Pretendard-Regular, sans-serif'}}
							>
								<p className={`text-sm lg:text-base xl:text-lg font-bold transition-colors duration-300 ${isActive ? 'text-[#4ab3bc]' : 'text-[#333]'}`}>
									{link.label}
								</p>
							</Link>
						);
					})}
				</nav>

				{/* 모바일 메뉴 버튼 (햄버거 아이콘) */}
				<div className="md:hidden">
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 열기">
						<MenuIcon className="w-6 h-6 text-[#333]" />
					</button>
				</div>
			</header>

			{/* 모바일 메뉴 오버레이 */}
			<div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className="flex justify-end p-5 mt-2">
					<button onClick={() => setIsMenuOpen(false)} aria-label="메뉴 닫기">
						<CloseIcon className="w-8 h-8 text-[#333]" />
					</button>
				</div>
				<nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
					{navLinks.map((link) => {
						const isActive = link.path === '/' ? location.pathname === link.path : location.pathname.startsWith(link.path);
						return (
							<Link
								key={link.path}
								to={link.path}
								onClick={() => setIsMenuOpen(false)} // 링크 클릭 시 메뉴 닫기
								className="text-2xl font-bold"
							>
								<p className={isActive ? 'text-[#4ab3bc]' : 'text-[#333]'}>
									{link.label}
								</p>
							</Link>
						);
					})}
				</nav>
			</div>
		</>
	);
};

export default AppHeader;
