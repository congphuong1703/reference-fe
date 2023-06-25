import React from "react";
import { Descriptions, Typography, List, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { PermissionDetailProps } from "../../types/permission";

const PermissionDetail = (props: PermissionDetailProps) => {
	const { isOpen, handleCancel, info } = props;
	const { t } = useTranslation();
	return (
		<Modal open={isOpen} onCancel={handleCancel} width={600} cancelText={t('action.close')}>
			<Descriptions layout="horizontal" title={t('modal.permissionGroup.basicInfo')}>
				<Descriptions.Item span={24} label={t('modal.permissionGroup.id')}>{info.id}</Descriptions.Item>
				<Descriptions.Item span={24} label={t('modal.permissionGroup.name')}>{info.name}</Descriptions.Item>
				<Descriptions.Item span={24} label={t('modal.permissionGroup.order')}>{info.order}</Descriptions.Item>
			</Descriptions>
			<List
				header={t('modal.permissionGroup.selected')}
				dataSource={info.permissions} size="small"
				renderItem={(item: any) =>
					<List.Item><Typography.Text>{item}</Typography.Text></List.Item>
				}
			/>
		</Modal>
	)
}

export default PermissionDetail;