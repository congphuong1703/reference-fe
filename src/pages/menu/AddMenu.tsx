import ModalForm from "../../components/modal/ModalForm";
import { useTranslation } from "react-i18next";
import React from "react";
import FormMenu from "./FormMenu";
import { ModalMenuAddProps } from "../../types/menu/index.d";

const AddMenu = (props: ModalMenuAddProps) => {
	const { isOpen, form, parentIds, onCancel, onFinish } = props;
	const { t } = useTranslation();
	return (
		<ModalForm isOpen={isOpen}
		           form={form}
		           width={600}
		           children={<FormMenu parentIds={parentIds} onFinish={onFinish} form={form} />}
		           onCancel={onCancel} title={t('modal.addMenu.title')} />
	)
}

export default AddMenu;