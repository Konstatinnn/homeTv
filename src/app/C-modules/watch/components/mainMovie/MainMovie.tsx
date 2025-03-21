import React from 'react';
import MainMovieImg from '../../../../../../public/film1920x.webp';
import Image from 'next/image';
import PlayIcon from '../../../../../../public/play.svg';
import AddIcon from '@mui/icons-material/Add';

import s from './mainMovie.module.css';

export const MainMovie = () => {
	return (
		<div className={s.mainMovie}>
			<Image className={s.img} src={MainMovieImg} alt="Фильм" />
			<PlayIcon className={s.playIcon} />
			<div className={s.mainMovieActions}>
				<button className={s.watchButton}>Watch</button>
				<div className={s.addToWatchList}>
					<AddIcon />
				</div>
			</div>
		</div>
	);
};
