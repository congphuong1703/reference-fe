export type UserListProps = {
	dataTable: any,
	setDataFilter: (value: any) => void;
}

export type AddRoleProps = {
	isOpen: boolean,
	form: any
	onFinish: (values: any) => void
	onCancel: () => void,
}

export type FormRoleProps = {
	onFinish: (values: any) => void
	form: any
}

export type PermissionMenuProps = {
	dataTable: any,
	selectedRowKeys: any[],
	handleChangeSelectedKeys: (value: any) => void,
	isOpen: boolean,
	onCancel: () => void,
	onOk: () => void
}