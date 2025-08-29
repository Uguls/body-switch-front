import React, { useState, useRef, useEffect } from 'react';

// 상태별 스타일 정의 (텍스트 색상, SVG 채우기 색상)
const STATUS_STYLES = {
	'미확인': {
		textColor: 'text-[#ff6b6b]',
		fillColor: '#ff6b6b'
	},
	'처리중': {
		textColor: 'text-black', // text-neutral-800 대신 명확한 black으로 변경
		fillColor: '#000000'
	},
	'완료': {
		textColor: 'text-[#4ab3bc]',
		fillColor: '#4ab3bc'
	},
	'알 수 없음': { // 예외 상황을 위한 기본값
		textColor: 'text-gray-400',
		fillColor: '#9CA3AF'
	}
};

const STATUS_OPTIONS = ['미확인', '처리중', '완료'];

const StatusDropdown = ({ currentStatus, onStatusChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const dropdownRef = useRef(null);

	// 드롭다운 외부 클릭 시 닫기
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleSelect = (status) => {
		if (status !== currentStatus) {
			setIsAnimating(true);
			
			// 애니메이션 효과를 위해 약간의 지연 후 상태 변경
			setTimeout(() => {
				onStatusChange(status);
				setIsAnimating(false);
			}, 150);
		}
		setIsOpen(false);
	};

	// 현재 상태에 맞는 스타일을 가져옵니다. 없는 경우 '알 수 없음' 기본값 사용
	const currentStyle = STATUS_STYLES[currentStatus] || STATUS_STYLES['알 수 없음'];

	return (
		<div className="relative w-[125px]" ref={dropdownRef}>
			{/* 현재 상태 표시 버튼: 배경과 테두리 제거 */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`w-full flex justify-center items-center gap-1 bg-transparent border-none transition-all duration-300 ${
					isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
				}`}
			>
        <span className={`text-base font-medium transition-colors duration-300 ${currentStyle.textColor} ${
          isAnimating ? 'animate-pulse' : ''
        }`}>
          {currentStatus}
        </span>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={`w-5 h-5 transition-all duration-300 ${
						isOpen ? 'rotate-180' : ''
					} ${isAnimating ? 'animate-spin' : ''}`}
				>
					{/* path의 fill 속성에 직접 색상값 적용 */}
					<path
						d="M12.707 15.2929C12.3165 15.6834 11.6833 15.6834 11.2928 15.2929L5.70701 9.7071C5.07704 9.07714 5.52321 8 6.41412 8H17.5857C18.4766 8 18.9228 9.07714 18.2928 9.70711L12.707 15.2929Z"
						fill={currentStyle.fillColor}
					/>
				</svg>
			</button>

			{/* 드롭다운 메뉴 */}
			{isOpen && (
				<div className="absolute top-full left-1/2 -translate-x-1/2 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-fadeIn">
					{STATUS_OPTIONS.map((option, index) => (
						<div
							key={option}
							onClick={() => handleSelect(option)}
							className={`px-4 py-2.5 text-base text-center cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:scale-105 ${STATUS_STYLES[option].textColor}`}
							style={{
								animationDelay: `${index * 50}ms`
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default StatusDropdown;
