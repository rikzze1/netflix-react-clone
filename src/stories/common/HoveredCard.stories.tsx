import type { Meta, StoryObj } from '@storybook/react';

import { HoveredCard } from '@/components/common/Card/HoveredCard/HoveredCard';

const meta = {
	component: HoveredCard,
	title: 'Common/HoveredCard',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<div style={{ height: '100vh' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof HoveredCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'The Office',
		backdrop_path: '/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg',
		position: { x: 400, y: 300 },
		isCardHovered: true,
	},
};

export const NoBackdrop: Story = {
	args: {
		...Default.args,
		backdrop_path: undefined,
	},
};
