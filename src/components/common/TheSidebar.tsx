import { NavProps, SideBarProps } from '../../types/Layout'
import React, { useEffect, useState } from 'react'
import { Layout, Menu, MenuProps, Tooltip } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import getItem from "../menu/MenuItem";

const { Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number];

const TheSidebar = (props: SideBarProps) => {
	const { nav } = props;
	const [collapse, setCollapse] = useState(false);

	const [selectedKey, setSelectedKey] = useState('0');
	const { t } = useTranslation();

	const location = useLocation();

	const MenuItem = () => {
		// eslint-disable-next-line react/prop-types
		const items: MenuItem[] = nav?.map((ele: NavProps) =>
			ele.children
				? getItem(
					<Tooltip title={t(ele.name)}>{t(ele.name)}</Tooltip>,
					ele.tag,
					ele.icon,
					ele.children?.map((navChild) =>
						getItem(
							<Tooltip title={t(navChild.name)} placement="rightBottom">
								<Link to={navChild.to}>{t(navChild.name)}</Link>
							</Tooltip>,
							navChild.tag,
							navChild.icon,
						),
					),
				)
				: getItem(
					<Tooltip title={t(ele.name)}>
						<Link to={ele.to}>{t(ele.name)}</Link>
					</Tooltip>,
					ele.tag,
					ele.icon,
				),
		);
		useEffect(() => {
			try {
				// eslint-disable-next-line react/prop-types
				let key = nav?.find((_item) => _item.to === location.pathname)?.tag;
				if (key === undefined) {
					/* eslint-disable no-plusplus */
					// eslint-disable-next-line react/prop-types
					for (let i = 0; i < nav?.length; i++) {
						const children = nav[i]?.children;
						if (children) {
							key = children.find((ele) => ele.to === location.pathname)?.tag;
							if (key !== undefined) {
								break;
							}
						}
					}
				}
				setSelectedKey(key || '0');
			} catch (e) {

			}
		}, [location]);

		return (
			<Menu
				theme="dark"
				mode="inline"
				defaultOpenKeys={[selectedKey.split('.')[0]]}
				defaultSelectedKeys={['0']}
				selectedKeys={[selectedKey]}
				items={items}
			/>
		)
	}
	return (
		<Sider
			width={200}
			className="site-layout-background"
			collapsible
			collapsed={collapse}
			onCollapse={() => setCollapse(!collapse)}
		>
			<div className="logo" />
			<MenuItem />
		</Sider>
	)
}

export default TheSidebar
