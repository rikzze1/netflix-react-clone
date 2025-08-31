import type { MovieResponse } from '@/types/types';

import { TMDB_GENRE_CONFIG } from '@/services/tmdb/constants';
import { useMovieList } from '@/services/tmdb/queries/movie-list';

import { MovieCard } from '@/components/common/Card/MovieCard/MovieCard';
import { MovieSkeleton } from '@/components/common/SkeletonLoader/MovieSkeleton/MovieSkeleton';

import './Captivating.scss';
import { ArrowIcon } from '@/components/common/Icons/ArrowIcon';

export const CaptivatingList = () => {
	const { data: randomMoviesData, isSuccess: isSuccessRandomMovies } =
		useMovieList({
			genres: [TMDB_GENRE_CONFIG.THRILLER, TMDB_GENRE_CONFIG.HORROR],
		});

	const SKELETON_NUM = 10;

	return (
		<>
			{!isSuccessRandomMovies || !randomMoviesData ? (
				<div className='card'>
					<div className='card__list'>
						<MovieSkeleton length={SKELETON_NUM} />
					</div>
				</div>
			) : (
				<div className='card'>
					<h2 className='card__title'>So Completely Captivating</h2>
					<div className='card__list'>
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
						<button className='card__list--left-caret'>
							<ArrowIcon color='white' height='22' width='22' />
						</button>
						<button className='card__list--right-caret'>
							<ArrowIcon color='white' height='22' width='22' />
						</button>
					</div>
				</div>
			)}
		</>
	);
};
