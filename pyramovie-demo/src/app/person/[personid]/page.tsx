import Image from 'next/image';
/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './style.module.css';

const Person = async ({ params }: { params: { personid: string } }) => {
	const currentMovie = await filmsApi.getPerson(+params.personid);
	const personImages = await filmsApi.getPersonImages(+params.personid);

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
		</>
	);
};

export default Person;
