import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import Table from "../../components/table";
import React from 'react'
import { PermissionMenuProps } from "../../types/role";

const PermissionMenu = (props: PermissionMenuProps) => {
	const { dataTable, isOpen, onOk, onCancel, selectedRowKeys, handleChangeSelectedKeys } = props;
	const { t } = useTranslation()
	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		// selectedRowKeys: selectedRowKeys
	};

	const columns = [
		{
			title: `${t('table.menu.id')}`,
			dataIndex: 'id'
		},
		{
			title: `${t('table.menu.name')}`,
			dataIndex: 'name',
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
			title: `${t('table.menu.url')}`,
			dataIndex: 'url'
		},
		{
			title: `${t('table.menu.icon')}`,
			dataIndex: 'icon'
		},
	]

	return (
		<Modal title={t('modal.menu.title')}
		       forceRender={true}
		       width={1000}
		       okText={t('action.save')}
		       cancelText={t('action.cancel')}
		       open={isOpen} onOk={onOk} onCancel={onCancel}>
			<Table dataTable={dataTable}
			       rowSelection={rowSelection}
			       columns={columns}
			       pagination={false}
			/>
		</Modal>
	)
}
export default PermissionMenu;