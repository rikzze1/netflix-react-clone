import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@/components/layout/Footer/Footer';

const meta = {
	component: Footer,
	title: 'Layout/Footer',
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
	globals: {
		viewport: { value: 'mobile1', isRotated: false },
	},
};
