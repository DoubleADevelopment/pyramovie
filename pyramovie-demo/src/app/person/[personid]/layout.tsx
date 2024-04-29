import filmsApi from '@/api/films-api';
import { Metadata } from 'next';
//styles
import style from './layout.module.scss';

export const generateMetadata = async ({
	params,
}: {
	params: { personid: string };
}): Promise<Metadata> => {
	const currentPerson = await filmsApi.getPerson(+params.personid);

	return {
		title: currentPerson?.name,
		description: currentPerson.biography,
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
