import type { IconProps } from '@/types/types';

export const PlayIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		fill={color}
		aria-hidden='true'
		data-icon='PlayStandard'
		viewBox='0 0 24 24'
	>
		<path
			fill={color}
			d='M5 2.691a1 1 0 0 1 1.482-.876l16.925 9.309a1 1 0 0 1 0 1.752L6.482 22.185A1 1 0 0 1 5 21.309z'
		></path>
	</svg>
);
