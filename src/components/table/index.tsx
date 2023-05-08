import { Button, Col, Form, Input, Row, Select, Space, Table } from "antd";
import React from 'react';
import { SearchHeaderProps, TableCustomProps, TypeInputProps } from "../../types/table";
import { STATUS } from "../../constants";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { debounce } from "../../ultis/UtilsHelper";

const TableCustom = (props: TableCustomProps) => {
	const { setDataFilter, dataTable, handleFetchOptions, form, extra, onFinish, searchHeader } = props;
	const { t } = useTranslation();
	const onChangeTable = (sorter: any) => {
		let orderType = 'ASC';
		if (sorter) {
			if (sorter.order === 'ascend') {
				orderType = 'ASC';
			} else if (sorter.order === 'descend') {
				orderType = 'DESC';
			}
			if (sorter.column !== undefined) {
				if (setDataFilter) {
					setDataFilter({
						sortBy: sorter.column.dataIndex,
						sortType: orderType,
					});
				}
			}
		}
	};

	const onSearch = debounce((value: string, name: string) => {
		if (handleFetchOptions) {
			handleFetchOptions(value, name)
		}
	}, 500);

	const title = () => {
		return (
			<Form layout="vertical" form={form} onFinish={onFinish}>
				<Row>
					<Col span={16}>
						<Space>
							{searchHeader?.map((ele: SearchHeaderProps, index: number) => {
								let componentForm;
								if (ele.type === TypeInputProps.INPUT) {
									componentForm = <Input width={200} placeholder={ele.label} />
								} else if (ele.type === TypeInputProps.SELECT) {
									if (handleFetchOptions) {
										componentForm = <Select style={{ width: 200 }} placeholder={ele.label}
										                        showSearch
										                        showArrow
										                        onSearch={(value: string) => onSearch(value, ele.name)}
										                        onFocus={() => onSearch("", ele.name)}
										                        notFoundContent={null}
										                        filterOption={false}
										>
											{ele.options?.map((ele: any) => {
												return (
													<Select.Option value={typeof ele === "string" ? ele : ele.value} key={ele}>
														{typeof ele === 'string' ? ele : ele.label}
													</Select.Option>
												)
											})}
										</Select>
									} else {
										componentForm = <Select style={{ width: 200 }} placeholder={ele.label}>
											{ele.options?.map((ele: any) => {
												return (
													<Select.Option value={typeof ele === "string" ? ele : ele.value} key={ele}>
														{typeof ele === 'string' ? ele : ele.label}
													</Select.Option>
												)
											})}
										</Select>
									}
								}
								return (
									componentForm ?
										<Form.Item name={ele.name} label={ele.label} key={index}>
											{componentForm}
										</Form.Item> : ''
								)
							})}
						</Space>
					</Col>
					<Col span={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Space>
							<Button icon={<SearchOutlined />} title={`${t('action.search')}`} htmlType="submit" type="primary">
								{t("action.search")}
							</Button>
							{extra}
						</Space>
					</Col>
				</Row>
			</Form>
		)
	}

	const showTotal = (total: any, range: any) => {
		return `Hiển thị ${range[0]} đến ${range[1]} của ${total} bản ghi`;
	};


	return (
		<Table
			{...props}
			title={searchHeader && title}
			dataSource={dataTable.data ? dataTable.data : dataTable}
			pagination={{
				showTotal,
				total: dataTable.total,
				current: dataTable.currentPage,
				pageSize: dataTable.perPage,
				showSizeChanger: true,
				onChange: (page, pageSize) => {
					if (setDataFilter) {
						setDataFilter({
							page,
							pageSize,
						});
					}
				},
			}}
			onChange={(sorter) => {
				onChangeTable(sorter);
			}}
		/>
	)
}

export default TableCustom;