import React from 'react';

const Skeleton = ({ 
	width = '100%', 
	height = '1rem', 
	variant = 'rectangular',
	className = '',
	animate = true 
}) => {
	const baseClasses = `bg-gray-200 ${animate ? 'animate-shimmer' : ''}`;
	
	const variantClasses = {
		rectangular: 'rounded',
		circular: 'rounded-full',
		text: 'rounded-sm h-4',
		card: 'rounded-lg',
		avatar: 'rounded-full aspect-square'
	};

	const style = {
		width: typeof width === 'number' ? `${width}px` : width,
		height: typeof height === 'number' ? `${height}px` : height,
	};

	return (
		<div 
			className={`${baseClasses} ${variantClasses[variant]} ${className}`}
			style={style}
		/>
	);
};

// 복합 스켈레톤 컴포넌트들
const SkeletonText = ({ lines = 1, className = '' }) => (
	<div className={`space-y-2 ${className}`}>
		{Array.from({ length: lines }, (_, index) => (
			<Skeleton 
				key={index}
				variant="text" 
				width={index === lines - 1 ? '75%' : '100%'}
			/>
		))}
	</div>
);

const SkeletonCard = ({ className = '' }) => (
	<div className={`p-4 border border-gray-200 rounded-lg ${className}`}>
		<div className="flex items-center space-x-4 mb-4">
			<Skeleton variant="circular" width={40} height={40} />
			<div className="flex-1">
				<Skeleton variant="text" width="60%" height={16} className="mb-2" />
				<Skeleton variant="text" width="40%" height={12} />
			</div>
		</div>
		<SkeletonText lines={3} />
	</div>
);

const SkeletonTable = ({ rows = 5, columns = 4, className = '' }) => (
	<div className={`w-full ${className}`}>
		{/* 헤더 */}
		<div className="flex space-x-4 mb-4 p-4 bg-gray-50 rounded-t-lg">
			{Array.from({ length: columns }, (_, index) => (
				<Skeleton key={index} variant="text" height={16} className="flex-1" />
			))}
		</div>
		
		{/* 데이터 행들 */}
		<div className="space-y-2">
			{Array.from({ length: rows }, (_, rowIndex) => (
				<div key={rowIndex} className="flex space-x-4 p-4 border-b border-gray-100">
					{Array.from({ length: columns }, (_, colIndex) => (
						<Skeleton 
							key={colIndex} 
							variant="text" 
							height={14} 
							className="flex-1"
							width={colIndex === 0 ? '80%' : '100%'}
						/>
					))}
				</div>
			))}
		</div>
	</div>
);

const SkeletonList = ({ items = 5, className = '' }) => (
	<div className={`space-y-4 ${className}`}>
		{Array.from({ length: items }, (_, index) => (
			<div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
				<Skeleton variant="circular" width={48} height={48} />
				<div className="flex-1">
					<Skeleton variant="text" width="70%" height={16} className="mb-2" />
					<Skeleton variant="text" width="50%" height={12} className="mb-1" />
					<Skeleton variant="text" width="30%" height={12} />
				</div>
				<Skeleton variant="rectangular" width={80} height={32} className="rounded-md" />
			</div>
		))}
	</div>
);

// 이벤트/공지사항용 스켈레톤
const SkeletonEventCard = ({ className = '' }) => (
	<div className={`border border-gray-200 rounded-2xl overflow-hidden ${className}`}>
		<Skeleton variant="rectangular" height={200} className="rounded-none" />
		<div className="p-6">
			<div className="flex items-center justify-between mb-4">
				<Skeleton variant="rectangular" width={80} height={24} className="rounded-full" />
				<Skeleton variant="text" width={100} height={14} />
			</div>
			<Skeleton variant="text" height={20} className="mb-2" />
			<SkeletonText lines={2} />
		</div>
	</div>
);

// 연락처 목록용 스켈레톤
const SkeletonContactCard = ({ className = '' }) => (
	<div className={`flex items-center gap-9 p-6 rounded-2xl bg-white shadow-sm ${className}`}>
		<Skeleton variant="rectangular" width={44} height={22} className="rounded-full" />
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Skeleton variant="text" width={80} height={20} />
				<Skeleton variant="text" width={120} height={20} />
			</div>
			<div className="flex items-center gap-1">
				<Skeleton variant="text" width={60} height={16} />
				<div className="text-gray-400">/</div>
				<Skeleton variant="text" width={80} height={16} />
			</div>
		</div>
		<div className="flex gap-2 ml-auto">
			<Skeleton variant="rectangular" width={60} height={32} className="rounded" />
			<Skeleton variant="rectangular" width={60} height={32} className="rounded" />
		</div>
	</div>
);

// 내보내기
export default Skeleton;
export { 
	SkeletonText, 
	SkeletonCard, 
	SkeletonTable, 
	SkeletonList, 
	SkeletonEventCard,
	SkeletonContactCard
};