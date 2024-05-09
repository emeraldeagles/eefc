import React from 'react';
import type { IconProps } from '~/interfaces/common';

export const Icon: React.FC<IconProps> = ({
	iconPath,
	href = '#',
	buttonClass = 'btn-ghost',
	buttonSize = 'btn-md',
	buttonShape = 'btn-circle',
	iconClass,
	iconColor = 'text-primary',
	iconSize = 30,
	fill = 'currentColor',
	strokeWidth = 3,
	isLink,
	isButton,
}) => {
	return (
		<div className={isButton ? `btn ${buttonSize} ${buttonShape} ${buttonClass}` : 'flex'}>
			{isLink ? (
				<a href={href} rel="noreferrer" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={iconSize}
						height={iconSize}
						viewBox="0 0 24 24"
						fill="none"
						stroke={fill}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`${iconColor} ${iconClass}`}>
						<>{iconPath}</>
					</svg>
				</a>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={iconSize}
					height={iconSize}
					viewBox="0 0 24 24"
					fill="none"
					stroke={fill}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`${iconColor} ${iconClass}`}>
					<>{iconPath}</>
				</svg>
			)}
		</div>
	);
};
