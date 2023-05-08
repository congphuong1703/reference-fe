import { FormCustomProps } from "../../types/common";
import { useTranslation } from "react-i18next";
import { Form, Input, Select } from "antd";
import { FORM_NAME } from "../../constants";
import React from "react";
import { FormMenuProps } from "../../types/menu/index.d";

const { Option } = Select

const FormMenu = (props: FormMenuProps) => {
	const { form, parentIds, onFinish } = props;
	const { t } = useTranslation();
	return (
		<Form name="form" form={form} labelAlign="left"
		      onFinish={onFinish} labelCol={{ span: 8 }}
		      wrapperCol={{ span: '100%' }}
		>
			<Form.Item name={FORM_NAME.MENU_ID} hidden label={t('form.menu.id')}>
				<Input name={FORM_NAME.MENU_ID} placeholder={`${t('form.menu.id')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.NAME} label={t('form.menu.name')}>
				<Input name={FORM_NAME.NAME} placeholder={`${t('form.menu.name')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.MENU_URL} label={t('form.menu.url')}>
				<Input name={FORM_NAME.MENU_URL} placeholder={`${t('form.menu.url')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.MENU_ORDER} label={t('form.menu.order')}>
				<Input name={FORM_NAME.MENU_ORDER} placeholder={`${t('form.menu.order')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.MENU_ICON} label={t('form.menu.icon')}>
				<Input name={FORM_NAME.MENU_ICON} placeholder={`${t('form.menu.icon')}`} />
			</Form.Item>
			<Form.Item name={FORM_NAME.MENU_PARENT_ID} label={t('form.menu.parent')}>
				<Select placeholder={`${t('form.menu.parent')}`}
				        showSearch
				        showArrow
				        // onSearch={(value) => handleSelectPositions(value)}
				        // onFocus={() => handleSelectPositions("")}
				        // defaultActiveFirstOption={false}
				        notFoundContent={null}
				        filterOption={false}
				>
					{parentIds.map((ele: any) => {
						return (
							<Option key={ele.id} value={ele.id}>
								{ele.name}
							</Option>
						)
					})}
				</Select>
			</Form.Item>
		</Form>
	)
}

export default FormMenu;