import { useEffect, useState, useRef, type CSSProperties } from 'react';

import type { MovieResponse, TmdbImage } from '@/types/types';
import { getTmdbImageUrl } from '@/util/getTmdbImageUrl';
import { getYoutubeEmbedUrl } from '@/util/getYoutubeEmbedUrl';
import { useMovieInfoStore } from '@/stores/header.store';

import { useRandomMovies } from '@/services/tmdb/queries/random-movies.query';
import { useMovieLogo } from '@/services/tmdb/queries/movie-logo.query';
import { useMovieTrailer } from '@/services/tmdb/queries/movie-trailer';

import { MoreInfoIcon } from '@/components/common/Icons/MoreInfoIcon';
import { ReplayIcon } from '@/components/common/Icons/ReplayIcon';
import { PlayIcon } from '@/components/common/Icons/PlayIcon';
import { NotMutedIcon } from '@/components/common/Icons/NotMutedIcon';
import { MutedIcon } from '@/components/common/Icons/MutedIcon';

import './Billboard.scss';

const MOVIE_BILLBOARD_INDEX = 5;
const SEC_TO_END_VID = 60000;
const SEC_DELAY_TO_PLAY_VID = 3000;

const STATES = {
	INITIAL: 'initial',
	SMALL: 'small',
} as const;

const BillboardTitle = ({
	isFetchMovieLogo,
	movieLogo,
	logo,
	title,
	movieTitleRef,
}: {
	isFetchMovieLogo: boolean;
	movieLogo: TmdbImage;
	logo: string;
	title?: string;
	movieTitleRef: React.RefObject<HTMLImageElement | null>;
}) => {
	if (isFetchMovieLogo && movieLogo) {
		return (
			<img
				className='billboard__title'
				data-state='initial'
				src={getTmdbImageUrl(logo, 'MEDIUM')}
				alt={title}
				ref={movieTitleRef}
			/>
		);
	}

	return <h3 className='billboard__fallback--title'>{title}</h3>;
};

const BillboardDescription = ({
	overview,
	movieDescriptionRef,
}: {
	overview?: string;
	movieDescriptionRef: React.RefObject<HTMLParagraphElement | null>;
}) => {
	if (!overview) return null;

	return (
		<p
			className='billboard__description'
			data-state='initial'
			ref={movieDescriptionRef}
		>
			{overview}
		</p>
	);
};

const MuteButton = ({
	isMuted,
	onToggleMute,
}: {
	isMuted: boolean;
	onToggleMute: () => void;
}) => (
	<button onClick={onToggleMute}>
		{isMuted ? (
			<MutedIcon color='white' width='20' height='20' />
		) : (
			<NotMutedIcon color='white' width='20' height='20' />
		)}
	</button>
);

const ReplayButton = ({ onToggleReplay }: { onToggleReplay: () => void }) => (
	<button onClick={onToggleReplay}>
		<ReplayIcon color='white' width='20' height='20' />
	</button>
);

const RightControls = ({
	movieInfo,
	onToggleMute,
	onToggleReplay,
}: {
	movieInfo: {
		isTrailerPlayed: boolean;
		isTrailerEnded: boolean;
		isMuted: boolean;
	};
	onToggleMute: () => void;
	onToggleReplay: () => void;
}) => {
	const showMuteButton =
		movieInfo.isTrailerPlayed && !movieInfo.isTrailerEnded;
	const showReplayButton = movieInfo.isTrailerEnded;

	return (
		<>
			{showMuteButton && (
				<MuteButton
					isMuted={movieInfo.isMuted}
					onToggleMute={onToggleMute}
				/>
			)}
			{showReplayButton && (
				<ReplayButton onToggleReplay={onToggleReplay} />
			)}
			<div className='rating'>
				<span>16+</span>
			</div>
		</>
	);
};

export const Billboard = () => {
	const movieTitleRef = useRef<HTMLImageElement>(null);
	const movieDescriptionRef = useRef<HTMLParagraphElement>(null);

	const [movieInfo, setMovieInfo] = useState({
		isTrailerPlayed: false,
		isTrailerEnded: false,
		isMuted: true,
	});

	const { setTrackTrailerState: setGlobalTrailerState } = useMovieInfoStore();

	const { data: movieData, isSuccess: isFetchMovieSuccess } =
		useRandomMovies();

	const { id, title, backdrop_path, overview }: MovieResponse =
		movieData?.results[MOVIE_BILLBOARD_INDEX] ?? {};

	const { data: movieLogo, isSuccess: isFetchMovieLogo } = useMovieLogo(
		movieData ? String(id) : ''
	);

	const logo = movieLogo?.logos[0]?.file_path ?? '';

	const { data: movieTrailer, isSuccess: isFetchMovieTrailer } =
		useMovieTrailer({
			key: isFetchMovieSuccess ? String(id) : '',
		});

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
		setMovieInfo(prev => ({ ...prev, isTrailerPlayed: false }));
		setGlobalTrailerState(false);

		const timeId = setTimeout(() => {
			setMovieInfo(prev => ({ ...prev, isTrailerPlayed: true }));
			setGlobalTrailerState(true);
		}, SEC_DELAY_TO_PLAY_VID);

		return () => clearTimeout(timeId);
	}, [setGlobalTrailerState]);

	useEffect(() => {
		if (movieInfo.isTrailerPlayed && !movieInfo.isTrailerEnded) {
			const timer = setTimeout(() => {
				setMovieInfo(prev => ({ ...prev, isTrailerEnded: true }));
				setGlobalTrailerState(false);
				setTractMovieState(STATES.INITIAL);
			}, SEC_TO_END_VID);

			return () => clearTimeout(timer);
		}
	}, [
		movieInfo.isTrailerEnded,
		movieInfo.isTrailerPlayed,
		setGlobalTrailerState,
	]);

	const toggleMute = () => {
		setMovieInfo(prev => ({ ...prev, isMuted: !movieInfo.isMuted }));
		if (movieInfo.isMuted) {
			setTractMovieState(STATES.SMALL);
		}
	};

	const toggleReplay = () => {
		setMovieInfo(prev => ({
			...prev,
			isTrailerPlayed: true,
			isTrailerEnded: false,
		}));
		setGlobalTrailerState(true);
		setTractMovieState(STATES.INITIAL);
	};

	const shouldShowTrailer =
		movieInfo.isTrailerPlayed && !movieInfo.isTrailerEnded;

	const backdropStyle = {
		'--billboard-backdrop': backdrop_path
			? `url("${getTmdbImageUrl(backdrop_path, 'ORIGINAL')}")`
			: 'none',
	} as CSSProperties;

	if (!isFetchMovieSuccess || !movieData) return null;

	return (
		<div className='billboard' style={backdropStyle}>
			{shouldShowTrailer && (
				<iframe
					width='100%'
					height='100%'
					title='trailer'
					frameBorder='0'
					allow='autoplay; encrypted-media'
					src={isFetchMovieTrailer ? url : ''}
				/>
			)}
			<div className='billboard__info'>
				<BillboardTitle
					isFetchMovieLogo={isFetchMovieLogo}
					movieLogo={movieLogo}
					logo={logo}
					title={title}
					movieTitleRef={movieTitleRef}
				/>
				<BillboardDescription
					overview={overview}
					movieDescriptionRef={movieDescriptionRef}
				/>
				<div className='billboard__buttons'>
					<div className='left-items'>
						<button>
							<PlayIcon color='black' width='24' height='24' />
							Play
						</button>
						<button>
							<MoreInfoIcon
								color='white'
								width='24'
								height='24'
							/>
							More Info
						</button>
					</div>
					<div className='right-items'>
						<RightControls
							movieInfo={movieInfo}
							onToggleMute={toggleMute}
							onToggleReplay={toggleReplay}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
