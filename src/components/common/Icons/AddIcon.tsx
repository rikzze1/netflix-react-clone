import type { IconProps } from '@/types/types';

export const AddIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill={color}
			viewBox="0 0 24 24"
		>
			<g
				fill={color}
				fillRule="evenodd"
				clipPath="url(#clip0_2_2)"
				clipRule="evenodd"
			>
				<path d="M17.156 11.063h-4.218v-4.22h-1.876v4.22H6.845v1.875h4.219v4.218h1.874v-4.218h4.22z"></path>
			</g>
			<defs>
				<clipPath id="clip0_2_2">
					<path fill="#fff" d="M0 0h24v24H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
};
