import type { Meta, StoryObj } from '@storybook/react';

import { SuspenseFallback } from '@/components/common/SuspenseFallback/SuspenseFallback';

const meta = {
	component: SuspenseFallback,
	title: 'Common/SuspenseFallback',
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof SuspenseFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
