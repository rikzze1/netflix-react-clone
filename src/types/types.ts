export interface IconProps {
	color?: string;
	width?: string;
	height?: string;
}

export interface MovieResponse {
	id: number;
	title?: string;
	original_name?: string;
	original_title?: string;
	backdrop_path: string;
	overview?: string;
}

export interface TmdbImage {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string | null;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface MovieImagesResponse {
	backdrops: TmdbImage[];
	logos: TmdbImage[];
	posters: TmdbImage[];
}
