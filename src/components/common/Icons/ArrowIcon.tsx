import type { IconProps } from '@/types/types';

export const ArrowIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill={color}
			stroke={color}
			strokeWidth='2'
			viewBox='0 0 24 24'
		>
			<path
				fill={color}
				stroke={color}
				strokeWidth='2'
				d='M6.645 0 5.394 1.247 16.11 12 5.394 22.753 6.645 24l11.961-12z'
			></path>
		</svg>
	);
};
