import type { CSSProperties, ComponentType } from 'react';
import clsx from 'clsx';
import { useIntersectionObserver } from 'usehooks-ts';

import type { MovieResponse } from '@/types/types';
import { useLogo } from '@/services/tmdb/queries/logo.query';
import { getTmdbImageUrl } from '@/util/getTmdbImageUrl';
import { RANKS_ICON } from '@/util/getRankIcon';

interface TopRankProps {
	RankComponent: ComponentType;
	intersectionRef: (node?: Element | null) => void;
	hasBackdropAndIntersected: boolean | string;
	backdrop_path: string;
	hasDataAndIntersected: boolean;
	isIntersecting: boolean;
	movieLogoData: { logos: Array<{ file_path: string }> } | undefined;
	logo: string;
	title: string | undefined;
}

const TopRank = ({
	RankComponent,
	intersectionRef,
	hasBackdropAndIntersected,
	backdrop_path,
	hasDataAndIntersected,
	isIntersecting,
	movieLogoData,
	logo,
	title,
}: TopRankProps) => {
	return (
		<div className='rank'>
			<div className='rank__item'>
				<RankComponent />
			</div>
			<div
				className='card__poster card__poster--top-rank'
				ref={intersectionRef}
				style={
					{
						'--card-backdrop': hasBackdropAndIntersected
							? `url(${getTmdbImageUrl(backdrop_path, 'ORIGINAL')})`
							: '',
					} as CSSProperties
				}
			>
				<div
					className={clsx(
						'card__logo',
						'card__logo--top-rank',
						hasDataAndIntersected && 'card__logo--loaded'
					)}
					style={
						{
							'--card-logo':
								isIntersecting &&
								movieLogoData?.logos[1]?.file_path
									? `url(${getTmdbImageUrl(movieLogoData?.logos[1]?.file_path, 'MEDIUM')})`
									: '',
						} as CSSProperties
					}
				>
					{!logo && isIntersecting && (
						<span className='logo-title'>{title}</span>
					)}
				</div>
			</div>
		</div>
	);
};

export const MovieCard = ({
	id = 8,
	title,
	isTopRank,
	rankIndex = 0,
	backdrop_path,
	type,
}: MovieResponse & {
	type: 'movie' | 'tv';
	isTopRank: boolean;
	rankIndex?: number;
}) => {
	const { isIntersecting, ref: intersectionRef } = useIntersectionObserver();

	const { data: movieLogoData, isSuccess: isSuccessMovieLogo } = useLogo({
		type,
		id: String(id),
		hasIntersected: isIntersecting,
	});

	const logo = movieLogoData?.logos[1]?.file_path ?? '';

	const RankComponent = RANKS_ICON[rankIndex];

	const hasDataAndIntersected =
		isIntersecting && isSuccessMovieLogo && movieLogoData;

	const hasBackdropAndIntersected = isIntersecting && backdrop_path;

	return (
		<>
			{!isTopRank ? (
				<div
					className='card__poster'
					ref={intersectionRef}
					style={
						{
							'--card-backdrop': hasBackdropAndIntersected
								? `url(${getTmdbImageUrl(backdrop_path, 'ORIGINAL')})`
								: '',
						} as CSSProperties
					}
				>
					<div
						className={clsx(
							'card__logo',
							hasDataAndIntersected && 'card__logo--loaded'
						)}
						style={
							{
								'--card-logo':
									isIntersecting &&
									movieLogoData?.logos[1]?.file_path
										? `url(${getTmdbImageUrl(movieLogoData?.logos[1]?.file_path, 'MEDIUM')})`
										: '',
							} as CSSProperties
						}
					>
						{!logo && isIntersecting && (
							<span className='logo-title'>{title}</span>
						)}
					</div>
				</div>
			) : (
				<TopRank
					RankComponent={RankComponent}
					intersectionRef={intersectionRef}
					hasBackdropAndIntersected={hasBackdropAndIntersected}
					backdrop_path={backdrop_path}
					hasDataAndIntersected={hasDataAndIntersected}
					isIntersecting={isIntersecting}
					movieLogoData={movieLogoData}
					logo={logo}
					title={title}
				/>
			)}
		</>
	);
};
