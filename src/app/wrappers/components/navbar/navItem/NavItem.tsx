import React from 'react';

import s from './navItem.module.css';

interface NavItemProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Тип для SVG компонента
	label: string;
	isActive?: boolean;
	onClick?: () => void;
}

export const NavItem = ({ Icon, label, isActive, onClick }: NavItemProps) => {
	return (
		<div
			className={`${s.navBarItem} ${isActive ? s.active : ''}`}
			onClick={onClick}
		>
			<Icon />
			<div>{label}</div>
		</div>
	);
};
