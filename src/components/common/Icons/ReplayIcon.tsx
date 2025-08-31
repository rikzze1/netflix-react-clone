import type { IconProps } from '@/types/types';

export const ReplayIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		fill={color}
		aria-hidden='true'
		data-icon='RefreshStandard'
		viewBox='0 0 24 24'
	>
		<path
			fill={color}
			fillRule='evenodd'
			d='M20.663 7A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h2c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c4.175 0 7.85 2.132 10 5.365V2h2v6a1 1 0 0 1-1 1h-6V7z'
			clipRule='evenodd'
		></path>
	</svg>
);
