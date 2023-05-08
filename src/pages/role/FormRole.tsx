import { Form, Input, Select } from "antd";
import { FORM_NAME, STATUS } from "../../constants";
import { useTranslation } from "react-i18next";
import React from 'react'
import { FormCustomProps } from "../../types/common";

const FormRole = (props: FormCustomProps) => {
	const { form, onFinish } = props;
	const { t } = useTranslation();
	return (
		<Form name="form" form={form} labelAlign="left"
		      onFinish={onFinish} labelCol={{ span: 8 }}
		      wrapperCol={{ span: '100%' }}
		>
			<Form.Item name={FORM_NAME.ROLE_ID} hidden label={t('form.role.id')}>
				<Input name={FORM_NAME.ROLE_ID} placeholder={`${t('form.role.id')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.NAME} label={t('form.role.name')}>
				<Input name={FORM_NAME.NAME} placeholder={`${t('form.role.name')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.DESCRIPTION} label={t('form.role.description')}>
				<Input name={FORM_NAME.DESCRIPTION} placeholder={`${t('form.role.description')}`} />
			</Form.Item>
		</Form>
	)
}
export default FormRole;