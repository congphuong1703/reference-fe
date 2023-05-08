import Table from "../../components/table";
import React, { useState } from "react";
import { Row, Col, Form, Space } from "antd";
import { initDataFilter } from "../../constants";
import { userTable } from "../../_mock/user.d";
import { useTranslation } from "react-i18next";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import { permissions } from "../../_mock/permission.d";
import PermissionList from "../permission/PermissionList";

export const FormName = {
	USERNAME: 'username'
}
const PermissionForUser = () => {

	const [formSearch] = Form.useForm()
	const [dataTable, setDataTable] = useState(userTable)
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const [dataTablePermission, setDataTablePermission] = useState(permissions)
	const { t } = useTranslation();
	const [isHidePermissionList, setIsHidePermissionList] = useState(false);
	const handleSearch = (values: any) => {
		console.log(values)
	}

	const columns = [
		{
			title: `${t('table.user.username')}`,
			dataIndex: 'username',
		},
		{
			title: `${t('table.user.fullName')}`,
			dataIndex: 'fullName',
		},
		{
			title: `${t('table.user.roleName')}`,
			dataIndex: 'roleName'
		},
	]


	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.user.username')}`, name: FormName.USERNAME, type: TypeInputProps.INPUT
		},
	]

	const handleCheckPermission = () => {

	}

	const handleCheckAllPermission = () => {

	}
	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			setIsHidePermissionList(true);
		},
	};

	const handleSavePermission = () => {

	}
	return (
		<Row gutter={16}>
			<Col span={12}>
				<Table
					rowSelection={{
						type: 'radio',
						...rowSelection,
					}}
					form={formSearch}
					setDataFilter={setDataFilter}
					dataTable={dataTable}
					searchHeader={searchHeader}
					onFinish={handleSearch}
					columns={columns}
				/>
			</Col>
			<Col span={12}>
				{isHidePermissionList &&
          <PermissionList dataTable={dataTablePermission}
                          handleSave={handleSavePermission}
                          handleSelect={handleCheckPermission} />}
			</Col>
		</Row>
	)
}

export default PermissionForUser;