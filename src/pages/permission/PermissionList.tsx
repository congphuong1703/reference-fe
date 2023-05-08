import React, { Fragment } from 'react'
import { Button, Checkbox, List, Row, Space, Table } from "antd";
import { useTranslation } from "react-i18next";
import { PermissionListProps } from "../../types/permission";
import { SaveOutlined } from "@ant-design/icons";

const PermissionList = (props: PermissionListProps) => {

	const { dataTable, handleSelect, handleSave } = props
	const { t } = useTranslation();
	const columns = [
		{
			title: `${t('table.permission.name')}`,
			dataIndex: "name",
			filters: dataTable.map((ele: any) => {
				return {
					text: ele.name,
					value: ele.name
				}
			}),
			filterSearch: true,
			onFilter: (value: any, record: any) => record.name.startsWith(value),
		}
	]
	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		selectedRowKeys: []
	};

	const title = (
		<Button style={{ float: 'right', marginBottom: 10, marginTop: 10 }} onClick={handleSave} icon={<SaveOutlined />} type="primary">{t('action.save')}</Button>
	)

	return (
		<React.Fragment>
			<Table
				title={() => title}
				pagination={false}
				columns={columns}
				rowSelection={rowSelection}
				dataSource={dataTable}
			/>
			<Button style={{ float: 'right', marginTop: 10 }} icon={<SaveOutlined />} type="primary">{t('action.save')}</Button>
		</React.Fragment>
	)
}

export default PermissionList