// src/components/QuickMenu.jsx
import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QuickMenuItem } from './index.jsx';
import { BrandLogo } from '../ui/index.jsx'; // ⬅️ 모달 컴포넌트 import

// 1. 아이콘 이미지들을 모두 import 합니다.
import inquireDefault from '../../assets/icons/inquire-default.png';
import inquireHover from '../../assets/icons/inquire-hover.png';
import kakaoDefault from '../../assets/icons/kakao-default.png';
import kakaoHover from '../../assets/icons/kakao-hover.png';
import priceDefault from '../../assets/icons/price-default.png';
import priceHover from '../../assets/icons/price-hover.png';
import noticeDefault from '../../assets/icons/notice-default.png';
import noticeHover from '../../assets/icons/notice-hover.png';
import eventDefault from '../../assets/icons/event-default.png';
import eventHover from '../../assets/icons/event-hover.png';

// 화살표 SVG

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

const QuickMenuWidget = ({ onPriceClick, onKakaoClick }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleMenu = () => {
		setIsExpanded(!isExpanded);
	};
	const handlePriceClick = () => {
		if (location.pathname === '/') {
			if (onPriceClick) {
				onPriceClick();
			}
		} else {
			navigate('/#pricing');
		}
	};

	// 💡 카카오톡 버튼 클릭 시 props로 전달받은 함수 호출
	const handleKakaoClick = () => {
		if (onKakaoClick) {
			onKakaoClick();
		}
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
			{isExpanded ? (
				<>
					<div className="py-1">
						<BrandLogo size="small" />
					</div>
					<div className="flex flex-col items-center">
						{menuItems.map((item, index) => (
							<React.Fragment key={item.id}>
								<QuickMenuItem
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
				<>
					<div className="py-1">
						<BrandLogo size="small" />
					</div>
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

export default QuickMenuWidget;