//styles
import { PopularFilms } from '@/components';
import style from './page.module.scss';
import PopularPersons from '@/components/popular-persons/popular-persons';

export default function Home() {
	return (
		<div className={style.page}>
			<PopularFilms />
			<PopularPersons />
		</div>
	);
}
