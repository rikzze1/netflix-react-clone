import type { IconProps } from '@/types/types';

export const Rank1Icon = ({
	color,
	width = '145',
	height = '206',
}: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		fill='none'
		viewBox='0 0 145 206'
	>
		<g clipPath='url(#clip0_5_954)'>
			<path
				fill={color || '#141414'}
				stroke={color || 'gray'}
				strokeWidth='5'
				d='M70 29.635 152.63 8v190h-38.794V50.302l-3.019.836L70 62.433z'
			></path>
		</g>
		<defs>
			<clipPath id='clip0_5_954'>
				<path fill='#fff' d='M0 0h145v206H0z'></path>
			</clipPath>
		</defs>
	</svg>
);
