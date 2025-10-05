import type { IconProps } from '@/types/types';

export const DownArrowIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 24 24"
			stroke={color}
			strokeWidth="2"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	);
};