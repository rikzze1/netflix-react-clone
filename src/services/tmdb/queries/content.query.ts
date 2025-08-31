import { useQuery } from '@tanstack/react-query';
import { instance } from '@/services/axios/instance';

interface ContentProps {
	genres: (string | number)[];
	type: 'movie' | 'tv';
}

export function useContent({ genres, type }: ContentProps) {
	const MIN_YEAR = 2006;
	const currentYear = new Date().getFullYear();
	const randomYear =
		Math.floor(Math.random() * (currentYear - MIN_YEAR)) + MIN_YEAR;
	const genreString = genres.length > 0 ? genres.join(',') : undefined;

	const endpoint = type === 'movie' ? '/3/discover/movie' : '/3/discover/tv';
	const yearParam =
		type === 'movie' ? 'primary_release_year' : 'first_air_date_year';

	return useQuery({
		queryKey: [type, genres],
		queryFn: async () => {
			const response = await instance.get(endpoint, {
				params: {
					[yearParam]: randomYear,
					language: 'en-US',
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
