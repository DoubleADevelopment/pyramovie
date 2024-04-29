import Image from 'next/image';
/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './style.module.css';
import Link from 'next/link';

const Person = async ({ params }: { params: { personid: string } }) => {
	const currentMovie = await filmsApi.getPerson(+params.personid);
	const personImages = await filmsApi.getPersonImages(+params.personid);
	const personCredits = await filmsApi.getPersonMovieCredits(+params.personid);

	return (
		<>
			<section className={style['movie']}>
				<div className={`${style['movie__wrap']} container`}>
					<div className={`${style['movie__info']}`}>
						<h2 className={style['movie__title']}>{currentMovie?.name}</h2>
						<h3>{currentMovie?.birthday}</h3>

						<p>{currentMovie?.biography}</p>
					</div>

					<Image
						className={style['movie__poster']}
						src={`https://image.tmdb.org/t/p/original${currentMovie?.profile_path}`}
						width={300}
						height={460}
						alt=""
					/>
				</div>
			</section>
			<div className={style['images-list-wrap']}>
				<ul className={style['images-list']}>
					{personImages.profiles.map((image) => {
						return (
							<li key={image.file_path}>
								<img
									className={style['image-list-image']}
									width={150}
									height={150}
									src={`https://image.tmdb.org/t/p/original${image?.file_path}`}
									alt=""
								/>
							</li>
						);
					})}
				</ul>
			</div>

			<div className={style['images-list-wrap']}>
				<ul className={style['images-list']}>
					{personCredits.cast.map((cast) => {
						return (
							<li key={cast.id} className={style['film-item']}>
								<Link className={style.link} href={`/movie/${cast.id}`}>
									to {cast.title}
								</Link>
								<img
									className={style['film-item-img']}
									width={150}
									height={150}
									src={`https://image.tmdb.org/t/p/original${cast.poster_path}`}
									alt=""
								/>
								<h3 className={style.text}>{cast.title}</h3>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Person;
