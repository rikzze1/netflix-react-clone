import { useQuery } from '@tanstack/react-query';
import { instance } from '@/services/axios/instance';
import { TMDB_GENRE_CONFIG } from '@/services/tmdb/constants';

export function useRandomMovies() {
	const currentYear = new Date().getFullYear();
	const MIN_YEAR = 1997;

	const randomYear =
		Math.floor(Math.random() * (currentYear - MIN_YEAR)) + MIN_YEAR;

	const SCIFI = TMDB_GENRE_CONFIG.SCIENCE_FICTION;
	const ADVENTURE = TMDB_GENRE_CONFIG.ADVENTURE;

	const genres = [SCIFI, ADVENTURE].filter(Boolean).join(',');

	return useQuery({
		queryKey: ['random-movies'],
		queryFn: async () => {
			const response = await instance.get('/3/discover/movie', {
				params: {
					primary_release_year: randomYear,
					sort_by: 'vote_count.desc',
					with_genres: genres,
				},
			});
			return response.data;
		},
		refetchOnMount: false,
		staleTime: 5 * 60 * 1000,
	});
}
