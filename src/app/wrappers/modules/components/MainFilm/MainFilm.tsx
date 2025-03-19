import React from 'react';
import s from './mainFilm.module.css';
import MainFilmImg from '../../../../../../public/film1920x.webp';
import Image from 'next/image';

export const MainFilm = () => {
	return (
		<div className={s.mainFilm}>
			<Image className={s.img} src={MainFilmImg} alt="Фильм"></Image>
		</div>
	);
};
