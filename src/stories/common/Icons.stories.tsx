import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import type { IconProps } from '@/types/types';
import { AccountIcon } from '@/components/common/Icons/AccountIcon';
import { AddIcon } from '@/components/common/Icons/AddIcon';
import { ArrowIcon } from '@/components/common/Icons/ArrowIcon';
import { DownArrowIcon } from '@/components/common/Icons/DownArrowIcon';
import { HelpCenterIcon } from '@/components/common/Icons/HelpCenterIcon';
import { MoreInfoIcon } from '@/components/common/Icons/MoreInfoIcon';
import { MutedIcon } from '@/components/common/Icons/MutedIcon';
import { NotificationIcon } from '@/components/common/Icons/NotificationIcon';
import { NotMutedIcon } from '@/components/common/Icons/NotMutedIcon';
import { PlayIcon } from '@/components/common/Icons/PlayIcon';
import { ManageProfileIcon } from '@/components/common/Icons/Profile';
import { ReplayIcon } from '@/components/common/Icons/ReplayIcon';
import { SearchIcon } from '@/components/common/Icons/SearchIcon';
import { ThumbsUpIcon } from '@/components/common/Icons/ThumbsUpIcon';
import { TransferProfileIcon } from '@/components/common/Icons/TransferProfileIcon';
import { FacebookIcon } from '@/components/common/Icons/Socials/FacebookIcon';
import { InstagramIcon } from '@/components/common/Icons/Socials/InstagramIcon';
import { XIcon } from '@/components/common/Icons/Socials/Xicon';
import { YoutubeIcon } from '@/components/common/Icons/Socials/YouttubeIcon';
import { RANKS_ICON } from '@/util/getRankIcon';

const ICONS: Record<string, ComponentType<IconProps>> = {
	AccountIcon,
	AddIcon,
	ArrowIcon,
	DownArrowIcon,
	HelpCenterIcon,
	ManageProfileIcon,
	MoreInfoIcon,
	MutedIcon,
	NotificationIcon,
	NotMutedIcon,
	PlayIcon,
	ReplayIcon,
	SearchIcon,
	ThumbsUpIcon,
	TransferProfileIcon,
};

const SOCIAL_ICONS: Record<string, ComponentType<IconProps>> = {
	FacebookIcon,
	InstagramIcon,
	XIcon,
	YoutubeIcon,
};

const IconGrid = ({
	icons,
	...iconProps
}: IconProps & { icons: Record<string, ComponentType<IconProps>> }) => (
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
			gap: '24px',
			padding: '24px',
		}}
	>
		{Object.entries(icons).map(([name, Icon]) => (
			<div
				key={name}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '8px',
					color: 'white',
					fontSize: '12px',
				}}
			>
				<Icon {...iconProps} />
				<span>{name}</span>
			</div>
		))}
	</div>
);

const meta = {
	title: 'Common/Icons',
	component: IconGrid,
	args: {
		icons: ICONS,
		color: 'white',
		width: '32',
		height: '32',
	},
	argTypes: {
		color: { control: 'color' },
		icons: { table: { disable: true } },
	},
} satisfies Meta<typeof IconGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interface: Story = {};

export const Socials: Story = {
	args: {
		icons: SOCIAL_ICONS,
	},
};

export const Ranks: Story = {
	args: {
		icons: Object.fromEntries(
			RANKS_ICON.map((Icon, index) => [`Rank${index + 1}Icon`, Icon])
		),
		color: undefined,
		width: '145',
		height: '206',
	},
};
