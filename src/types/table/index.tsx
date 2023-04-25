import { TableProps } from "antd";
import React, { ReactNode } from "react";

export interface TableCustomProps extends TableProps<any> {
	title?: any
	setDataFilter: (value: any) => void;
	dataTable: any
}