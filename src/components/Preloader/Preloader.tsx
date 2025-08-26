import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import netflixLogo from '@/assets/logo/Netflix_Logo_RGB.png';

import './Preloader.scss';

export const Preloader = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timeId = setTimeout(() => {
			navigate('/browse');
		}, 2000);
		return () => clearTimeout(timeId);
	}, [navigate]);

	return (
		<div className="cover">
			<img id="cover__image" src={netflixLogo} alt="netflix" />
			<h1 className="cover__header">Clone</h1>
		</div>
	);
};
