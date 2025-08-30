import { TMDB_IMAGE_CONFIG } from '@/services/tmdb/constants';

export const getTmdbImageUrl = (
	path: string,
	size: keyof typeof TMDB_IMAGE_CONFIG.IMAGE_SIZES = 'MEDIUM'
) => {
	if (!path) return;
	return `${TMDB_IMAGE_CONFIG.BASE_IMAGE_URL}/${TMDB_IMAGE_CONFIG.IMAGE_SIZES[size]}${path}`;
};
