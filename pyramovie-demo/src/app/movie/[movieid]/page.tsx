import Image from 'next/image';
/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './style.module.css';
import { MovieCollection } from '@/components';

const Movie = async ({ params }: { params: { movieid: string } }) => {
	const currentMovie = await filmsApi.getMovieWithId('eng', +params.movieid);
	const movieImages = await filmsApi.getMovieImages(+params.movieid);
	const movieProvider = await filmsApi.getFilmProviders(+params.movieid);

	console.log(movieProvider.results.PL);

	return (
		<section className={style['movie']}>
			<div className={`${style['movie__wrap']} container`}>
				<div className={`${style['movie__banner']}`}>
					<img
						className={style['movie__poster-backdrop']}
						src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
						width={500}
						height={300}
						alt=""
					/>
				</div>

				<div className={`${style['movie__info-block']}`}>
					<div className={`${style['movie__info']}`}>
						<h2 className={style['movie__title']}>{currentMovie?.title}</h2>
						<h3>{currentMovie?.original_title}</h3>
						<p>release_date {currentMovie?.release_date}</p>
						<p>{currentMovie?.overview}</p>
					</div>

					<img
						className={style['movie__poster']}
						src={`https://image.tmdb.org/t/p/original${currentMovie?.poster_path}`}
						width={300}
						height={460}
						alt=""
					/>
				</div>
			</div>

			{currentMovie?.belongs_to_collection?.id && (
				<MovieCollection collectionId={currentMovie.belongs_to_collection.id} />
			)}

			{movieProvider.results.PL && (
				<section className={`${style.providers} container`}>
					<h3>provider</h3>
					{movieProvider.results.PL.flatrate.map((item) => {
						return (
							<div key={item.provider_id}>
								<p>{item.provider_name}</p>
								<img
									width={100}
									height={100}
									src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
									alt=""
								/>
							</div>
						);
					})}
				</section>
			)}
		</section>
	);
};

export default Movie;
