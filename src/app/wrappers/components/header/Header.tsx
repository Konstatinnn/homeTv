import React from 'react';
import s from './header.module.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Icon from '../../../../../public/money.svg';
import { InputAdornment, TextField } from '@mui/material';

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
						// Настройка входного поля с иконкой в конце
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
					<NotificationsIcon fontSize="small" />
					<ChatIcon fontSize="small" />
				</div>
				<div className={s.account}>
					<AccountCircleIcon fontSize="large" />
					<div className={s.user}>
						<div>Андрей</div>
						<div>Тигранович</div>
						<ArrowDropDownIcon />
					</div>
				</div>
			</div>
		</div>
	);
};
