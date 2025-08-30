import { useQuery } from '@tanstack/react-query';
import { instance } from '@/services/axios/instance';

export const useTopMovies = () => {
	return useQuery({
		queryKey: ['trending-movies'],
		queryFn: async () => {
			const response = await instance.get(
				'3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc'
			);
			return response.data;
		},
	});
};
