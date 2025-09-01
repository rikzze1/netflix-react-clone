import type { IconProps } from '@/types/types';

export const YoutubeIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill={color}
			viewBox='0 0 25 24'
		>
			<g clipPath='url(#clip0_5_1214)'>
				<path
					fill={color}
					d='M23.48 5.34c-.651-1.158-1.358-1.371-2.796-1.452-1.437-.097-5.05-.138-8.181-.138-3.136 0-6.751.04-8.187.136-1.435.083-2.143.295-2.8 1.454C.845 6.497.5 8.489.5 11.996v.011c0 3.492.345 5.5 1.016 6.644.656 1.158 1.363 1.368 2.798 1.465 1.438.085 5.053.134 8.189.134 3.13 0 6.744-.05 8.183-.132 1.438-.098 2.145-.307 2.796-1.465.676-1.145 1.018-3.152 1.018-6.644v-.012c0-3.508-.342-5.5-1.02-6.657M9.5 16.5v-9L17 12z'
				></path>
			</g>
			<defs>
				<clipPath id='clip0_5_1214'>
					<path fill='#fff' d='M.5 0h24v24H.5z'></path>
				</clipPath>
			</defs>
		</svg>
	);
};
