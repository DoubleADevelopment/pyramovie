import type { Metadata } from 'next';
//fonts
import { Inter } from 'next/font/google';
//styles
import '@/styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PyraMovie-demo',
	description: 'pyramovie',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
