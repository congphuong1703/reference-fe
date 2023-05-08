import { Button, Card, Form, message, Modal, Space } from "antd";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/breadcrumb";
import React, { useState } from "react";
import Table from "../../components/table";
import { menus, menuTable } from "../../_mock/menu.d";
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { FORM_NAME, initDataFilter, STATUS } from "../../constants";
import { SearchHeaderProps, TypeInputProps } from "../../types/table";
import AddMenu from "./AddMenu";

const MenuManagement = () => {
	const [dataTable, setDataTable] = useState(menuTable);
	const [formAdd] = Form.useForm();
	const [formSearch] = Form.useForm();
	const { t } = useTranslation()
	const [dataFilter, setDataFilter] = useState(initDataFilter)
	const [menuParents, setMenuParents] = useState(menus);
	const [isOpenAdd, setIsOpenAdd] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const handleEdit = (id: string) => {
		formAdd.resetFields();
		setIsOpenAdd(true);
	}

	const handleDelete = (id: string) => {
		setIsOpenDelete(true);
		Modal.confirm({
			open: isOpenDelete,
			title: t('modal.confirm'),
			icon: <ExclamationCircleOutlined />,
			content: t('modal.menu.confirmDelete'),
			onOk: () => handleConfirmDelete(id),
			onCancel: handleCancelDelete,
			okText: t('action.confirm'),
			cancelText: t('action.cancel')
		})
	}

	const handleCancelDelete = () => {
		setIsOpenDelete(false);
	}

	const handleConfirmDelete = (id: string) => {
		setIsOpenDelete(false);
	}

	const handleAdd = () => {
		formAdd.resetFields();
		setIsOpenAdd(true);
	}
	const columns = [
		{
			title: `${t('table.index')}`,
			dataIndex: 'index',
			render: (text: string, record: any, index: number) => {
				return index + 1
			},
		},
		{
			title: `${t('table.menu.id')}`,
			dataIndex: 'id',
		},
		{
			title: `${t('table.menu.name')}`,
			dataIndex: 'name',
		},
		{
			title: `${t('table.menu.url')}`,
			dataIndex: 'url',
		},
		{
			title: `${t('table.menu.icon')}`,
			dataIndex: 'icon',
		},
		{
			title: `${t('table.menu.order')}`,
			dataIndex: 'order',
		},
		{
			title: `${t('table.menu.parentId')}`,
			dataIndex: 'parentId',
		},
		{
			title: `${t('table.action')}`,
			dataIndex: 'action',
			render: (text: string, record: any) => {
				return (
					<Space key={`space_${record.id}`}>
						<Button type="primary" title={`${t('action.edit')}`} icon={<EditOutlined />} onClick={() => handleEdit(record.id)}>
						</Button>
						<Button danger title={`${t('action.delete')}`} icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
						</Button>
					</Space>
				)
			}
		}
	]

	const handleSearch = (values: any) => {
		message.warning('Tính năng đang phát triển')
	}

	const searchHeader: SearchHeaderProps[] = [
		{
			label: `${t('form.menu.name')}`, name: FORM_NAME.NAME, type: TypeInputProps.INPUT
		},
		{
			label: `${t('form.menu.url')}`, name: FORM_NAME.MENU_URL, type: TypeInputProps.INPUT,
		},
	]

	const handleDataFilter = (value: any) => {
		setDataFilter(value)
	}

	const handleSubmitAdd = (values: any) => {
		message.warning("Tính năng đang phát triển")
	}

	const handleCancelAdd = () => {
		formAdd.resetFields();
		setIsOpenAdd(false);
	}

	return (
		<Card title={<Breadcrumb />}>
			<Table dataTable={dataTable}
			       onFinish={handleSearch}
			       form={formSearch}
			       columns={columns}
			       searchHeader={searchHeader}
			       setDataFilter={handleDataFilter}
			       extra={
				       <Button icon={<PlusOutlined />} type="primary" onClick={handleAdd} title={`${t('action.addNew')}`}>{t('action.addNew')}</Button>
			       }
			/>
			<AddMenu parentIds={menuParents} form={formAdd} onFinish={handleSubmitAdd} onCancel={handleCancelAdd} isOpen={isOpenAdd} />
		</Card>
	)
}

export default MenuManagement