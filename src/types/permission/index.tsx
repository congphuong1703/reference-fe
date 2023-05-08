export type PermissionListProps = {
	dataTable: any
	handleSelect: (value: any) => void,
	handleSave: (value: any) => void,

}

export type PermissionDetailListProps = {
	dataTable: any,
	handleSelect: (value: any) => void
	handleSave: (value: any) => void
}

export type PermissionDetailProps = {
	isOpen: boolean,
	handleCancel: () => void,
	info: any
}