import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Breadcrumb } from "antd";
import { BreadScrumbProps } from "../../types/breadScrumb/index.d";
import { HomeOutlined } from "@ant-design/icons";


const BreadscrumbCustom = (props: BreadScrumbProps) => {
	const { items = [] } = props;
	const location = useLocation();
	const { t } = useTranslation();
	const currentPath = () => {
		return location.pathname.split("/")[1]
	}
	const itemsDefault = [
		{
			title: <HomeOutlined />,
			href: "/"
		},
		{
			title: `${t('path.' + currentPath())}`,
		},
		...items
	]
	return (
		<Breadcrumb
			items={itemsDefault}
		/>
	)
}

export default BreadscrumbCustom;