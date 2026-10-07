import type { MovieResponse } from '@/types/types';

export const TV_SHOWS: MovieResponse[] = [
	{ id: 2316, original_name: 'The Office', backdrop_path: '/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg' },
	{ id: 1396, original_name: 'Breaking Bad', backdrop_path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg' },
	{ id: 66732, original_name: 'Stranger Things', backdrop_path: '/9P4IIMYY3HifqeruZq0ZZ9g7YUi.jpg' },
	{ id: 1668, original_name: 'Friends', backdrop_path: '/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg' },
	{ id: 119051, original_name: 'Wednesday', backdrop_path: '/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg' },
];

export const MOVIES: MovieResponse[] = [
	{ id: 414906, original_title: 'The Batman', backdrop_path: '/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg' },
	{ id: 438631, original_title: 'Dune', backdrop_path: '/zRKQW58MBEY078AxkHxEJzUskCl.jpg' },
	{ id: 157336, original_title: 'Interstellar', backdrop_path: '/8sNiAPPYU14PUepFNeSNGUTiHW.jpg' },
	{ id: 27205, original_title: 'Inception', backdrop_path: '/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg' },
	{ id: 872585, original_title: 'Oppenheimer', backdrop_path: '/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg' },
];

export const TOP_10: MovieResponse[] = [...MOVIES, ...TV_SHOWS];
