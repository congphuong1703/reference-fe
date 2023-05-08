export interface FormCustomProps {
	onFinish: (values: any) => void
	form: any
}

export interface ModalAddProps {
	isOpen: boolean,
	form: any
	onFinish: (values: any) => void
	onCancel: () => void,
}

export interface GetOptionSelectProps {
	url: string,
	callBackFunction: (value: any) => void
	value?: string,

}