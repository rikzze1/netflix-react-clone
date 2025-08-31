import type { MovieResponse } from '@/types/types';

import { TMDB_GENRE_CONFIG } from '@/services/tmdb/constants';
import { useMovieList } from '@/services/tmdb/queries/movie-list';

import { MovieCard } from '@/components/common/Card/MovieCard/MovieCard';
import { MovieSkeleton } from '@/components/common/SkeletonLoader/MovieSkeleton/MovieSkeleton';

import './Captivating.scss';

export const CaptivatingList = () => {
	const { data: randomMoviesData, isSuccess: isSuccessRandomMovies } =
		useMovieList({
			genres: [TMDB_GENRE_CONFIG.THRILLER, TMDB_GENRE_CONFIG.HORROR],
		});

	const SKELETON_NUM = 10;

	console.log('🔍 Debug:', {
		isSuccessRandomMovies,
		hasData: !!randomMoviesData,
	});

	return (
		<>
			{isSuccessRandomMovies && randomMoviesData ? (
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
					</div>
				</div>
			)}
		</>
	);
};
