import type { IconProps } from '@/types/types';

export const AccountIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		fill={color}
		aria-hidden='true'
		data-icon='UserStandard'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 0A5 5 0 1 1 7 5a5 5 0 0 1 10 0M4 21a8 8 0 1 1 16 0v.514A68.117 68.117 0 0 1 12 22a68 68 0 0 1-8-.486zm17.15 2.378-.15-.99.151.99a1 1 0 0 0 .849-.99V21c0-5.523-4.477-10-10-10S2 15.477 2 21v1.389a1 1 0 0 0 .849.988L3 22.39c-.151.988-.15.988-.15.989h.003l.01.002.038.005.142.02q.186.027.535.072A70.153 70.153 0 0 0 12 24a70 70 0 0 0 8.422-.523q.35-.045.535-.072l.142-.02.038-.005.01-.002z'
			clipRule='evenodd'
		></path>
	</svg>
);
