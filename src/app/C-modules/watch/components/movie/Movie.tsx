import React from 'react';
import Image from 'next/image';

import s from './movie.module.css';

interface MovieProps {
	id: number;
	title: string;
	rating: number;
	image: string;
	category: string;
}

export const Movie = ({ id, category, image, rating, title }: MovieProps) => {
	return (
		<div className={s.movie}>
			<div className={s.wrapperImg}>
				<Image
					src={image}
					alt={title}
					height={500}
					width={500}
					className={s.image}
				/>
			</div>
			<h4 className={s.rating}>{rating}</h4>
			<div className={s.title}>{title}</div>
		</div>
	);
};
