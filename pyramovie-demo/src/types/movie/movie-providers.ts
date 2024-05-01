interface Flatrate {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
}

interface CountryResult {
	link: string;
	flatrate: Flatrate[];
}

interface MovieResults {
	[countryCode: string]: CountryResult;
}

export interface MovieProviders {
	id: number;
	results: MovieResults;
}
