'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

// Создаем тему здесь, в клиентском компоненте
export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
	},
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	return (
		<AppRouterCacheProvider options={{ key: 'css' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
