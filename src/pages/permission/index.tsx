import Table from "../../components/table";
import React, { useState } from "react";
import { Row, Col, Form, Button, message } from "antd";
import { initDataFilter } from "../../constants";
import { useTranslation } from "react-i18next";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import { permissionDetails, permissionGroupInfo, permissionGroupTable } from "../../_mock/permission.d";
import { InfoOutlined } from "@ant-design/icons";
import PermissionDetailList from "./PermissionDetailList";
import PermissionDetail from "./detail";

export const FormName = {
	CODE: 'code',
	NAME: 'name'
}
const PermissionManagement = () => {

	const [formSearch] = Form.useForm()
	const [isInfo, setIsInfo] = useState(false);
	const [dataTable, setDataTable] = useState(permissionGroupTable)
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const [dataTablePermission, setDataTablePermission] = useState(permissionDetails)
	const { t } = useTranslation();
	const [isHidePermissionList, setIsHidePermissionList] = useState(false);
	const [permissionGroupDetail, setPermissionGroupDetail] = useState(permissionGroupInfo);

	const handleSearch = (values: any) => {
		console.log(values)
	}

	const columns = [
		{
			title: `${t('table.permission.group.id')}`,
			dataIndex: 'id',
		},
		{
			title: `${t('table.permission.group.name')}`,
			dataIndex: 'name',
		},
		{
			title: `${t('action.detail')}`,
			dataIndex: 'action',
			render: (text: string, record: any) => {
				return (
					<Button title={`${t('action.detail')}`} key={`detail_${record.id}`} type="primary"
					        onClick={() => handleDetail(record.id)}
					        icon={<InfoOutlined />}></Button>
				)
			}
		},
	]


	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.permission.group.name')}`, name: FormName.NAME, type: TypeInputProps.INPUT
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

	const handleDetail = (id: string) => {
		setIsInfo(true)
	}
	const handeCancelDetail = () => {
		setIsInfo(false)
	}
	const handleSavePermission = () => {
		message.warning("Tính năng đang phát triển");
	}
	return (
		<React.Fragment>
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
            <PermissionDetailList dataTable={dataTablePermission}
                                  handleSave={handleSavePermission}
                                  handleSelect={handleCheckPermission} />}
				</Col>
			</Row>
			<PermissionDetail handleCancel={handeCancelDetail} isOpen={isInfo} info={permissionGroupDetail} />
		</React.Fragment>
	)
}

export default PermissionManagement;