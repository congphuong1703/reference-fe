import { ReactNode } from "react";

export type ModalFormProps = {
	isOpen: boolean,
	form: any
	onCancel: () => void
	title: any
	children: ReactNode
	width?: number

}

export type ModalConfirmProps = {
	title?: string,
	content: any,
	onCancel: () => void
	onOk: (value: any) => void,
	isOpen: boolean
	id: string


}