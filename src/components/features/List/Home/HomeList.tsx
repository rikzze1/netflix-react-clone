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
				type='movie'
				genres={[TMDB_MOVIE_GENRE.COMEDY]}
				title='Comedies'
			/>
			<Movies
				type='movie'
				genres={[TMDB_MOVIE_GENRE.THRILLER]}
				title='Chilly Thrillers'
			/>
			<Movies
				type='movie'
				genres={[TMDB_MOVIE_GENRE.ANIMATION]}
				title='Animation'
			/>
			<Movies
				type='movie'
				genres={[TMDB_MOVIE_GENRE.CRIME, TMDB_MOVIE_GENRE.ACTION]}
				title='Your Next Watch'
			/>
			<Movies
				type='tv'
				genres={[TMDB_TV_GENRE.SCI_FI_FANTASY]}
				title='Tv Sci-Fi & Fantasy'
			/>
		</main>
	);
};
