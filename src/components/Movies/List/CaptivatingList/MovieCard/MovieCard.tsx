import type { CSSProperties } from 'react';

import type { MovieResponse } from '@/types/types';
import { useMovieLogo } from '@/services/queries/movie-logo.query';
import { getTmdbImageUrl } from '@/util/getTmdbImageUrl';

export const MovieCard = ({ id = 8, title, backdrop_path }: MovieResponse) => {
	const { data: movieLogoData, isSuccess: isSuccessMovieLogo } = useMovieLogo(
		String(id)
	);

	const logo = movieLogoData?.logos[1]?.file_path ?? '';

	return (
		<>
			{isSuccessMovieLogo && movieLogoData && !!id && (
				<div
					className="card__poster"
					style={
						{
							'--card-backdrop': `url(${getTmdbImageUrl(backdrop_path, 'MEDIUM')})`,
						} as CSSProperties
					}
				>
					<div
						className="card__logo"
						style={
							{
								'--card-logo': `url(${getTmdbImageUrl(movieLogoData?.logos[1]?.file_path, 'SMALL')})`,
							} as CSSProperties
						}
					>
						{!logo && <span className="logo-title">{title}</span>}
					</div>
				</div>
			)}
		</>
	);
};
