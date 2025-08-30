import { useEffect, useState, useRef, type CSSProperties } from 'react';

import type { MovieResponse } from '@/types/types';
import { getTmdbImageUrl } from '@/util/getTmdbImageUrl';
import { getYoutubeEmbedUrl } from '@/util/getYoutubeEmbedUrl';

import { useRandomMovies } from '@/services/tmdb/queries/random-movies.query';
import { useMovieLogo } from '@/services/tmdb/queries/movie-logo.query';
import { useMovieTrailer } from '@/services/tmdb/queries/movie-trailer';

import { MoreInfoIcon } from '@/components/common/Icons/MoreInfoIcon';
import { ReplayIcon } from '@/components/common/Icons/ReplayIcon';
import { PlayIcon } from '@/components/common/Icons/PlayIcon';
import { NotMutedIcon } from '@/components/common/Icons/NotMutedIcon';
import { MutedIcon } from '@/components/common/Icons/MutedIcon';

import './Billboard.scss';

export const Billboard = () => {
	const movieTitleRef = useRef<HTMLImageElement>(null);
	const movieDescriptionRef = useRef<HTMLParagraphElement>(null);

	const MOVIE_BILLBOARD_INDEX = 5;
	const SEC_TO_END_VID = 40000;
	const SEC_DELAY_TO_PLAY_VID = 2000;

	const [movieInfo, setMovieInfo] = useState({
		isTrailerPlayed: false,
		isTrailerEnded: false,
		isMuted: true,
	});

	const state = {
		INITIAL: 'initial',
		SMALL: 'small',
	};

	const { data: movieData, isSuccess: isFetchMovieSuccess } =
		useRandomMovies();

	const { id, title, backdrop_path, overview }: MovieResponse =
		movieData?.results[MOVIE_BILLBOARD_INDEX] ?? {};

	const { data: movieLogo, isSuccess: isFetchMovieLogo } = useMovieLogo(
		movieData ? String(id) : ''
	);

	const logo = movieLogo?.logos[0]?.file_path ?? '';

	const { data: movieTrailer, isSuccess: isFetchMovieTrailer } =
		useMovieTrailer({ key: isFetchMovieSuccess ? String(id) : '' });

	const trailer = movieTrailer?.results?.find(
		(video: { type: string }) => video.type === 'Trailer'
	);

	const url = getYoutubeEmbedUrl({
		key: trailer?.key,
		mute: movieInfo.isMuted ? '1' : '0',
	});

	const setTractMovieState = (value: string) => {
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
		}, SEC_DELAY_TO_PLAY_VID);
	}, []);

	useEffect(() => {
		if (movieInfo.isTrailerPlayed && !movieInfo.isTrailerEnded) {
			const timer = setTimeout(() => {
				setMovieInfo(prev => ({
					...prev,
					isTrailerEnded: true,
				}));
				setTractMovieState(state.INITIAL);
			}, SEC_TO_END_VID);

			return () => clearTimeout(timer);
		}
	}, [movieInfo.isTrailerEnded, movieInfo.isTrailerPlayed, state.INITIAL]);

	const toggleMute = () => {
		setMovieInfo(prev => ({
			...prev,
			isMuted: !movieInfo.isMuted,
		}));

		if (movieInfo.isMuted) {
			setTractMovieState(state.SMALL);
		}
	};

	const toggleReplay = () => {
		setMovieInfo(prev => ({
			...prev,
			isTrailerPlayed: true,
			isTrailerEnded: false,
		}));

		setTractMovieState(state.INITIAL);
	};

	if (isFetchMovieSuccess && movieData)
		return (
			<div
				className="billboard"
				style={
					{
						'--billboard-backdrop': backdrop_path
							? `url("${getTmdbImageUrl(backdrop_path, 'ORIGINAL')}")`
							: 'none',
					} as CSSProperties
				}
			>
				{movieInfo.isTrailerPlayed && !movieInfo.isTrailerEnded && (
					<iframe
						width="100%"
						height="100%"
						title="trailer"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						src={isFetchMovieTrailer ? url : ''}
					/>
				)}
				<div className="billboard__info">
					{isFetchMovieLogo && movieLogo ? (
						<img
							className="billboard__title"
							data-state="initial"
							src={getTmdbImageUrl(logo, 'MEDIUM')}
							alt={title}
							ref={movieTitleRef}
						/>
					) : (
						<h3 className="billboard__fallback--title">{title}</h3>
					)}

					{overview && (
						<p
							className="billboard__description"
							data-state="initial"
							ref={movieDescriptionRef}
						>
							{overview}
						</p>
					)}
					<div className="billboard__buttons">
						<div className="left-items">
							<button>
								<PlayIcon
									color="black"
									width="24"
									height="24"
								/>
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
