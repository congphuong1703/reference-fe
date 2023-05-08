import React from 'react'
import Table from "../../components/table";
import { useTranslation } from "react-i18next";
import { UserListProps } from "../../types/role";

const UserList = (props: UserListProps) => {
	const { t } = useTranslation();
	const { dataTable, setDataFilter } = props;
	const columnUsers = [
		{
			title: `${t("table.user.username")}`,
			dataIndex: 'username',
		},
		{
			title: `${t("table.user.fullName")}`,
			dataIndex: 'fullName',
		},
		{
			title: `${t("table.user.email")}`,
			dataIndex: 'email',
		}
	]

	return (
		<Table
			dataTable={dataTable}
			setDataFilter={setDataFilter}
			columns={columnUsers}
		/>
	)
}
export default UserList;