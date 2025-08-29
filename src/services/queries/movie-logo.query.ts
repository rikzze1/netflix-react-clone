import { useQuery } from "@tanstack/react-query";
import { instance } from "@/services/axios/instance";

export function useMovieLogo(id: string) {
    return useQuery({
        queryKey: ["movie-logo", id],
        queryFn: async () => {
            const response = await instance.get(`/3/movie/${id}/images?include_image_language=en`);
            return response.data;
        },
        enabled: !!id,
    })
}