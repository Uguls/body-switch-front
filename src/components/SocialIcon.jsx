// src/components/SocialIcon.jsx
import React from 'react';

const SocialIcon = ({ href, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex justify-center items-center w-12 h-12 relative overflow-hidden rounded-full bg-black/20 hover:bg-black/30 transition-colors"
		>
			{children}
		</a>
	);
};

export default SocialIcon;