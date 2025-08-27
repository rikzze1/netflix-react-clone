import { useEffect, useState, useRef } from 'react';

import billboardImage from '@/assets/Billboard/title.png';

import { MoreInfoIcon } from '@/components/Icons/MoreInfoIcon';
import { ReplayIcon } from '@/components/Icons/ReplayIcon';
import { PlayIcon } from '@/components/Icons/PlayIcon';
import { NotMutedIcon } from '@/components/Icons/NotMutedIcon';
import { MutedIcon } from '@/components/Icons/MutedIcon';

import './Billboard.scss';

export const Billboard = () => {
	const movieTitleRef = useRef<HTMLImageElement>(null);
	const movieDescriptionRef = useRef<HTMLParagraphElement>(null);

	const [movieInfo, setMovieInfo] = useState({
		isTrailerPlayed: false,
		isTrailerEnded: false,
		isMuted: true,
	});

	const state = {
		INITIAL: 'initial',
		SMALL: 'small',
	};

	const trackMovieState = (value: string) => {
		if (movieTitleRef.current && movieDescriptionRef.current) {
			movieTitleRef.current.dataset.state = value;
			movieDescriptionRef.current.dataset.state = value;
		}
	};

	useEffect(() => {
		setMovieInfo(prev => ({
			...prev,
			isTrailerPlayed: false,
		}));
		const timeId = setTimeout(() => {
			setMovieInfo(prev => ({
				...prev,
				isTrailerPlayed: true,
			}));
			return () => {
				clearTimeout(timeId);
			};
		}, 2000);
	}, []);

	const toggleMute = () => {
		setMovieInfo(prev => ({
			...prev,
			isMuted: !movieInfo.isMuted,
		}));

		if (movieInfo.isMuted) {
			trackMovieState(state.SMALL);
		}
	};

	const toggleReplay = () => {
		setMovieInfo(prev => ({
			...prev,
			isTrailerPlayed: true,
			isTrailerEnded: false,
		}));

		trackMovieState(state.INITIAL);
	};

	return (
		<div className="billboard">
			{movieInfo.isTrailerPlayed && !movieInfo.isTrailerEnded && (
				<video
					width="100%"
					height="auto"
					autoPlay
					muted={movieInfo.isMuted}
					playsInline
					poster={billboardImage}
					onEnded={() => {
						setMovieInfo(prev => ({
							...prev,
							isTrailerEnded: true,
						}));

						trackMovieState(state.INITIAL);
					}}
				>
					<source src="/trailer/trailer.mp4" type="video/mp4" />
				</video>
			)}
			<div className="billboard__info">
				<img
					className="billboard__title"
					data-state="initial"
					src={billboardImage}
					alt="Billboard"
					ref={movieTitleRef}
				/>
				<p
					className="billboard__description"
					data-state="initial"
					ref={movieDescriptionRef}
				>
					Still on the run, journalist Eddie Brock and his alien
					companion Venom dodge threats from a vigilant military
					leader and ruthless invading symbiotes.
				</p>
				<div className="billboard__buttons">
					<div className="left-items">
						<button>
							<PlayIcon color="black" width="24" height="24" />
							Play
						</button>
						<button>
							<MoreInfoIcon
								color="white"
								width="24"
								height="24"
							/>
							More Info
						</button>
					</div>
					<div className="right-items">
						{movieInfo.isTrailerPlayed &&
						!movieInfo.isTrailerEnded ? (
							<button onClick={toggleMute}>
								{movieInfo.isMuted ? (
									<MutedIcon
										color="white"
										width="20"
										height="20"
									/>
								) : (
									<NotMutedIcon
										color="white"
										width="20"
										height="20"
									/>
								)}
							</button>
						) : (
							movieInfo.isTrailerEnded && (
								<button onClick={toggleReplay}>
									<ReplayIcon
										color="white"
										width="20"
										height="20"
									/>
								</button>
							)
						)}
						<div className="rating">
							<span>16+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
