import type { Metadata } from 'next';
//fonts
import { Open_Sans } from 'next/font/google';
//styles
import '@/styles/index.scss';
import style from './layout.module.scss';
import { AppFooter, AppHeader } from '@/components';

export const metadata: Metadata = {
	title: 'PyraMovie-demo',
	description: 'pyramovie',
};

const opensans = Open_Sans({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Arial'],
	style: 'normal',
	variable: '--basic-font',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${opensans.className} ${opensans.variable}`}>
			<body className={`${style.body}`}>
				<AppHeader />
				{children}
				<AppFooter />
			</body>
		</html>
	);
}
