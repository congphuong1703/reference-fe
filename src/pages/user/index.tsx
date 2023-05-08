import React, { useMemo, useState } from 'react';
import Table from "../../components/table";
import { initDataFilter, layoutForm, STATUS } from "../../constants";
import { Button, Card, Col, Form, Input, message, Modal, notification, Row, Select, Space, Tag } from "antd";
import { useTranslation } from "react-i18next";
import {
	AuditOutlined,
	CheckOutlined,
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleOutlined,
	MenuOutlined,
	PlusOutlined,
	SearchOutlined,
	UnlockOutlined
} from "@ant-design/icons";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import Breadcrumb from "../../components/breadcrumb";
import { userTable } from "../../_mock/user.d";
import AddUser from "./AddUser";

const enum FormName {
	USERNAME = "username",
	STATUS = "status",
	ROLE = "role",

}

const UserManagement = () => {
	const [formSearch] = Form.useForm()
	const [dataTable, setDataTable] = useState(userTable)
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const { t } = useTranslation();
	const [api] = notification.useNotification();
	const [formAdd] = Form.useForm();
	const [isModalAdd, setIsModalAdd] = useState(false)
	const [isModalDelete, setIsModalDelete] = useState(false)

	const handleSearch = (values: any) => {
		console.log(values)
	}

	const columns = [
		{
			title: `${t('table.user.username')}`,
			dataIndex: 'username',
		},
		{
			title: `${t('table.user.email')}`,
			dataIndex: 'email',
		},
		{
			title: `${t('table.user.fullName')}`,
			dataIndex: 'fullName',
		},
		{
			title: `${t('table.user.roleName')}`,
			dataIndex: 'roleName',
		},
		{
			title: `${t('table.user.status')}`,
			dataIndex: 'status',
			render: (text: string, record: any) => {
				return (
					record.status ?
						<Tag key={`status_${record.id}`} color="success">
							{t('status.active')}
						</Tag>
						:
						<Tag key={`status_${record.id}`} color="default">
							{t(`status.inactive`)}
						</Tag>
				)
			}
		},
		{
			title: `${t('table.action')}`,
			dataIndex: 'action',
			render: (text: string, record: any) => {
				return (
					<Space key={record.id}>
						<Button title={`${t('action.edit')}`} onClick={handleUpdateUser} icon={<EditOutlined />} type="primary" />
						<Button title={`${t('action.menu')}`} icon={<MenuOutlined />} type="primary" />
						<Button title={`${t('action.delete')}`} onClick={() => onDeleteUser(record.id)} icon={<DeleteOutlined />} danger />
					</Space>
				)
			}
		},
	]

	const handleConfirmDelete = (id: string) => {
		message.warning("Tính năng đang phát triển: " + id)
	}
	const handleCancelDelete = () => {
		setIsModalDelete(false)
	}

	const onDeleteUser = (id: string) => {
		setIsModalDelete(true)
		Modal.confirm({
			open: isModalDelete,
			title: t('modal.confirm'),
			icon: <ExclamationCircleOutlined />,
			content: t('modal.user.confirmDelete'),
			onOk: () => handleConfirmDelete(id),
			onCancel: handleCancelDelete,
			okText: t('action.confirm'),
			cancelText: t('action.cancel')
		})
	}

	const handleCancelModalAdd = () => {
		formAdd.resetFields();
		setIsModalAdd(false);
	}

	const handleSubmitModalAdd = (values: any) => {
		console.log(values)
		message.warning("Tính năng đang phát triển")
	}

	const handleAdd = () => {
		formAdd.resetFields();
		setIsModalAdd(true);
	}

	const handleUpdateUser = () => {
		formAdd.resetFields();
		setIsModalAdd(true)
	}

	const handleDataFilter = (value: any) => {
		setDataFilter(value)
	}

	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.user.username')}`, name: FormName.USERNAME, type: TypeInputProps.INPUT
		},
		{
			label: `${t('form.user.status')}`, name: FormName.STATUS, type: TypeInputProps.SELECT,
			options: STATUS.map((ele: string) => {
				return {
					value: ele,
					label: t('status.' + ele)
				}
			})
		},
		{
			label: `${t('form.role.name')}`, name: FormName.ROLE, type: TypeInputProps.SELECT
		},
	]

	return (
		<Card title={<Breadcrumb />}>
			<Table
				onFinish={handleSearch}
				form={formSearch}
				extra={
					<Button icon={<PlusOutlined />} type="primary" onClick={handleAdd} title={`${t('action.addNew')}`}>{t('action.addNew')}</Button>
				}
				columns={columns}
				searchHeader={searchHeader}
				setDataFilter={handleDataFilter}
				dataTable={dataTable}
			/>
			<AddUser isOpen={isModalAdd} onCancel={handleCancelModalAdd} form={formAdd} onFinish={handleSubmitModalAdd} />
		</Card>
	)
}

export default UserManagement
