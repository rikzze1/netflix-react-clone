import type { IconProps } from '@/types/types';

export const Rank7Icon = ({
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
		<g clipPath='url(#clip0_5_947)'>
			<path
				fill={color || '#141414'}
				stroke={color || 'gray'}
				strokeWidth='5'
				d='M85.272 198H43.511l70.088-152.77 1.544-3.366H17V8h137.955v32.938z'
			></path>
		</g>
		<defs>
			<clipPath id='clip0_5_947'>
				<path fill='#fff' d='M0 0h145v206H0z'></path>
			</clipPath>
		</defs>
	</svg>
);
