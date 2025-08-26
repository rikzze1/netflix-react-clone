import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import netflixLogo from '@/assets/logo/Netflix_Logo_RGB.png';
import userProfile from '@/assets/profile/user.png';
import userProfile2 from '@/assets/profile/user2.png';
import userProfile3 from '@/assets/profile/user3.png';
import userProfileKids from '@/assets/profile/kids_profile.png';

import { SearchIcon } from '@/components/Icons/SearchIcon';
import { NotificationIcon } from '@/components/Icons/NotificationIcon';
import { ManageProfileIcon } from '@/components/Icons/Profile';
import { TransferProfileIcon } from '@/components/Icons/TransferProfileIcon';
import { AccountIcon } from '@/components/Icons/AccountIcon';

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
	const [isSearchClick, setIsSearchClick] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);

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
			icon: <TransferProfileIcon color="white" height="20" width="20" />,
			label: 'Transfer Profile',
		},
		{
			icon: <AccountIcon color="white" height="20" width="20" />,
			label: 'Account',
		},
	];

	const returnToLogin = () => navigate('/browse');

	const searchToggle = () => setIsSearchClick(!isSearchClick);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node)
			) {
				setIsSearchClick(false);
			}
		};

		if (isSearchClick) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isSearchClick]);

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
				<div className="item" ref={searchRef}>
					{isSearchClick ? (
						<div id="search-input">
							<SearchIcon
								color="#fefefe"
								height="18"
								width="18"
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
								height="18"
								width="18"
							/>
						</button>
					)}
				</div>
				<a className="item" href="/">
					Kids
				</a>
				<div className="item">
					<NotificationIcon color="#fefefe" height="20" width="20" />
				</div>
				<div className="item">
					<img
						src={userProfile}
						alt="user"
						style={{ borderRadius: '4px' }}
					/>
					<span
						className="caret-down"
						style={{ color: 'white' }}
					></span>
					<div className="item__settings" data-settings="hidden">
						<div className="profiles">
							{profiles.map((item, index) => (
								<div key={index} className="profiles__item">
									<img src={item.route} alt={item.label} />
									<span>
										<a href="/browse">{item.label}</a>
									</span>
								</div>
							))}
							{settings.map((item, index) => (
								<div key={index} className="profile__settings">
									{item.icon}
									<span>
										<a href="/browse">{item.label}</a>
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
