import React, { useMemo, useState } from 'react';
import Table from "../../components/table";
import { initDataFilter, layoutForm, STATUS } from "../../constants";
import { Button, Card, Col, Form, Input, notification, Row, Select } from "antd";
import { useTranslation } from "react-i18next";
import { CheckOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";

const enum FormName {
	USERNAME = "username",
	STATUS = "status",

}

const User = () => {
	const [dataTable, setDataTable] = useState([])
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const { t } = useTranslation();
	const [api] = notification.useNotification();

	const handleSearch = () => {
	}

	const title = () => {
		return (
			<Row>
				<Col span={20}>
					<Input placeholder={t("form.username") || FormName.USERNAME} />
					<Select placeholder={t("form.status")}>
						{STATUS.map((ele: string) => {
							return (
								<Select.Option key={ele}>
									{t(`option.${ele}`)}
								</Select.Option>
							)
						})}
					</Select>
				</Col>
				<Col span={4}>
					<Button icon={<PlusOutlined />} type="primary">
						{t("action.addNew")}
					</Button>
					<Button icon={<SearchOutlined />} onClick={handleSearch} type="primary">
						{t("action.search")}
					</Button>
				</Col>
			</Row>
		)
	}

	const handleDataFilter = (value: any) => {
		setDataFilter(value)
	}


	return (
		<Table
			setDataFilter={handleDataFilter}
			title={title}
			dataTable={dataTable}
		/>

	)
}

export default User
