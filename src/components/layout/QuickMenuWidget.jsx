// src/components/QuickMenu.jsx
import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QuickMenuItem } from './index.jsx';
import { BrandLogo } from '../ui/index.jsx'; // ⬅️ 모달 컴포넌트 import

// 1. 아이콘 이미지들을 모두 import 합니다.
import inquireDefault from '../../assets/icons/navigation/inquire-default.svg';
import inquireHover from '../../assets/icons/navigation/inquire-hover.svg';
import kakaoDefault from '../../assets/icons/navigation/kakao-default.svg';
import kakaoHover from '../../assets/icons/navigation/kakao-hover.svg';
import priceDefault from '../../assets/icons/navigation/price-default.svg';
import priceHover from '../../assets/icons/navigation/price-hover.svg';
import noticeDefault from '../../assets/icons/navigation/notice-default.svg';
import noticeHover from '../../assets/icons/navigation/notice-hover.svg';
import eventDefault from '../../assets/icons/navigation/event-default.svg';
import eventHover from '../../assets/icons/navigation/event-hover.svg';
import arrowUpIcon from '../../assets/svgs/arrow-up.svg';
import arrowDownIcon from '../../assets/svgs/arrow-down.svg';

// 화살표 SVG

const Separator = () => <div className="w-20 h-px bg-[#e6e6e6]"></div>;

// ▲ 위로 향하는 화살표
const ArrowUp = () => (
	<div className="flex justify-center items-center h-6 py-[5px] cursor-pointer">
		<img src={arrowUpIcon} alt="위로" />
	</div>
);

// ▼ 아래로 향하는 화살표 (새로 추가)
const ArrowDown = () => (
	<div className="flex flex-col justify-center items-center h-6 w-[105px] relative overflow-hidden gap-2.5 py-[5px] cursor-pointer">
		<img src={arrowDownIcon} alt="아래로" />
	</div>
);

const QuickMenuWidget = ({ onPriceClick, onKakaoClick }) => {
	const navigate = useNavigate();
	const location = useLocation();
	// 모바일에서는 기본적으로 축소된 상태로 시작
	const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 768);

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

	// 💡 카카오톡 버튼 클릭 시 props로 전달받은 함수 호출 (모달 열기)
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
		<div className="fixed top-1/2 right-1 sm:right-4 lg:right-8 -translate-y-1/2 z-50 flex flex-col items-center px-1 py-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-2xl scale-75 sm:scale-90 lg:scale-100 transition-all duration-500 ease-in-out">
			<div className="py-1">
				<BrandLogo size="small" />
			</div>
			
			{/* 확장된 상태의 메뉴 아이템들 */}
			<div className={`overflow-hidden transition-all duration-500 ease-in-out ${
				isExpanded ? 'max-h-[full] opacity-100' : 'max-h-0 opacity-0'
			}`}>
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
			</div>

			<div
				className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer hover:bg-white/10 rounded-xl transition-colors duration-200 flex flex-col items-center justify-center ${
					!isExpanded ? 'w-20 h-20 opacity-100' : 'max-h-0 opacity-0'
				}`}
				onClick={toggleMenu}
			>
				<p className="text-xl sm:text-2xl font-bold text-center text-[#108389]">
					QUICK
				</p>
				<div className="transition-transform duration-500 ease-in-out">
					<ArrowDown />
				</div>
			</div>

			{/* 펼친 상태의 화살표 버튼 */}
			<div 
				className={`transition-all duration-500 ease-in-out cursor-pointer hover:bg-white/10 rounded-xl transition-colors duration-200 flex flex-col items-center ${
					isExpanded ? 'opacity-100' : 'opacity-0 max-h-0'
				}`}
				onClick={toggleMenu}
			>
				<div className="transition-transform duration-500 ease-in-out">
					<ArrowUp />
				</div>
			</div>
		</div>
	);
};

export default QuickMenuWidget;