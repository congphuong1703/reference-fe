export type CommonState = {
	loadingButton: boolean
	loadingTable: boolean
	loading: boolean
}

export enum ActionType {
	LOADING_BUTTON = 'LOADING_BUTTON',
	LOADING_TABLE = 'LOADING_TABLE'
}