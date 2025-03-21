'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { categories } from '../../utils/categories';

import s from './movieCategory.module.css';

export function MovieCategory() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			className={s.tabs}
			sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}
		>
			<Tabs
				className={s.tabs}
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
			>
				{categories.map((category) => (
					<Tab label={category} key={category} />
				))}
			</Tabs>
		</Box>
	);
}
