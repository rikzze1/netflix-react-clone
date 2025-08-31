import { useRef } from 'react';
import type { MovieResponse } from '@/types/types';

import { TMDB_GENRE_CONFIG } from '@/services/tmdb/constants';
import { useMovieList } from '@/services/tmdb/queries/movie-list';

import { MovieCard } from '@/components/common/Card/MovieCard/MovieCard';
import { MovieSkeleton } from '@/components/common/SkeletonLoader/MovieSkeleton/MovieSkeleton';
import { ArrowIcon } from '@/components/common/Icons/ArrowIcon';

import './Captivating.scss';

export const CaptivatingList = ({ title }: { title: string }) => {
	const SKELETON_LENGTH = 10;
	const scrollRef = useRef<HTMLDivElement>(null);

	const { data: randomMoviesData, isSuccess: isSuccessRandomMovies } =
		useMovieList({
			genres: [
				TMDB_GENRE_CONFIG.DRAMA,
				TMDB_GENRE_CONFIG.SCIENCE_FICTION,
			],
		});

	const scrollLeft = () =>
		scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });

	const scrollRight = () =>
		scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

	return (
		<>
			{!isSuccessRandomMovies || !randomMoviesData ? (
				<div className='card'>
					<div className='card__list'>
						<MovieSkeleton length={SKELETON_LENGTH} />
					</div>
				</div>
			) : (
				<div className='card'>
					<h2 className='card__title'>{title}</h2>
					<div className='card__list' ref={scrollRef}>
						{randomMoviesData?.results.map(
							({ id, title, backdrop_path }: MovieResponse) => (
								<div key={id}>
									<MovieCard
										id={id}
										title={title}
										backdrop_path={backdrop_path}
									/>
								</div>
							)
						)}
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
