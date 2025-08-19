import React from 'react';

const Section = ({
	children,
	className = '',
	padding = 'large',
	background = 'white',
	containerWidth = 'full',
	...props
}) => {
	const paddings = {
		none: '',
		small: 'py-8',
		medium: 'py-16',
		large: 'py-20 md:py-32',
		xlarge: 'py-32 md:py-60'
	};
	
	const backgrounds = {
		white: 'bg-white',
		gray: 'bg-gray-50',
		primary: 'bg-[#4ab3bc]',
		transparent: 'bg-transparent'
	};
	
	const widths = {
		full: 'w-full',
		container: 'max-w-7xl mx-auto',
		narrow: 'max-w-4xl mx-auto'
	};
	
	return (
		<section
			className={`
				${backgrounds[background]}
				${paddings[padding]}
				${widths[containerWidth]}
				${className}
			`}
			{...props}
		>
			{children}
		</section>
	);
};

export default Section;