import React from 'react';

const LoadingSpinner = ({ 
	size = 'medium', 
	variant = 'default', 
	className = '',
	color = '#4ab3bc' 
}) => {
	const sizeClasses = {
		small: 'w-4 h-4',
		medium: 'w-8 h-8',
		large: 'w-12 h-12',
		xl: 'w-16 h-16'
	};

	const borderWidthClasses = {
		small: 'border-[1.5px]',
		medium: 'border-2',
		large: 'border-[3px]',
		xl: 'border-4'
	};

	// 기본 스피너 (원형)
	if (variant === 'default') {
		return (
			<div className={`flex items-center justify-center ${className}`}>
				<div 
					className={`${sizeClasses[size]} ${borderWidthClasses[size]} border-gray-200 rounded-full animate-spin`}
					style={{
						borderTopColor: color,
						borderRightColor: color,
						borderBottomColor: 'transparent',
						borderLeftColor: 'transparent',
						animation: 'spin 0.8s linear infinite'
					}}
				/>
			</div>
		);
	}

	// 점 3개 스피너
	if (variant === 'dots') {
		const dotSize = {
			small: 'w-1 h-1',
			medium: 'w-2 h-2',
			large: 'w-3 h-3',
			xl: 'w-4 h-4'
		};

		return (
			<div className={`flex items-center justify-center space-x-1 ${className}`}>
				{[0, 1, 2].map((index) => (
					<div
						key={index}
						className={`${dotSize[size]} rounded-full animate-pulse`}
						style={{
							backgroundColor: color,
							animationDelay: `${index * 0.2}s`,
							animationDuration: '1s'
						}}
					/>
				))}
			</div>
		);
	}

	// 파동 스피너
	if (variant === 'wave') {
		const barWidth = {
			small: 'w-0.5',
			medium: 'w-1',
			large: 'w-1.5',
			xl: 'w-2'
		};
		
		const barHeight = {
			small: 'h-4',
			medium: 'h-8',
			large: 'h-12',
			xl: 'h-16'
		};

		return (
			<div className={`flex items-end justify-center space-x-1 ${className}`}>
				{[0, 1, 2, 3, 4].map((index) => (
					<div
						key={index}
						className={`${barWidth[size]} ${barHeight[size]} rounded-sm animate-pulse`}
						style={{
							backgroundColor: color,
							animationDelay: `${index * 0.1}s`,
							animationDuration: '1.2s',
							transformOrigin: 'bottom'
						}}
					/>
				))}
			</div>
		);
	}

	// 펄스 스피너 (확대/축소)
	if (variant === 'pulse') {
		return (
			<div className={`flex items-center justify-center ${className}`}>
				<div 
					className={`${sizeClasses[size]} rounded-full animate-pulse`}
					style={{
						backgroundColor: color,
						animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
					}}
				/>
			</div>
		);
	}

	// 그라데이션 스피너
	if (variant === 'gradient') {
		return (
			<div className={`flex items-center justify-center ${className}`}>
				<div 
					className={`${sizeClasses[size]} rounded-full animate-spin`}
					style={{
						background: `conic-gradient(from 0deg, transparent 0deg, ${color} 90deg, transparent 180deg)`,
						animation: 'spin 1s linear infinite'
					}}
				/>
			</div>
		);
	}

	// 기본값
	return (
		<div className={`flex items-center justify-center ${className}`}>
			<div 
				className={`${sizeClasses[size]} ${borderWidthClasses[size]} border-gray-200 border-t-[#4ab3bc] rounded-full animate-spin`}
			/>
		</div>
	);
};

export default LoadingSpinner;