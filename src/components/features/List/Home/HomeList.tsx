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
				title='Need a Good Laugh?'
			/>
			<Movies
				type='movie'
				genres={[TMDB_MOVIE_GENRE.THRILLER]}
				title='Chilly Thrillers'
			/>
			<Movies
				type='movie'
				isTopRank={true}
				genres={[TMDB_MOVIE_GENRE.THRILLER]}
				title='Top 10 Movies in the US Today'
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
				type='movie'
				genres={[TMDB_MOVIE_GENRE.WESTERN]}
				title='Western Movies'
			/>
			<Movies
				type='tv'
				genres={[TMDB_TV_GENRE.DOCUMENTARY]}
				title='Documentaries'
			/>
		</main>
	);
};
