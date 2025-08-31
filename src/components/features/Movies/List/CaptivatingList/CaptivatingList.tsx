import type { MovieResponse } from '@/types/types';
import { useMovieList } from '@/services/tmdb/queries/movie-list';

import { MovieCard } from '@/components/common/Card/MovieCard/MovieCard';

import './Captivating.scss';

export const CaptivatingList = () => {
	const { data: randomMoviesData, isSuccess: isSuccessRandomMovies } =
		useMovieList();

	return (
		<>
			{isSuccessRandomMovies && randomMoviesData ? (
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
			) : (
				<div>loading</div>
			)}
		</>
	);
};
