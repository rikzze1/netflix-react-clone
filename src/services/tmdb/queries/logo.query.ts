import { useQuery } from '@tanstack/react-query';
import { instance } from '@/services/axios/instance';

interface LogoProps {
	id: string;
	hasIntersected?: boolean;
	type: 'movie' | 'tv';
}

export function useLogo({ id, hasIntersected, type }: LogoProps) {
	return useQuery({
		queryKey: [`${type}-logo`, id],
		queryFn: async () => {
			const response = await instance.get(
				`/3/${type}/${id}/images?include_image_language=en`
			);
			return response.data;
		},
		enabled: !!id && hasIntersected,
		refetchOnMount: false,
		staleTime: 5 * 60 * 1000,
	});
}
