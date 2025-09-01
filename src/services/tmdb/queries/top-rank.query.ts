import { useQuery } from '@tanstack/react-query';
import { instance } from '@/services/axios/instance';

export function useTopRank() {
	return useQuery({
		queryKey: ['top-rank10'],
		queryFn: async () => {
			const response = await instance.get(
				'/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc'
			);
			return response.data;
		},
		refetchOnMount: false,
		staleTime: 5 * 60 * 1000,
	});
}
