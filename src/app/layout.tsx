import ThemeRegistry from './A-core/components/theme/ThemeRegistry';

import { Header } from './B-wrappers/components/header/Header';
import { NavBar } from './B-wrappers/components/navbar/NavBar';
import './globals.css';
import styles from './page.module.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					<div className={styles.container}>
						<Header />
						<main className={styles.main}>
							<NavBar />
							{children}
						</main>
					</div>
				</ThemeRegistry>
			</body>
		</html>
	);
}
