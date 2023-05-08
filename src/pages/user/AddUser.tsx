import React from 'react';
import { useTranslation } from "react-i18next";
import ModalForm from "../../components/modal/ModalForm";
import FormUser from "./FormUser";
import { ModalAddProps } from "../../types/common";


const AddUser = (props: ModalAddProps) => {
	const { isOpen, form, onCancel, onFinish } = props;
	const { t } = useTranslation();

	return (
		<ModalForm isOpen={isOpen} form={form} onCancel={onCancel} title={t('modal.addUser.title')}
		           children={<FormUser form={form} onFinish={onFinish} />}
		/>
	)
}

export default AddUser;