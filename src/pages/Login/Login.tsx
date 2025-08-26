import userProfile from '@/assets/profile/user.png';
import userProfile2 from '@/assets/profile/user2.png';
import userProfile3 from '@/assets/profile/user3.png';
import userKids from '@/assets/profile/kids_profile.png';

import { useNavigate } from 'react-router';

import './Login.scss';

interface Profile {
	path: string;
	label: string;
	route: string;
}

const Login = () => {
	const navigate = useNavigate();

	const profiles: Profile[] = [
		{
			path: userProfile,
			label: 'You',
			route: '/home',
		},
		{
			path: userProfile2,
			label: 'Not you',
			route: '/browse',
		},
		{
			path: userProfile3,
			label: 'Someone',
			route: '/browse',
		},
		{
			path: userKids,
			label: 'Kids',
			route: '/browse',
		},
	];

	const redirectToHome = (route: string) => navigate(route);

	return (
		<div className="login">
			<h1 className="login__header">Who's watching?</h1>
			<div className="login__profile">
				{profiles.map((item, index) => {
					return (
						<button
							onClick={() => redirectToHome(item.route)}
							className="profile"
							key={index}
						>
							<img
								loading="lazy"
								src={item.path}
								alt={item.label}
							/>
							<p>{item.label}</p>
						</button>
					);
				})}
				<div className="profile--add">
					<div className="round-container">
						<span></span>
					</div>
					<p>Add Profile</p>
				</div>
			</div>
			<button className="button-profiles">Manage Profiles</button>
		</div>
	);
};

export default Login;
