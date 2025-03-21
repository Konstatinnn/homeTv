import React from 'react';

import {
	MainMovie,
	Movie,
	MovieCategory,
	moviesMock,
} from '@/app/C-modules/watch';

import s from './MovieContainer.module.css';

export const MovieContainer = () => {
	return (
		<div className={s.watchContainer}>
			<MainMovie />
			<MovieCategory />
			<div className={s.moviesContainer}>
				{moviesMock.map((movie) => (
					<Movie key={movie.id} {...movie} />
				))}
			</div>
		</div>
	);
};
