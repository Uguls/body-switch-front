import React from 'react';

const Button = ({
	children,
	variant = 'primary',
	size = 'medium',
	onClick,
	disabled = false,
	className = '',
	type = 'button',
	...props
}) => {
	const baseClasses = 'inline-flex justify-center items-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 font-bold cursor-pointer';
	
	const variants = {
		primary: 'bg-[#4ab3bc] text-white hover:bg-[#3a9aaa] focus:ring-[#4ab3bc]/50',
		secondary: 'bg-[#58b9c1] text-white hover:bg-[#4ab3bc] focus:ring-[#58b9c1]/50',
		outline: 'bg-transparent border-2 border-[#4ab3bc] text-[#4ab3bc] hover:bg-[#4ab3bc] hover:text-white',
		gray: 'bg-[#d9d9d9] text-neutral-700 hover:bg-gray-300',
		disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed'
	};
	
	const sizes = {
		small: 'px-4 py-2 text-sm rounded-lg',
		medium: 'px-6 py-3 text-base rounded-lg',
		large: 'px-8 py-4 text-lg rounded-2xl',
		pill: 'px-6 py-4 rounded-[50px]'
	};
	
	const variantClass = disabled ? variants.disabled : variants[variant];
	const sizeClass = sizes[size];
	
	return (
		<button
			type={type}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
			className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;