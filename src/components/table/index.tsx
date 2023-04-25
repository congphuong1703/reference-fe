import { Table } from "antd";
import React from 'react';
import { TableCustomProps } from "../../types/table";

const TableCustom = (props: TableCustomProps) => {
	const { setDataFilter, dataTable } = props;
	const onChangeTable = (sorter: any) => {
		let orderType = 'ASC';
		if (sorter) {
			if (sorter.order === 'ascend') {
				orderType = 'ASC';
			} else if (sorter.order === 'descend') {
				orderType = 'DESC';
			}
			if (sorter.column !== undefined) {
				setDataFilter({
					sortBy: sorter.column.dataIndex,
					sortType: orderType,
				});
			}
		}
	};

	const showTotal = (total: any, range: any) => {
		return `Hiển thị ${range[0]} đến ${range[1]} của ${total} bản ghi`;
	};

	return (
		<Table
			{...props}
			pagination={{
				showTotal,
				total: dataTable.total,
				current: dataTable.currentPage,
				pageSize: dataTable.perPage,
				showSizeChanger: true,
				onChange: (page, pageSize) => {
					setDataFilter({
						page,
						pageSize,
					});
				},
			}}
			onChange={(sorter) => {
				onChangeTable(sorter);
			}}
		/>
	)
}

export default TableCustom;