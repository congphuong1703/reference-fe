import Table from "../../components/table";
import React, { useState } from "react";
import { Row, Col, Form, Space, Card } from "antd";
import { initDataFilter } from "../../constants";
import { useTranslation } from "react-i18next";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import { permissions } from "../../_mock/permission.d";
import { roleTable } from "../../_mock/role.d";
import PermissionList from "../permission/PermissionList";
import Breadcrumb from "../../components/breadcrumb";

export const FormName = {
	USERNAME: 'username'
}
const PermissionForRole = () => {

	const [formSearch] = Form.useForm()
	const [dataTable, setDataTable] = useState(roleTable)
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const [dataTablePermission, setDataTablePermission] = useState(permissions)
	const { t } = useTranslation();
	const [isHidePermissionList, setIsHidePermissionList] = useState(false);
	const handleSearch = (values: any) => {
		console.log(values)
	}

	const columns = [
		{
			title: `${t('table.role.name')}`,
			dataIndex: 'name',
		},
		{
			title: `${t('table.role.description')}`,
			dataIndex: 'description',
		},
	]


	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.user.username')}`, name: FormName.USERNAME, type: TypeInputProps.INPUT
		},
	]

	const handleCheckPermission = () => {

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
		<Card title={<Breadcrumb />}>
			<Row gutter={16}>
				<Col span={12}>
					<Table
						rowSelection={{
							type: 'radio',
							...rowSelection,
						}}
						form={formSearch}
						setDataFilter={setDataFilter}
						dataTable={dataTable.data}
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
		</Card>
	)
}

export default PermissionForRole;