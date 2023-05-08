import { TableProps } from "antd";
import React from "react";

export interface TableCustomProps extends TableProps<any> {
	title?: any
	setDataFilter?: (value: any) => void;
	dataTable: any
	searchHeader?: SearchHeaderProps[]
	onFinish?: (values: any) => void;
	extra?: any,
	form?: any
	handleFetchOptions?: (value: string, name: string) => void
}

export type SearchHeaderProps = {
	label: any,
	name: string,
	type: TypeInputProps,
	options?: any[]
}

export enum TypeInputProps {
	INPUT = "INPUT",
	SELECT = "SELECT"
}
