import React from 'react'
import { PageHeaderProps } from "../../types/pageheader/index.d";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { FONT_SIZE_LEVEL } from "../../constants";

const { Title } = Typography
const PageHeader = (props: PageHeaderProps) => {

	const { title, href } = props;
	const navigate = useNavigate();

	return (
		<Typography onClick={() => navigate(href)}>
			<Title level={FONT_SIZE_LEVEL} style={{ cursor: 'pointer' }}>
				<ArrowLeftOutlined /> {title}
			</Title>
		</Typography>
	);
}

export default PageHeader;