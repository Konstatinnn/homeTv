import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuPopupState from './accountMenu/AccountMenu';

import Icon from '../../../../../public/money.svg';
import { InputAdornment, TextField } from '@mui/material';

import s from './header.module.css';

export const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.logo}>
				<h3>HOME TV</h3>
				<Icon width={20} />
			</div>

			<div className={s.search}>
				<div className={s.navigateArrows}>
					<NavigateBeforeIcon />
					<NavigateNextIcon />
				</div>

				<TextField
					hiddenLabel
					id="filled-hidden-label-small"
					variant="outlined"
					size="small"
					placeholder="Search"
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon fontSize="small" />
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<MicIcon fontSize="small" />
								</InputAdornment>
							),
						},
					}}
				>
					<SearchIcon />
				</TextField>
			</div>
			<div className={s.userinfo}>
				<div className={s.notifications}>
					<DarkModeIcon className={s.darkModeIcon} fontSize="small" />
					<NotificationsIcon className={s.notificationsIcon} fontSize="small" />
					<ChatIcon className={s.chatIcon} fontSize="small" />
				</div>
				<MenuPopupState />
			</div>
		</div>
	);
};
