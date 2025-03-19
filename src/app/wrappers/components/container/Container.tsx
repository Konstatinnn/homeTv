import React from 'react';
import s from './container.module.css';

export const Container = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div className={s.container}>{children}</div>;
};
