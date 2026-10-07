import type { Meta, StoryObj } from '@storybook/react';

import { MovieSkeleton } from '@/components/common/SkeletonLoader/MovieSkeleton/MovieSkeleton';
import '@/components/common/Movies/Movies.scss';

const meta = {
	component: MovieSkeleton,
	title: 'Common/MovieSkeleton',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<div className='card' style={{ padding: '40px 48px' }}>
				<div className='card__list'>
					<Story />
				</div>
			</div>
		),
	],
	argTypes: {
		length: { control: { type: 'range', min: 1, max: 10 } },
	},
} satisfies Meta<typeof MovieSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
	args: {
		length: 10,
	},
};

export const Single: Story = {
	args: {
		length: 1,
	},
};
