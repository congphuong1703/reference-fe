export type NotificationProps = {
	type?: NotificationType;
	message: string;
	description: any;
	placement?: PlacementType;
};

export enum NotificationType {
	'ERROR' = 'error',
	'INFO' = 'info',
	'SUCCESS' = 'success',
	'WARNING' = 'warning',
}

export enum PlacementType {
	'TOP' = 'top',
	'BOTTOM' = 'bottom',
	'TOP_RIGHT' = 'topRight',
	'BOTTOM_RIGHT' = 'bottomRight',
	'BOTTOM_LEFT' = 'bottomLeft',
	'TOP_LEFT' = 'topLeft',
}
