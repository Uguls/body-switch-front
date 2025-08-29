import React from 'react';

/**
 * Admin success modal component
 * @param {Object} props - SuccessModal props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {function} props.onClose - Close modal handler
 * @param {string} props.message - Success message to display
 */
const SuccessModal = ({ isOpen, onClose, message = "작업이 완료되었습니다." }) => {
	const handleConfirm = () => {
		onClose();
	};

	return (
		<div 
			className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ease-out ${
				isOpen 
					? 'opacity-100 visible bg-black/50' 
					: 'opacity-0 invisible bg-black/0'
			}`}
		>
			<div
				className={`flex flex-col justify-start items-center gap-8 p-8 rounded-lg bg-white transition-all duration-300 ease-out ${
					isOpen 
						? 'scale-100 opacity-100 translate-y-0' 
						: 'scale-95 opacity-0 translate-y-4'
				}`}
				style={{ boxShadow: "-4px -4px 12px 0 rgba(0,0,0,0.08), 4px 4px 12px 0 rgba(0,0,0,0.08)" }}
			>
				<div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
					<p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-[#4d4d4d]">
						{message}
					</p>
				</div>
				<div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-4">
					<div
						className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-60 h-12 relative px-6 py-3 rounded-lg bg-[#58b9c1] hover:bg-[#4a9fa7] transition-colors duration-200 cursor-pointer"
						onClick={handleConfirm}
					>
						<p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">확인</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuccessModal;