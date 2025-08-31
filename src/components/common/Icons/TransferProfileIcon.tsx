import type { IconProps } from '@/types/types';

export const TransferProfileIcon = ({ color, width, height }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		fill={color}
		aria-hidden='true'
		data-icon='ProfileArrowStandard'
		viewBox='0 0 24 24'
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M6 1a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h3.586l-1.293 1.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3-1.414 1.414L9.586 19H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v2h3a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.598 3.698c-.605.452-1.644.802-2.902.802s-2.297-.35-2.902-.802l-1.196 1.604C10.43 14.568 11.919 15 13.5 15s3.07-.432 4.098-1.198z'
			clipRule='evenodd'
		></path>
	</svg>
);
