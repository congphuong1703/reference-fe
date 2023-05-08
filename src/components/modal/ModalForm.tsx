import { Button, Form, Modal, Space } from "antd";
import React from "react";
import { ModalFormProps } from "../../types/modal/index.d";
import { useTranslation } from "react-i18next";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";

const ModalForm = (props: ModalFormProps) => {
	const { isOpen, onCancel, form, title, children, width = 1000 } = props;
	const { t } = useTranslation();
	return (
		<Modal title={title}
		       getContainer={false}
		       forceRender={true}
		       open={isOpen}
		       onCancel={onCancel}
		       width={width}
		       footer={[
			       <Space key="space">
				       <Button htmlType="button" icon={<CloseOutlined />} onClick={onCancel}>{t('action.close')}</Button>
				       <Button type="primary"
				               form="form"
				               key="submit"
				               icon={<SaveOutlined />}
				               htmlType="submit">
					       {form.getFieldValue("id") == undefined ? t('action.addNew') : t('action.update')}
				       </Button>
			       </Space>
		       ]}
		>
			{children}
		</Modal>
	)
}

export default ModalForm;