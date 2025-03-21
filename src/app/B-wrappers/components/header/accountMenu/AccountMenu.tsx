'use client';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import s from './accountMenu.module.css';

export default function AccountMenu() {
	return (
		<PopupState variant="popover" popupId="demo-popup-menu">
			{(popupState) => (
				<React.Fragment>
					<div className={s.account} {...bindTrigger(popupState)}>
						<AccountCircleIcon
							fontSize="large"
							className={s.accountCircleIcon}
						/>
						<div>{`Виктор Андреев`}</div>

						<ArrowDropDownIcon />
					</div>

					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>Profile</MenuItem>
						<MenuItem onClick={popupState.close}>My account</MenuItem>
						<MenuItem onClick={popupState.close}>Logout</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
}
