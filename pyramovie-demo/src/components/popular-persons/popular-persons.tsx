import Link from 'next/link';
/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './popular-persons.module.scss';
/* TYPES */
import { PopularPerosns } from '@/types/movie/popular-people';

const PopularPersons = async () => {
	const popularFilms: PopularPerosns = await filmsApi.popularPeople(1);

	return (
		<section className={style['popular-films']}>
			<div className={`${style['popular-films__wrap']} `}>
				<h2 className={style['popular-films__title']}>Popular movies</h2>

				<div className={style['popular-films__slider']}>
					<ul className={style['popular-films__list']}>
						{popularFilms.results.map((movie) => {
							return (
								<li className={style['popular-films__item']} key={movie.id}>
									<div className={style['popular-films__item-info']}>
										<h3 className={style['popular-films__item-title']}>{movie.name}</h3>
									</div>
									<img
										className={style['popular-films__item-poster']}
										src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`}
										width={200}
										height={200}
										alt=""
									/>
									<Link className={style['popular-films__litem-link']} href={`/movie/${movie.id}`}>
										{/* <span className="visually-hidden">link to ${movie.original_title} movie</span> */}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default PopularPersons;
