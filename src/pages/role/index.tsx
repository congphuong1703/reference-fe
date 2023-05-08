import React, { useState } from 'react';
import { Button, Card, Col, Form, message, Modal, notification, Row, Space } from "antd";
import { FORM_NAME, initDataFilter } from "../../constants";
import { useTranslation } from "react-i18next";
import { AuditOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MenuOutlined, PlusOutlined, UnlockOutlined } from "@ant-design/icons";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import Table from "../../components/table";
import { roles, roleTable } from "../../_mock/role.d";
import UserList from "./UserList";
import { userTable } from "../../_mock/user.d";
import Breadcrumb from "../../components/breadcrumb";
import AddRole from "./AddRole";
import PermissionMenu from "./PermissionMenu";
import { menus, menuTable } from "../../_mock/menu.d";

const RoleManagement = () => {
	const [formSearch] = Form.useForm()
	const [formAdd] = Form.useForm()
	const [dataTable, setDataTable] = useState(roleTable)
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const [dataTableUser, setDataTableUser] = useState(userTable);
	const [dataFilterUser, setDataFilterUser] = useState(initDataFilter);
	const [isHideUserList, setIsHideUserList] = useState(false);
	const { t } = useTranslation();
	const [api] = notification.useNotification();
	const [isOpenAdd, setIsOpenAdd] = useState(false)
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [isOpenPermissionMenu, setIsPermissionMenu] = useState(false);
	const [dataTablePermissionMenu, setDataTablePermissionMenu] = useState(menus)
	const [permissionMenuSelectedKeys, setPermissionMenuSelectedKeys] = useState([]);
	const handleSubmitAdd = (values: any) => {
		message.warning("Tính năng đang phát triển")
	}


	const handleCancelAdd = () => {
		formAdd.resetFields();
		setIsOpenAdd(false);
	}

	const handleOpenAdd = () => {
		formAdd.resetFields();
		setIsOpenAdd(true);
	}
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
		{
			title: `${t('table.action')}`,
			dataIndex: 'action',
			render: (text: string, record: any) => {
				return (
					<Space key={record.id}>
						<Button title={`${t('action.edit')}`} onClick={() => handleOpenEdit(record.id)} key={`edit_${record.id}`} icon={<EditOutlined />} type="primary" />
						<Button title={`${t('action.permission')}`} onClick={() => onPermissionMenu(record.id)} key={`permission_menu_${record.id}`}
						        icon={<MenuOutlined />} type="primary" />
						<Button title={`${t('action.delete')}`} onClick={() => handleDelete(record.id)} key={`delete_${record.id}`} icon={<DeleteOutlined />} danger
						        type="primary" />
					</Space>
				)
			}
		},
	]
	const extraHeaderForm = (
		<Button icon={<PlusOutlined />} type="primary" onClick={handleOpenAdd} title={`${t('action.addNew')}`}>{t('action.addNew')}</Button>
	)

	const handleOpenEdit = (id: string) => {
		formAdd.resetFields();
		setIsOpenAdd(true);
	}

	const handleConfirmDelete = (id: string) => {
		message.warning("Tính năng đang phát triển");
	}

	const handleCancelDelete = () => {
		setIsOpenDelete(false);
	}
	const handleDelete = (id: string) => {
		setIsOpenDelete(true);
		Modal.confirm({
			open: isOpenDelete,
			title: t('modal.confirm'),
			icon: <ExclamationCircleOutlined />,
			content: t('modal.role.confirmDelete'),
			onOk: () => handleConfirmDelete(id),
			onCancel: handleCancelDelete,
			okText: t('action.confirm'),
			cancelText: t('action.cancel')
		})
	}

	const onPermissionMenu = (id: string) => {
		setIsPermissionMenu(true);
	}
	const handleDataFilter = (value: any) => {
		setDataFilter(value);
	}

	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.role.name')}`, name: FORM_NAME.NAME, type: TypeInputProps.INPUT
		},
	]


	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			setIsHideUserList(true);
		},
	};

	const handleChangeSelectedKeys = (value: any) => {

	}

	const handleOkPermissionMenu = () => {
		setIsPermissionMenu(true);
	}

	const handleClosePermissionMenu = () => {
		setIsPermissionMenu(false);
	}

	return (
		<Card title={<Breadcrumb />}>
			<Row gutter={16}>
				<Col span={12}>
					<Table
						onFinish={handleSearch}
						form={formSearch}
						columns={columns}
						extra={extraHeaderForm}
						rowSelection={{
							type: 'radio',
							...rowSelection
						}}
						searchHeader={searchHeader}
						setDataFilter={handleDataFilter}
						dataTable={dataTable}
					/>
				</Col>
				<Col span={12}>
					{isHideUserList && <UserList dataTable={dataTableUser}
                                       setDataFilter={setDataFilterUser} />}
				</Col>
			</Row>
			<AddRole form={formAdd} onCancel={handleCancelAdd}
			         isOpen={isOpenAdd} onFinish={handleSubmitAdd} />
			<PermissionMenu dataTable={dataTablePermissionMenu} selectedRowKeys={permissionMenuSelectedKeys}
			                isOpen={isOpenPermissionMenu} onOk={handleOkPermissionMenu} onCancel={handleClosePermissionMenu}
			                handleChangeSelectedKeys={handleChangeSelectedKeys} />
		</Card>
	)
}

export default RoleManagement;