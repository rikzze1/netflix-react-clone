import { useRef } from 'react';
import type { MovieResponse } from '@/types/types';

import { useContent } from '@/services/tmdb/queries/content.query';
import { useTopRank } from '@/services/tmdb/queries/top-rank.query';

import { MovieCard } from '@/components/common/Card/MovieCard/MovieCard';
import { MovieSkeleton } from '@/components/common/SkeletonLoader/MovieSkeleton/MovieSkeleton';
import { ArrowIcon } from '@/components/common/Icons/ArrowIcon';

import './Movies.scss';

interface MoviesProps {
	type: 'movie' | 'tv';
	isTopRank?: boolean;
	title: string;
	genres: string[];
}

export const Movies = ({
	title: cardHeader,
	isTopRank = false,
	genres,
	type,
}: MoviesProps) => {
	const SKELETON_LENGTH = 10;
	const scrollRef = useRef<HTMLDivElement>(null);

	const { data: MoviesData, isSuccess: isSuccessMoviesData } = useContent({
		type,
		genres: [...genres],
	});

	const { data: topRankData, isSuccess: isSuccessTopRank } = useTopRank();

	const actualData = isTopRank ? topRankData : MoviesData;
	const actualSuccess = isTopRank ? isSuccessTopRank : isSuccessMoviesData;

	const scrollLeft = () =>
		scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });

	const scrollRight = () =>
		scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

	return (
		<>
			{!actualSuccess || !actualData ? (
				<div className='card'>
					<div className='card__list'>
						<MovieSkeleton length={SKELETON_LENGTH} />
					</div>
				</div>
			) : (
				<div className='card'>
					<h2 className='card__title'>{cardHeader}</h2>
					<div className='card__list' ref={scrollRef}>
						{actualData?.results.map((item: MovieResponse) => {
							const { id, backdrop_path } = item;
							const title =
								item.original_name ?? item.original_title;

							return (
								<div key={id}>
									<MovieCard
										id={id}
										type={type}
										title={title}
										backdrop_path={backdrop_path}
									/>
								</div>
							);
						})}
					</div>
					<button
						onClick={scrollLeft}
						className='card__list--left-caret'
					>
						<ArrowIcon color='white' height='22' width='22' />
					</button>
					<button
						onClick={scrollRight}
						className='card__list--right-caret'
					>
						<ArrowIcon color='white' height='22' width='22' />
					</button>
				</div>
			)}
		</>
	);
};
