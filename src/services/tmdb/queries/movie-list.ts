import { useQuery } from '@tanstack/react-query';
import { instance } from '@/services/axios/instance';

export function useMovieList({
	genres = [],
}: { genres?: (string | number)[] } = {}) {
	const currentYear = new Date().getFullYear();
	const MIN_YEAR = 1997;

	const randomYear =
		Math.floor(Math.random() * (currentYear - MIN_YEAR)) + MIN_YEAR;

	const genreString = genres.length > 0 ? genres.join(',') : undefined;

	return useQuery({
		queryKey: ['random-movies', genres],
		queryFn: async () => {
			const response = await instance.get('/3/discover/movie', {
				params: {
					primary_release_year: randomYear,
					sort_by: 'vote_count.desc',
					...(genreString && { with_genres: genreString }),
				},
			});
			return response.data;
		},
		refetchOnMount: false,
		staleTime: 5 * 60 * 1000,
	});
}
