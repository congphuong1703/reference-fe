import { useTranslation } from "react-i18next";
import React from 'react';
import { Modal } from "antd";
import { ModalConfirmProps } from "../../types/modal/index.d";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export const ModalConfirm = (props: ModalConfirmProps) => {
	const { title, content, onCancel, onOk, isOpen, id } = props;
	const { t } = useTranslation();
	return (
		Modal.confirm({
			open: isOpen,
			title: title || t('modal.confirm'),
			icon: <ExclamationCircleOutlined />,
			content: content,
			onOk: () => onOk(id),
			onCancel: onCancel,
			okText: t('action.confirm'),
			cancelText: t('action.cancel')
		})
	)
}

