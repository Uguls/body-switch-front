import React from 'react';

/**
 * Admin page header component with title and optional action buttons
 * @param {Object} props - PageHeader props
 * @param {string} props.title - Page title
 * @param {React.ReactNode} props.children - Action buttons or other elements
 */
const PageHeader = ({ title, children }) => {
	return (
		<div className="flex justify-between items-center w-full max-w-6xl py-8 border-b-2 border-[#e6e6e6] mb-8">
			<h1 className="text-3xl md:text-4xl font-medium text-[#333]">{title}</h1>
			{children && (
				<div className="flex gap-4">
					{children}
				</div>
			)}
		</div>
	);
};

export default PageHeader;