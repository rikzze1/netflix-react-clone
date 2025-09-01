import type { IconProps } from '@/types/types';

export const Rank4Icon = ({
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
		<g clipPath='url(#clip0_5_951)'>
			<path
				fill={color || '#141414'}
				stroke={color || 'gray'}
				strokeWidth='5'
				d='M102.186 13H142v117.241h27.143v31.066H142V203h-37.781v-41.693H13v-30.404zm-49.52 113.428-2.903 3.813h54.456V58.708l-4.265 5.602z'
			></path>
		</g>
		<defs>
			<clipPath id='clip0_5_951'>
				<path fill='#fff' d='M0 0h145v206H0z'></path>
			</clipPath>
		</defs>
	</svg>
);
