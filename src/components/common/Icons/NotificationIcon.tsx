import type { IconProps } from '@/types/types';

export const NotificationIcon = ({
	color = 'none',
	width,
	height,
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill={color}
		aria-hidden="true"
		data-icon="BellStandard"
		viewBox="0 0 24 24"
	>
		<path
			fill={color}
			fillRule="evenodd"
			d="M13 4.07c3.392.486 6 3.404 6 6.93v4.254a91 91 0 0 1 3.107.28l-.214 1.99A93 93 0 0 0 12 17c-3.41 0-6.722.181-9.893.523l-.214-1.988A91 91 0 0 1 5 15.254V11a7 7 0 0 1 6-6.93V2h2zm4 11.059V11a5 5 0 0 0-10 0v4.129a97 97 0 0 1 10 0M8.626 19.37C8.662 20.517 10.15 22 12 22c1.848 0 3.337-1.483 3.373-2.629.007-.222-.197-.371-.42-.371H9.046c-.223 0-.427.149-.42.371"
			clipRule="evenodd"
		></path>
	</svg>
);
