import type { IconProps } from '@/types/types';

export const SearchIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 24 24"
	>
		<g clipPath="url(#clip0_2_3)">
			<path
				fill={color}
				d="m23.233 21.86-5.712-5.94a9.66 9.66 0 0 0 2.273-6.23c0-5.343-4.347-9.69-9.69-9.69S.415 4.347.415 9.69s4.348 9.69 9.69 9.69a9.6 9.6 0 0 0 5.552-1.753l5.756 5.985c.24.25.564.388.91.388a1.265 1.265 0 0 0 .91-2.14M10.105 2.528c3.949 0 7.162 3.213 7.162 7.162 0 3.95-3.213 7.162-7.162 7.162-3.95 0-7.163-3.213-7.163-7.162 0-3.95 3.213-7.162 7.163-7.162"
			></path>
		</g>
		<defs>
			<clipPath id="clip0_2_3">
				<path fill="#fff" d="M0 0h24v24H0z"></path>
			</clipPath>
		</defs>
	</svg>
);
