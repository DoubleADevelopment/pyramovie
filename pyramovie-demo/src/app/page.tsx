//styles
import { PopularFilms } from '@/components';
import style from './page.module.scss';

export default function Home() {
	return (
		<div className={style.page}>
			<PopularFilms />
		</div>
	);
}
