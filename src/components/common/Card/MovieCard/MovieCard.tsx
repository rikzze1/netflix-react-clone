import type { CSSProperties } from 'react';
import clsx from 'clsx';
import { useIntersectionObserver } from 'usehooks-ts';

import type { MovieResponse } from '@/types/types';
import { useMovieLogo } from '@/services/tmdb/queries/movie-logo.query';
import { getTmdbImageUrl } from '@/util/getTmdbImageUrl';

export const MovieCard = ({ id = 8, title, backdrop_path }: MovieResponse) => {
	const { isIntersecting, ref: intersectionRef } = useIntersectionObserver();

	const { data: movieLogoData, isSuccess: isSuccessMovieLogo } = useMovieLogo(
		String(id),
		isIntersecting
	);

	const logo = movieLogoData?.logos[1]?.file_path ?? '';

	const hasDataAndIntersected =
		isIntersecting && isSuccessMovieLogo && movieLogoData;

	const hasBackdropAndIntersected = isIntersecting && backdrop_path;

	return (
		<div
			className='card__poster'
			ref={intersectionRef}
			style={
				{
					'--card-backdrop': hasBackdropAndIntersected
						? `url(${getTmdbImageUrl(backdrop_path, 'MEDIUM')})`
						: '',
				} as CSSProperties
			}
		>
			<div
				className={clsx(
					'card__logo',
					hasDataAndIntersected && 'card__logo--loaded'
				)}
				style={
					{
						'--card-logo':
							isIntersecting && movieLogoData?.logos[1]?.file_path
								? `url(${getTmdbImageUrl(movieLogoData?.logos[1]?.file_path, 'SMALL')})`
								: '',
					} as CSSProperties
				}
			>
				{!logo && isIntersecting && (
					<span className='logo-title'>{title}</span>
				)}
			</div>
		</div>
	);
};
