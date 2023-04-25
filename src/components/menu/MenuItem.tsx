import React from "react";
import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>['items'][number];

export default  function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		label,
		children,
	} as MenuItem;
}
