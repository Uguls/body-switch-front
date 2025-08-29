import React from 'react';

/**
 * Admin delete confirmation modal component
 * @param {Object} props - DeleteConfirmModal props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {function} props.onClose - Close modal handler
 * @param {function} props.onConfirm - Confirm delete handler
 */
const DeleteConfirmModal = ({ 
	isOpen, 
	onClose, 
	onConfirm
}) => {
	const handleConfirm = () => {
		onConfirm();
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
					<p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center">
						<span className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-neutral-800">
							정말로{" "}
						</span>
						<span className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-[#ee735a]">
							삭제
						</span>
						<span className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-neutral-800">
							하시겠습니까?
						</span>
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
						className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[180px] h-12 relative px-6 py-3 rounded-lg bg-[#ee735a] hover:bg-[#d6634a] transition-colors duration-200 cursor-pointer"
						onClick={handleConfirm}
					>
						<p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">삭제</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmModal;