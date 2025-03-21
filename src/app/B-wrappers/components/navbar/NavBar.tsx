'use client';

import React, { useState } from 'react';
import { NavItem } from './navItem/NavItem';
import s from './navBar.module.css';
import YouTubeIcon from '../../../../../public/icons-youtube.svg';
import WatchListIcon from '../../../../../public/heart.svg';
import SparkIcon from '../../../../../public/sparkle.svg';
import FrendsIcon from '../../../../../public/frends.svg';
import Player from '../../../../../public/player.svg';

export const NavBar = () => {
	const [activeItem, setActiveItem] = useState('watch');
	return (
		<nav className={s.navBar}>
			<h4 className={s.title}>Player</h4>
			<NavItem
				isActive={activeItem === 'player'}
				onClick={() => setActiveItem('player')}
				Icon={Player}
				label="Player"
			/>

			<h4 className={s.title}>Menu</h4>
			<div className={s.navBarWrapper}>
				<NavItem
					isActive={activeItem === 'watch'}
					onClick={() => setActiveItem('watch')}
					Icon={YouTubeIcon}
					label="Watch"
				/>
				<NavItem
					isActive={activeItem === 'watchlist'}
					onClick={() => setActiveItem('watchlist')}
					Icon={WatchListIcon}
					label="Watchlist"
				/>
				<NavItem
					isActive={activeItem === 'comming soon'}
					onClick={() => setActiveItem('comming soon')}
					Icon={SparkIcon}
					label="Comming soon"
				/>
			</div>

			<h4 className={s.title}>Social</h4>
			<NavItem
				isActive={activeItem === 'friends'}
				onClick={() => setActiveItem('friends')}
				Icon={FrendsIcon}
				label="Friends"
			/>
		</nav>
	);
};
