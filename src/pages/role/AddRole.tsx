import ModalForm from "../../components/modal/ModalForm";
import FormRole from "./FormRole";
import { useTranslation } from "react-i18next";
import React from "react";
import { ModalAddProps } from "../../types/common";

const AddRole = (props: ModalAddProps) => {
	const { isOpen, form, onCancel, onFinish } = props;
	const { t } = useTranslation();
	return (
		<ModalForm isOpen={isOpen}
		           form={form}
		           width={600}
		           children={<FormRole onFinish={onFinish} form={form} />}
		           onCancel={onCancel} title={t('modal.addRole.title')} />
	)
}

export default AddRole;