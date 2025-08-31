import { instance } from '@/services/axios/instance';
import { useQuery } from '@tanstack/react-query';

export function useTrailer({ key }: { key: string }) {
	return useQuery({
		queryKey: ['movie-trailer', key],
		queryFn: async () => {
			const response = await instance.get(
				`/3/movie/${key}/videos?language=en-US`
			);
			return response.data;
		},
		enabled: !!key,
	});
}
