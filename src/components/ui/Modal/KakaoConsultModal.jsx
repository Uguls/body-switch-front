import React from 'react';
import { Button } from '../Button/index.jsx';

const KakaoTalkModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	const handleConnect = () => {
		window.open('https://pf.kakao.com/_qJmpxd', '_blank');
		onClose();
	};

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
			<div
				className="flex flex-col justify-start items-center gap-8 p-8 rounded-lg bg-white"
				style={{boxShadow: "-4px -4px 12px 0 rgba(0,0,0,0.08), 4px 4px 12px 0 rgba(0,0,0,0.08)"}}
			>
				<div className="flex flex-col justify-start items-center relative gap-4">
					<p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-neutral-800">
						카카오톡 상담시간 안내
					</p>
					<p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-neutral-500">
						상담 가능시간 : 오전 10시 ~ 오후 6시
					</p>
					<p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ff6b6b]">
						※ 토요일·일요일 및 공휴일은 상담이 불가능합니다.
					</p>
				</div>
				<div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-4">
					<div
						className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] h-12 relative px-6 py-3 rounded-lg bg-[#d9d9d9] hover:bg-[#c9c9c9] transition-colors duration-200 cursor-pointer"
						onClick={onClose}
					>
						<p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-neutral-700">닫기</p>
					</div>
					<div
						className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-60 h-12 relative px-6 py-3 rounded-lg bg-[#58b9c1] hover:bg-[#4a9fa7] transition-colors duration-200 cursor-pointer"
						onClick={handleConnect}
					>
						<p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">연결</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KakaoTalkModal;