import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

import { Container } from './wrappers/components/container/Container';
import { Header } from './wrappers/components/header/Header';
import { NavBar } from './wrappers/components/navbar/NavBar';
import { MainFilm } from './wrappers/modules/components/MainFilm/MainFilm';

export default async function () {
	return (
		<div>
			<Container>
				<Header></Header>
				<main className={styles.main}>
					<NavBar />
					<div>
						<MainFilm />
					</div>
				</main>
			</Container>
		</div>
	);
}
