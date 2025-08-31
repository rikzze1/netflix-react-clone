import type { IconProps } from '@/types/types';

export const MoreInfoIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		fill={color}
		aria-hidden='true'
		data-icon='CircleIStandard'
		viewBox='0 0 24 24'
	>
		<path
			fill={color}
			fillRule='evenodd'
			d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12m13-2v8h-2v-8zm-1-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'
			clipRule='evenodd'
		></path>
	</svg>
);
