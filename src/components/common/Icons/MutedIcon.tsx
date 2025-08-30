import type { IconProps } from '@/types/types';

export const MutedIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill={color}
		aria-hidden="true"
		data-icon="VolumeOffStandard"
		viewBox="0 0 24 24"
	>
		<path
			fill={color}
			fillRule="evenodd"
			d="M11 4a1 1 0 0 0-1.707-.707L4.586 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.586l4.707 4.707A1 1 0 0 0 11 20zM5.707 9.707 9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414zm9.586 0L17.586 12l-2.293 2.293 1.414 1.414L19 13.414l2.293 2.293 1.414-1.414L20.414 12l2.293-2.293-1.414-1.414L19 10.586l-2.293-2.293z"
			clipRule="evenodd"
		></path>
	</svg>
);
