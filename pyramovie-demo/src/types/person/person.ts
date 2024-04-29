export type Person = {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string | null;
};

export interface ProfileImages {
	aspect_ratio: number;
	height: number;
	iso_639_1: string | null;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface PersonImages {
	id: number;
	profiles: ProfileImages[];
}
