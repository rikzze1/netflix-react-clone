import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { Preloader } from '@/components/layout/Preloader/Preloader';

const meta = {
	component: Preloader,
	title: 'Layout/Preloader',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		// Preloader redirects to /browse after 2s; MemoryRouter keeps that inside the story
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
} satisfies Meta<typeof Preloader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
