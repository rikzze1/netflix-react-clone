import type { IconProps } from '@/types/types';

export const FacebookIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill={color}
			viewBox='0 0 25 24'
		>
			<g clipPath='url(#clip0_5_1200)'>
				<path
					fill={color}
					d='M22.77 0H2.23A1.73 1.73 0 0 0 .5 1.73v20.54c0 .955.775 1.73 1.73 1.73h11.09v-9.281h-3.117v-3.633h3.117V8.412c0-3.1 1.893-4.787 4.659-4.787 1.324 0 2.463.098 2.794.142v3.24h-1.907c-1.504 0-1.796.716-1.796 1.765v2.314h3.598l-.469 3.633H17.07V24h5.7a1.73 1.73 0 0 0 1.73-1.73V1.73A1.73 1.73 0 0 0 22.77 0'
				></path>
			</g>
			<defs>
				<clipPath id='clip0_5_1200'>
					<path fill='#fff' d='M.5 0h24v24H.5z'></path>
				</clipPath>
			</defs>
		</svg>
	);
};
