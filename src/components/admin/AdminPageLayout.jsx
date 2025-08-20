import React from 'react';

/**
 * Standard layout wrapper for admin pages
 * @param {Object} props - AdminPageLayout props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.className - Additional CSS classes
 */
const AdminPageLayout = ({ children, className = '' }) => {
	return (
		<div className={`flex flex-col items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50 font-sans ${className}`}>
			{children}
		</div>
	);
};

export default AdminPageLayout;