export interface KnownForItem {
	backdrop_path: string;
	id: number;
	original_title?: string;
	overview: string;
	poster_path: string;
	media_type: 'movie' | 'tv';
	adult: boolean;
	title?: string;
	name?: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date?: string;
	first_air_date?: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
}

export interface Actor {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	known_for: KnownForItem[];
}

export interface PopularPerosns {
	page: number;
	results: Actor[];
}
