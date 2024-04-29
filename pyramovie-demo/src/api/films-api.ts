import type IcurrentMovie from '@/types/movie/current-movie';
import { BackdropsResponse } from '@/types/movie/movie';
import { PopularPerosns } from '@/types/movie/popular-people';
import { ISearchMulti } from '@/types/movie/search';
import type { ISimilarMovies } from '@/types/movie/similar';
import { Person, PersonImages, PersonMovieCredits } from '@/types/person/person';

class FilmsApi {
	private options;

	constructor() {
		this.options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
		};
	}

	async moviePopular(lang: string, page: number) {
		const requestpath = `${process.env.BASE_URL}popular?api_key=${process.env.API_KEY}`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	async getMovieWithId(lang: string, movieId: number): Promise<IcurrentMovie | null> {
		const requestpath = `${process.env.BASE_URL}${movieId}?language=ru-RU&api_key=${process.env.API_KEY}`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	async getSimilarFilms(lang: string, movieId: number): Promise<ISimilarMovies | null> {
		const requestpath = `${process.env.BASE_URL}${movieId}/similar?api_key=${process.env.API_KEY}&language=ru-RU`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	async searchMulti(queryString: string, page = 1): Promise<ISearchMulti | null> {
		const requestpath = `https://api.themoviedb.org/3/search/movie?query=${queryString}&api_key=c42a612fa11183223ab9f9e7502f8363&language=en-EN&page=${page}`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	//https://api.themoviedb.org/3/person/popular?language=ru&page=1&api_key=c42a612fa11183223ab9f9e7502f8363
	async popularPeople(page = 1): Promise<PopularPerosns> {
		const requestpath = `https://api.themoviedb.org/3/person/popular?language=ru&page=${page}&api_key=c42a612fa11183223ab9f9e7502f8363`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}
	//  https://api.themoviedb.org/3/person/{person_id}
	async getPerson(personId: number): Promise<Person> {
		const requestpath = `https://api.themoviedb.org/3/person/${personId}?api_key=c42a612fa11183223ab9f9e7502f8363&language=ru`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	// https://api.themoviedb.org/3/person/{person_id}/images
	async getPersonImages(personId: number): Promise<PersonImages> {
		const requestpath = `https://api.themoviedb.org/3/person/${personId}/images?api_key=c42a612fa11183223ab9f9e7502f8363&language=ru`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	//https://api.themoviedb.org/3/person/{person_id}/movie_credits
	async getPersonMovieCredits(personId: number): Promise<PersonMovieCredits> {
		const requestpath = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=c42a612fa11183223ab9f9e7502f8363&language=ru`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}

	//https://api.themoviedb.org/3/movie/{movie_id}/images
	async getMovieImages(movieId: number): Promise<BackdropsResponse> {
		const requestpath = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=c42a612fa11183223ab9f9e7502f8363&language=en`;
		const res = await fetch(requestpath, this.options);
		return res.json();
	}
}

const filmsApi = new FilmsApi();

export default filmsApi;
