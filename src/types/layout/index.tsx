import React from "react";

export type SideBarProps = {
	nav: NavProps[]
}

export type NavProps = {
	tag: string;
	name: string;
	to: string;
	icon?: React.ReactNode;
	children?: NavProps[];
};

export type RouteProps = {
	path: string
	exact: boolean
	uncheckPermission?: boolean
	accessKey: string
	pKey: string
	name: string
	component: React.ReactNode
}
