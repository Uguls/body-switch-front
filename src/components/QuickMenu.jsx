// src/components/QuickMenu.jsx
import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

// 1. 아이콘 이미지들을 모두 import 합니다.
import inquireDefault from '../assets/icons/inquire-default.png';
import inquireHover from '../assets/icons/inquire-hover.png';
import kakaoDefault from '../assets/icons/kakao-default.png';
import kakaoHover from '../assets/icons/kakao-hover.png';
import priceDefault from '../assets/icons/price-default.png';
import priceHover from '../assets/icons/price-hover.png';
import noticeDefault from '../assets/icons/notice-default.png';
import noticeHover from '../assets/icons/notice-hover.png';
import eventDefault from '../assets/icons/event-default.png';
import eventHover from '../assets/icons/event-hover.png';

// 로고와 화살표 SVG
const Logo = () => (
	<div className="py-1">
		<svg width="80" height="9" viewBox="0 0 80 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M5.27184 4.14064C6.05849 4.51278 6.55149 5.25824 6.55149 6.1674C6.55149 7.51699 5.38507 8.53919 3.84479 8.53919H0V0.209619H3.76813C5.24708 0.209619 6.32622 1.11053 6.32622 2.34119C6.32622 3.08547 5.90871 3.75555 5.27184 4.14064ZM4.27881 5.89418C4.27881 5.45138 3.9533 5.14047 3.4556 5.14047H2.20662V6.65494H3.4556C3.9533 6.65494 4.27881 6.34287 4.27881 5.89418ZM4.14554 2.72157C4.14554 2.28937 3.84952 1.99612 3.36833 1.99612H2.20662V3.44582H3.36833C3.84952 3.44582 4.14554 3.15259 4.14554 2.72039V2.72157Z" fill="#4AB3BC"></path>
			<path d="M11.9165 8.75C9.23458 8.75 7.32161 6.91992 7.32161 4.375C7.32161 1.83008 9.23576 0 11.9165 0C14.5972 0 16.4984 1.82301 16.4984 4.375C16.4984 6.92698 14.5913 8.75 11.9165 8.75ZM11.9165 6.6149C13.1867 6.6149 14.1054 5.67866 14.1054 4.375C14.1054 3.07133 13.1867 2.1351 11.9165 2.1351C10.6463 2.1351 9.71459 3.07839 9.71459 4.375C9.71459 5.6716 10.6475 6.6149 11.9165 6.6149Z" fill="#4AB3BC"></path>
			<path d="M25.3532 4.36793C25.3532 6.79862 23.5653 8.53919 21.0473 8.53919H17.6707V0.209619H21.0473C23.5724 0.209619 25.3532 1.93371 25.3532 4.36793ZM22.998 4.36793C22.998 3.13257 22.1748 2.31174 20.9388 2.31174H19.9788V6.43826H20.9388C22.1736 6.43826 22.998 5.59741 22.998 4.36793Z" fill="#4AB3BC"></path>
			<path d="M30.3479 5.28062V8.53802H28.0068V5.27355L25.1126 0.208441H27.6613L29.1862 3.21853L30.7112 0.208441H33.2598L30.3467 5.28062H30.3479Z" fill="#4AB3BC"></path>
			<path d="M36.1694 6.09083H36.5656C36.5656 7.40274 37.5752 8.25301 39.0954 8.25301C40.4812 8.25301 41.4518 7.46163 41.4518 6.29574C41.4518 4.97441 40.2807 4.7224 39.0329 4.44565C37.7368 4.16301 36.3522 3.85328 36.3522 2.30937C36.3522 0.97391 37.4101 0.110689 39.0329 0.110689C40.6557 0.110689 41.6311 1.03044 41.6311 2.42832H41.2443C41.2443 1.25066 40.3538 0.488712 39.0282 0.488712C37.7026 0.488712 36.7437 1.20002 36.7437 2.29759C36.7437 3.55887 37.9231 3.81206 39.1508 4.07939C40.4706 4.37381 41.8528 4.68589 41.8528 6.29222C41.8528 7.70776 40.7065 8.63575 39.1001 8.63575C37.3429 8.63575 36.1717 7.62768 36.1717 6.08965L36.1694 6.09083Z" fill="#4AB3BC"></path>
			<path d="M54.0618 0.209619L51.387 8.53919H51.065L48.3972 1.33193L45.7731 8.53919H45.4511L42.7161 0.209619H43.1336L45.6233 7.85615L48.2911 0.521702H48.4939L51.2112 7.85733L53.6478 0.209619H54.0618Z" fill="#4AB3BC"></path>
			<path d="M55.7236 0.209619H56.1139V8.53919H55.7236V0.209619Z" fill="#4AB3BC"></path>
			<path d="M60.7678 0.581764V8.53919H60.3774V0.581764H57.6577V0.209619H63.4886V0.581764H60.7678Z" fill="#4AB3BC"></path>
			<path d="M63.991 4.38324C63.991 1.89367 65.7637 0.0871456 68.2427 0.0871456C70.0779 0.0871456 71.5143 1.09286 72.0863 2.71685H71.6818C71.1275 1.31544 69.8644 0.471063 68.2439 0.471063C66.0031 0.471063 64.3885 2.10447 64.3885 4.38324C64.3885 6.66201 65.9948 8.27776 68.2439 8.27776C69.9092 8.27776 71.2018 7.38509 71.7538 5.88593H72.15C71.5874 7.6112 70.1238 8.66168 68.2439 8.66168C65.7566 8.66168 63.9922 6.87399 63.9922 4.38442L63.991 4.38324Z" fill="#4AB3BC"></path>
			<path d="M80 0.209619V8.53919H79.6096V4.38324H74.2741V8.53919H73.8837V0.209619H74.2741V4.00521H79.6096V0.209619H80Z" fill="#4AB3BC"></path>
		</svg>
	</div>
);

const Separator = () => <div className="w-20 h-px bg-[#e6e6e6]"></div>;

// ▲ 위로 향하는 화살표
const ArrowUp = () => (
	<div className="flex justify-center items-center h-6 py-[5px] cursor-pointer">
		<svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M17.0781 1.04001C16.4209 0.619403 15.5791 0.619403 14.9219 1.04001L1.7571 9.46548C0.0740724 10.5426 0.837001 13.15 2.83521 13.15H29.1648C31.163 13.15 31.9259 10.5426 30.2429 9.46548L17.0781 1.04001Z" fill="#B3B3B3"></path>
		</svg>
	</div>
);

// ▼ 아래로 향하는 화살표 (새로 추가)
const ArrowDown = () => (
	<div className="flex flex-col justify-center items-center h-6 w-[105px] relative overflow-hidden gap-2.5 py-[5px] cursor-pointer">
		<svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M16.5781 12.46C15.9209 12.8806 15.0791 12.8806 14.4219 12.46L1.2571 4.03452C-0.425928 2.95738 0.337001 0.349976 2.33521 0.349976H28.6648C30.663 0.349976 31.4259 2.95738 29.7429 4.03452L16.5781 12.46Z" fill="#B3B3B3"></path>
		</svg>
	</div>
);

const QuickMenu = ({ onPriceClick }) => {
	const navigate = useNavigate();
	const location = useLocation();
	// 1. 메뉴가 열렸는지(true) 닫혔는지(false)를 기억하는 상태를 만듭니다.
	const [isExpanded, setIsExpanded] = useState(true);

	// 2. 화살표를 클릭할 때마다 isExpanded 상태를 반전시키는 함수입니다.
	const toggleMenu = () => {
		setIsExpanded(!isExpanded);
	};

	const handlePriceClick = () => {
		if (location.pathname === '/') {
			// 메인 페이지에서는 스크롤
			if (onPriceClick) {
				onPriceClick();
			}
		} else {
			// 다른 페이지에서는 메인 페이지의 가격 섹션으로 이동
			navigate('/#pricing');
		}
	};

	const handleKakaoClick = () => {
		// TODO: 카카오톡 문의 기능 구현 예정
		alert('카카오톡 문의 기능은 공사 중입니다.');
	};

	const menuItems = [
		{ id: 'inquire', altText: '도입문의', defaultIcon: inquireDefault, hoverIcon: inquireHover, onClick: () => navigate('/inquiry') },
		{ id: 'kakao', altText: '카카오톡문의', defaultIcon: kakaoDefault, hoverIcon: kakaoHover, onClick: handleKakaoClick },
		{ id: 'price', altText: '금액조회', defaultIcon: priceDefault, hoverIcon: priceHover, onClick: handlePriceClick },
		{ id: 'notice', altText: '공지사항', defaultIcon: noticeDefault, hoverIcon: noticeHover, onClick: () => navigate('/notice') },
		{ id: 'event', altText: '이벤트', defaultIcon: eventDefault, hoverIcon: eventHover, onClick: () => navigate('/event') },
	];

	return (
		<div className="fixed top-1/2 right-2 sm:right-4 lg:right-6 -translate-y-1/2 z-50 flex flex-col items-center p-1 sm:p-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-2xl scale-75 sm:scale-90 lg:scale-100">
			{/* 3. isExpanded 상태에 따라 다른 내용을 보여줍니다. */}
			{isExpanded ? (
				// 메뉴가 열렸을 때 (Expanded View)
				<>
					<Logo />
					<div className="flex flex-col items-center">
						{menuItems.map((item, index) => (
							<React.Fragment key={item.id}>
								<MenuItem
									defaultIcon={item.defaultIcon}
									hoverIcon={item.hoverIcon}
									altText={item.altText}
									onClick={item.onClick}
								/>
								{index < menuItems.length - 1 && <Separator />}
							</React.Fragment>
						))}
					</div>
					<div onClick={toggleMenu}>
						<ArrowUp />
					</div>
				</>
			) : (
				// 메뉴가 닫혔을 때 (Collapsed View)
				<>
					<Logo />
					<p className="w-[50px] sm:w-[59px] text-base sm:text-[19px] font-semibold text-center text-[#108389]">
						QUICK
					</p>
					<div onClick={toggleMenu}>
						<ArrowDown />
					</div>
				</>
			)}
		</div>
	);
};

export default QuickMenu;