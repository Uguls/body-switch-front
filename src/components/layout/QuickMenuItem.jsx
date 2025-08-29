import React, { useState } from 'react';

const MenuItem = ({ defaultIcon, hoverIcon, altText, href = '#', onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = (e) => {
		if (onClick) {
			e.preventDefault();
			onClick();
		}
	};

	return (
		<a
			href={href}
			className="group flex justify-center items-center p-4"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleClick}
		>
			<img
				src={isHovered ? hoverIcon : defaultIcon}
				alt={altText}
				className="w-[200%] h-[200%] transition-transform duration-200 ease-in-out group-hover:scale-110"
			/>
		</a>
	);
};

export default MenuItem;