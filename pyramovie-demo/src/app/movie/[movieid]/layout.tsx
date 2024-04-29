import filmsApi from '@/api/films-api';
import { Metadata } from 'next';
//styles
import style from './layout.module.scss';

export const generateMetadata = async ({
	params,
}: {
	params: { movieid: string };
}): Promise<Metadata> => {
	const currentMovie = await filmsApi.getMovieWithId('eng', +params.movieid);

	return {
		title: currentMovie?.original_title,
		description: 'test',
	};
};

export default function Layout(props: { children: React.ReactNode; similar: React.ReactNode }) {
	return (
		<div className={style.layout}>
			{props.children}
			{props.similar}
		</div>
	);
}
