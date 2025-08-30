import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import netflixLogo from '@/assets/logo/Netflix_Logo_RGB.png';

import './Preloader.scss';

export const Preloader = () => {
	const navigate = useNavigate();

	const SEC_DELAY_TO_REDIRECT = 2000;

	useEffect(() => {
		const timeId = setTimeout(() => {
			navigate('/browse');
		}, SEC_DELAY_TO_REDIRECT);
		return () => clearTimeout(timeId);
	}, [navigate]);

	return (
		<div className="cover">
			<img id="cover__image" src={netflixLogo} alt="netflix" />
			<h1 className="cover__header">Clone</h1>
		</div>
	);
};
