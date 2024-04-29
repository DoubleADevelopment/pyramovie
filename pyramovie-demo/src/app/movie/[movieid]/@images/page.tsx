//style
import filmsApi from '@/api/films-api';
import style from './page.module.scss';

const Images = async ({ params }: { params: { movieid: string } }) => {
	const movieImages = await filmsApi.getMovieImages(+params.movieid);
	console.log(movieImages);
	return (
		<div className={style['images-list-wrap']}>
			<ul className={style['images-list']}>
				{movieImages.backdrops.map((img) => {
					return (
						<li key={img.file_path} className={style['film-item']}>
							<img
								className={style['film-item-img']}
								width={150}
								height={150}
								src={`https://image.tmdb.org/t/p/original${img?.file_path}`}
								alt=""
							/>
						</li>
					);
				})}
			</ul>

			<ul className={style['images-list']}>
				{movieImages.posters.map((img) => {
					return (
						<li key={img.file_path} className={style['film-item']}>
							<img
								className={style['film-item-img']}
								width={150}
								height={150}
								src={`https://image.tmdb.org/t/p/original${img?.file_path}`}
								alt=""
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Images;
