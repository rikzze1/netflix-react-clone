import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Header } from '@/components/layout/Header/Header';
import { useMovieInfoStore } from '@/stores/header.store';

const meta = {
	component: Header,
	title: 'Layout/Header',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
				{/* Tall page so the header has something to scroll over */}
				<div style={{ height: '200vh' }} />
			</MemoryRouter>
		),
	],
	beforeEach: () => {
		window.scrollTo(0, 0);
		useMovieInfoStore.setState({ trackTrailerState: false });
	},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scrolled: Story = {
	play: async ({ canvasElement }) => {
		window.scrollTo(0, 200);

		await waitFor(() =>
			expect(canvasElement.querySelector('.header--scrolled')).toBeInTheDocument()
		);
	},
};

export const TrailerPlaying: Story = {
	beforeEach: () => {
		useMovieInfoStore.setState({ trackTrailerState: true });
	},
};

export const SearchOpen: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const searchButton = canvasElement.querySelector<HTMLElement>(
			'.header__right-menu .item button'
		);
		await userEvent.click(searchButton!);

		await expect(
			canvas.getByPlaceholderText('Titles, people, genres')
		).toBeInTheDocument();
	},
};

export const ProfileMenuOpen: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.hover(canvas.getByAltText('user'));

		await expect(
			await canvas.findByText('Sign out of Netflix')
		).toBeInTheDocument();
	},
};

export const Mobile: Story = {
	globals: {
		viewport: { value: 'mobile1', isRotated: false },
	},
};

export const MobileBrowseOpen: Story = {
	globals: {
		viewport: { value: 'mobile1', isRotated: false },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.hover(canvas.getByText('Browse'));

		await waitFor(() =>
			expect(
				canvasElement.querySelector('.header__nav-mobile ul')
			).toBeInTheDocument()
		);
	},
};
