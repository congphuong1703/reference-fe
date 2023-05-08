import React from 'react'
import { PermissionDetailListProps } from "../../types/permission";
import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import { FormName } from "./index";
import Table from "../../components/table";

const PermissionDetailList = (props: PermissionDetailListProps) => {

	const { dataTable, handleSelect, handleSave } = props;
	const { t } = useTranslation();
	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		selectedRowKeys: dataTable.filter((ele: any) => ele.isSkip).map((ele: any) => ele.key),
	};

	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.permission.code')}`, name: FormName.NAME, type: TypeInputProps.INPUT,
		},
		{
			label: `${t('form.permission.name')}`, name: FormName.NAME, type: TypeInputProps.INPUT
		}
	]

	const columns = [
		{
			title: `${t('table.permission.code')}`,
			dataIndex: "code",
			sorter: true,
			filters: dataTable.map((ele: any) => {
				return {
					text: ele.code,
					value: ele.code
				}
			}),
			filterSearch: true,
			onFilter: (value: any, record: any) => record.code.startsWith(value),
		},
		{
			title: `${t('table.permission.name')}`,
			dataIndex: "name",
			sorter: true,
			filters: dataTable.map((ele: any) => {
				return {
					text: ele.name,
					value: ele.name
				}
			}),
			filterSearch: true,
			onFilter: (value: any, record: any) => record.name.startsWith(value),

		},
		{
			title: `${t('table.permission.description')}`,
			dataIndex: "description",
		},
	]

	const title = (
		<Button style={{ float: 'right', marginBottom: 10, marginTop: 10 }} onClick={handleSave} icon={<SaveOutlined />} type="primary">{t('action.save')}</Button>
	)

	return (
		<React.Fragment>
			<Table
				extra={title}
				pagination={false}
				columns={columns}
				searchHeader={searchHeader}
				rowSelection={rowSelection}
				dataTable={dataTable}
			/>
			<Button style={{ float: 'right', marginTop: 10 }} icon={<SaveOutlined />} onClick={handleSave} type="primary">{t('action.save')}</Button>
		</React.Fragment>
	)
}

export default PermissionDetailList