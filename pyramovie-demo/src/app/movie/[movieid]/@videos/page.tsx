import Image from 'next/image';
import Link from 'next/link';
/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './similar-movies.module.css';

const MovieVideos = async ({ params }: { params: { movieid: string } }) => {
	const videos = await filmsApi.getFilmVideos(+params.movieid);

	return (
		<section className={`${style['similar-movies']} container`}>
			<div className={`${style['similar-movies__wrap']}`}>
				<h3 className={`${style['similar-movies__title']}`}>videos</h3>

				<div className={`${style['similar-movies__slider']}`}>
					<ul className={style['similar-movies-list']}>
						{videos.results ? (
							videos.results.map((similar) => {
								return (
									<li className={style['similar-movies-list__item']} key={similar.id}>
										<div className={`${style['similar-movies-list__info']}`}>
											<h4>{similar.name}</h4>
										</div>
										<div>
											<iframe
												width="560"
												height="315"
												src={`https://www.youtube.com/embed/${similar.key}`}
												title="YouTube video player"
											></iframe>
										</div>
									</li>
								);
							})
						) : (
							<div className={style['error']}>error .... {JSON.stringify(videos)}</div>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default MovieVideos;
