import { useQuery } from '@tanstack/react-query';
import { instance } from '../../axios/instance';

export function useCreateGuessSession({
	enabled = true,
}: {
	enabled?: boolean;
}) {
	return useQuery({
		queryKey: ['create-guess-session'],
		queryFn: async () => {
			const response = await instance.get(
				'/3/authentication/guest_session/new'
			);
			return response.data;
		},
		enabled,
	});
}
