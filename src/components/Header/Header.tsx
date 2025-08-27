import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import netflixLogo from '@/assets/logo/Netflix_Logo_RGB.png';
import userProfile from '@/assets/profile/user.png';
import userProfile2 from '@/assets/profile/user2.png';
import userProfile3 from '@/assets/profile/user3.png';
import userProfileKids from '@/assets/profile/kids_profile.png';

import { useEventMouseLeave } from '@/hooks/useEventMouseLeave';

import { SearchIcon } from '@/components/Icons/SearchIcon';
import { NotificationIcon } from '@/components/Icons/NotificationIcon';
import { ManageProfileIcon } from '@/components/Icons/Profile';
import { TransferProfileIcon } from '@/components/Icons/TransferProfileIcon';
import { AccountIcon } from '@/components/Icons/AccountIcon';
import { HelpCenterIcon } from '@/components/Icons/HelpCenterIcon';

import './Header.scss';

interface Menu {
	label: string;
	route: string;
}

interface Settings {
	icon: React.ReactElement;
	label: string;
}

export const Header = () => {
	const navigate = useNavigate();
	const profileRef = useRef<HTMLDivElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);

	const [isSearchClick, setIsSearchClick] = useState(false);
	const [isProfileClick, setIsProfileClick] = useState(false);

	const menu: Menu[] = [
		{
			label: 'Home',
			route: '',
		},
		{
			label: 'TV Shows',
			route: '',
		},
		{
			label: 'Movies',
			route: '',
		},
		{
			label: 'Genres',
			route: '',
		},
		{
			label: 'New & Popular',
			route: '',
		},
		{
			label: 'My List',
			route: '',
		},
		{
			label: 'Browse by Languages',
			route: '',
		},
	];

	const profiles: Menu[] = [
		{
			label: 'Not you',
			route: userProfile2,
		},
		{
			label: 'Someone',
			route: userProfile3,
		},
		{
			label: 'Kids',
			route: userProfileKids,
		},
	];

	const settings: Settings[] = [
		{
			icon: <ManageProfileIcon color="white" height="20" width="20" />,
			label: 'Manage Profiles',
		},
		{
			icon: (
				<TransferProfileIcon
					color="whitesmoke"
					height="20"
					width="20"
				/>
			),
			label: 'Transfer Profile',
		},
		{
			icon: <AccountIcon color="white" height="20" width="20" />,
			label: 'Account',
		},
		{
			icon: <HelpCenterIcon color="white" height="20" width="20" />,
			label: 'Help Center',
		},
	];

	const returnToLogin = () => navigate('/browse');
	const searchToggle = () => setIsSearchClick(!isSearchClick);
	const profileSettingsToggle = () => setIsProfileClick(!isProfileClick);

	const handleProfileMouseEnter = () => {
		setIsProfileClick(true);
	};

	const handleProfileMouseLeave = () => {
		setIsProfileClick(false);
		setIsSearchClick(false);
	};

	useEventMouseLeave({
		element: profileRef,
		relatedTarget: '.item__settings',
		onMouseEnter: handleProfileMouseEnter,
		onMouseLeave: handleProfileMouseLeave,
	});

	return (
		<nav className="header">
			<div className="header__left-menu">
				<button className="header__logo" onClick={returnToLogin}>
					<img src={netflixLogo} alt="Netflix Logo" />
				</button>
				<ul className="header__nav-list">
					{menu.map((item, index) => {
						return <li key={index}>{item.label}</li>;
					})}
				</ul>
			</div>
			<div className="header__right-menu">
				<div className="item">
					{isSearchClick ? (
						<div id="search-input" ref={searchRef}>
							<SearchIcon
								color="#fefefe"
								height="22"
								width="22"
							/>
							<input
								type="text"
								placeholder="Titles, people, genres"
							/>
						</div>
					) : (
						<button onClick={searchToggle}>
							<SearchIcon
								color="#fefefe"
								height="22"
								width="22"
							/>
						</button>
					)}
				</div>
				<a className="item" href="/">
					Kids
				</a>
				<div className="item">
					<NotificationIcon color="#fefefe" height="22" width="22" />
				</div>
				<div className="item" ref={profileRef}>
					<button onClick={profileSettingsToggle}>
						<img
							src={userProfile}
							alt="user"
							style={{ borderRadius: '4px' }}
						/>
					</button>
					<span
						className="caret-down"
						style={{ color: 'white' }}
					></span>
					{isProfileClick && (
						<div className="item__settings">
							<div className="profiles">
								{profiles.map((item, index) => (
									<div key={index} className="profiles__item">
										<img
											src={item.route}
											alt={item.label}
										/>
										<span>
											<a href="/browse">{item.label}</a>
										</span>
									</div>
								))}
								{settings.map((item, index) => (
									<div
										key={index}
										className="profile__settings"
									>
										{item.icon}
										<span>
											<a href="/browse">{item.label}</a>
										</span>
									</div>
								))}
								<div className="separator"></div>
								<div className="signout">
									<a href="/browse">Sign out of Netflix</a>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
