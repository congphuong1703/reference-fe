/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Layout, Row, Col, Menu, MenuProps, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { NavProps } from "../../types/layout";
import getItem from "../menu/MenuItem";
import { useTranslation } from "react-i18next";

type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const TheHeader = () => {
	const { t } = useTranslation();

	return (
		<Header>
			<Row>
				<Col span={20}>
					<Menu
						mode="horizontal"
						className="custom-menu"
						defaultSelectedKeys={['1']}
						// selectedKeys={[selectedKey]}
					/>
				</Col>
				<Col span={4}>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						selectedKeys={['0']}
						className="avatar_header"
					/>
				</Col>
			</Row>
		</Header>
	);
};

export default TheHeader;
