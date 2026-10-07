import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { expect, userEvent, waitFor } from 'storybook/test';

import { MovieCard } from '@/components/common/Card/MovieCard/MovieCard';
import '@/components/common/Movies/Movies.scss';

type StoryProps = ComponentProps<typeof MovieCard>;

const meta = {
	component: MovieCard,
	title: 'Common/MovieCard',
	decorators: [
		(Story) => (
			<div style={{ display: 'flex', padding: '240px 260px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		isTopRank: { control: 'boolean' },
	},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 2316,
		title: 'The Office',
		isTopRank: false,
		rankIndex: 1,
		backdrop_path: '/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg',
		type: 'movie',
	},
};

export const Hovered: Story = {
	args: Default.args,
	play: async ({ canvasElement }) => {
		const card = canvasElement.querySelector<HTMLElement>('.card__poster');
		await userEvent.hover(card!);

		await waitFor(() =>
			expect(document.querySelector('.hover-card.visible')).toBeInTheDocument()
		);
	},
};
