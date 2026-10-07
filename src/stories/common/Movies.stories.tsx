import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { expect, userEvent, waitFor } from 'storybook/test';

import { Movies } from '@/components/common/Movies/Movies';
import { TMDB_MOVIE_GENRE, TMDB_TV_GENRE } from '@/services/tmdb/constants';
import type { MovieResponse } from '@/types/types';

import { MOVIES, TOP_10, TV_SHOWS } from '../mocks/tmdb';

const createMockClient = ({
	type,
	genres,
	results,
	topRank,
}: {
	type: 'movie' | 'tv';
	genres: string[];
	results?: MovieResponse[];
	topRank?: MovieResponse[];
}) => {
	// Queries without seeded data stay pending forever instead of hitting TMDB
	const client = new QueryClient({
		defaultOptions: { queries: { enabled: false, retry: false } },
	});

	if (results) client.setQueryData([type, genres], { results });
	if (topRank) client.setQueryData(['top-rank10'], { results: topRank });

	[...(results ?? []), ...(topRank ?? [])].forEach(({ id }) => {
		client.setQueryData([`${type}-logo`, String(id)], { logos: [] });
	});

	return client;
};

const meta = {
	component: Movies,
	title: 'Common/Movies',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story, { args, parameters }) => (
			<QueryClientProvider
				client={createMockClient({
					type: args.type,
					genres: args.genres,
					results: parameters.mockResults,
					topRank: parameters.mockTopRank,
				})}
			>
				<div style={{ padding: '40px 48px' }}>
					<Story />
				</div>
			</QueryClientProvider>
		),
	],
} satisfies Meta<typeof Movies>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TVShows: Story = {
	args: {
		title: 'Comedy TV Shows',
		type: 'tv',
		genres: [TMDB_TV_GENRE.COMEDY],
	},
	parameters: {
		mockResults: TV_SHOWS,
	},
};

export const MoviesRow: Story = {
	name: 'Movies',
	args: {
		title: 'Sci-Fi Movies',
		type: 'movie',
		genres: [TMDB_MOVIE_GENRE.SCIENCE_FICTION],
	},
	parameters: {
		mockResults: MOVIES,
	},
};

export const TopRank: Story = {
	args: {
		title: 'Top 10 Movies Today',
		type: 'movie',
		genres: [],
		isTopRank: true,
	},
	parameters: {
		mockTopRank: TOP_10,
	},
};

export const Loading: Story = {
	args: {
		title: 'Comedy TV Shows',
		type: 'tv',
		genres: [TMDB_TV_GENRE.COMEDY],
	},
};

export const CardHovered: Story = {
	...TVShows,
	play: async ({ canvasElement }) => {
		const card = canvasElement.querySelector<HTMLElement>('.card__poster');
		await userEvent.hover(card!);

		await waitFor(() =>
			expect(document.querySelector('.hover-card.visible')).toBeInTheDocument()
		);
	},
};
