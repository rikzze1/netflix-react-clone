import { Movies } from '@/components/common/Movies/Movies';
import { TMDB_MOVIE_GENRE, TMDB_TV_GENRE } from '@/services/tmdb/constants';

import './HomeList.scss';

export const HomeList = () => {
	return (
		<main className='main'>
			<Movies
				type='movie'
				genres={[
					TMDB_MOVIE_GENRE.SCIENCE_FICTION,
					TMDB_MOVIE_GENRE.ACTION,
				]}
				title='Boredom Busters'
			/>
			<Movies
				type='tv'
				genres={[TMDB_TV_GENRE.DRAMA, TMDB_TV_GENRE.COMEDY]}
				title='Tv Shows'
			/>
		</main>
	);
};
