import React from 'react';

const Card = ({
	children,
	className = '',
	shadow = 'medium',
	padding = 'medium',
	rounded = 'medium',
	background = 'white',
	...props
}) => {
	const shadows = {
		none: '',
		small: 'shadow-sm',
		medium: 'shadow-lg',
		large: 'drop-shadow-[0px_0px_20px_rgba(0,0,0,0.2)]',
		custom: 'shadow-2xl'
	};
	
	const paddings = {
		none: '',
		small: 'p-4',
		medium: 'p-6',
		large: 'p-8'
	};
	
	const rounded_variants = {
		none: '',
		small: 'rounded',
		medium: 'rounded-lg',
		large: 'rounded-xl',
		xl: 'rounded-2xl'
	};
	
	const backgrounds = {
		white: 'bg-white',
		gray: 'bg-gray-50',
		transparent: 'bg-transparent'
	};
	
	return (
		<div
			className={`
				${backgrounds[background]}
				${shadows[shadow]}
				${paddings[padding]}
				${rounded_variants[rounded]}
				${className}
			`}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;