//api
import filmsApi from '@/api/films-api';
//styles
import style from './style.module.scss';

interface MovieCollectionProps {
	collectionId: number;
}

const MovieCollection = async ({ collectionId }: MovieCollectionProps) => {
	const movieCollection = await filmsApi.getFilmCollection(collectionId);

	return (
		<section className={`${style.section} container`}>
			<div>
				<h2>{movieCollection.name}</h2>

				<p>{movieCollection.overview}</p>

				<img
					className={style['collection-poster']}
					src={`https://image.tmdb.org/t/p/original${movieCollection.poster_path}`}
					alt=""
				/>
			</div>

			<ul className={style['collection-list']}>
				{movieCollection.parts.map((part) => {
					return (
						<li key={part.id}>
							<h4>{part.title}</h4>
							<img
								className={style['part-poster']}
								width={100}
								height={150}
								src={`https://image.tmdb.org/t/p/original${part.poster_path}`}
								alt=""
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default MovieCollection;
