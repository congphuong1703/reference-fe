import { Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React from 'react'
import { useTranslation } from "react-i18next";
import { FormUserProps } from "../../types/user";
import { FORM_NAME, GENDER } from "../../constants";
import { roles } from "../../_mock/role.d";
import { departments } from "../../_mock/department.d";
import { positions } from "../../_mock/position.d";
import { employees } from "../../_mock/employee.d";

const { Option } = Select
const { TextArea } = Input
const FormUser = (props: FormUserProps) => {
	const { form, onFinish } = props;
	const { t } = useTranslation();
	return (
		<Form name="form" form={form}
		      labelAlign="left"
		      onFinish={onFinish} labelCol={{ span: 8 }}
		      wrapperCol={{ span: '100%' }}
		>
			<Row gutter={16}>
				<Col span={12}>
					<Card size="small" title={t('modal.addUser.basicInfo')}>
						<Form.Item name={FORM_NAME.USER_ID} hidden label={t('form.user.id')}>
							<Input name={FORM_NAME.USER_ID} placeholder={`${t('form.user.id')}`} />
						</Form.Item>
						<Form.Item name={FORM_NAME.USERNAME} label={t('form.user.username')}>
							<Input name={FORM_NAME.USERNAME} placeholder={`${t('form.user.username')}`} />
						</Form.Item>
						<Form.Item name={FORM_NAME.EMAIL} label={t('form.user.email')}>
							<Input name={FORM_NAME.EMAIL} placeholder={`${t('form.user.email')}`} />
						</Form.Item>
						<Form.Item name={FORM_NAME.FULL_NAME} label={t('form.user.fullName')}>
							<Input name={FORM_NAME.FULL_NAME} placeholder={`${t('form.user.fullName')}`} />
						</Form.Item>
						<Form.Item name={FORM_NAME.DOB} label={t('form.user.dob')}>
							<DatePicker name={FORM_NAME.DOB} style={{ width: '100%' }} placeholder={`${t('form.user.dob')}`} />
						</Form.Item>
						<Form.Item name={FORM_NAME.ADDRESS} label={t('form.user.address')}>
							<TextArea name={FORM_NAME.ADDRESS} placeholder={`${t('form.user.address')}`} />
						</Form.Item>
						<Form.Item name={FORM_NAME.GENDER} label={t('form.user.gender')}>
							<Select placeholder={`${t('form.user.gender')}`}>
								{GENDER.map((ele: any) => {
									return (
										<Option key={ele.value} value={ele.value}>{t(`gender.${ele.label}`)}</Option>
									)
								})}
							</Select>
						</Form.Item>
						<Form.Item name={FORM_NAME.PHONE_NUMBER} label={t('form.user.phoneNumber')}>
							<Input name={FORM_NAME.PHONE_NUMBER} placeholder={`${t('form.user.phoneNumber')}`} />
						</Form.Item>
					</Card>
				</Col>
				<Col span={12}>
					<Card size="small" title={t('modal.addUser.workInfo')}>
						<Form.Item name={FORM_NAME.ROLE_ID} label={t('form.user.role')}>
							<Select placeholder={`${t('form.user.role')}`}>
								{roles.map((ele: any) => {
									return (
										<Option key={ele.id} value={ele.id}>{ele.name}</Option>
									)
								})}
							</Select>
						</Form.Item>
						<Form.Item name={FORM_NAME.DEPARTMENT_ID} label={t('form.user.department')}>
							<Select placeholder={`${t('form.user.department')}`}>
								{departments.map((ele: any) => {
									return (
										<Option key={ele.id} value={ele.id}>{ele.name}</Option>
									)
								})}
							</Select>
						</Form.Item>
						<Form.Item name={FORM_NAME.POSITION_ID} label={t('form.user.position')}>
							<Select placeholder={`${t('form.user.position')}`}>
								{positions.map((ele: any) => {
									return (
										<Option key={ele.id} value={ele.id}>{ele.name}</Option>
									)
								})}
							</Select>
						</Form.Item>
						<Form.Item name={FORM_NAME.EMPLOYEE_ID} label={t('form.user.employee')}>
							<Select placeholder={`${t('form.user.employee')}`}>
								{employees.map((ele: any) => {
									return (
										<Option key={ele.id} value={ele.id}>{ele.code}</Option>
									)
								})}
							</Select>
						</Form.Item>
					</Card>
				</Col>
			</Row>
		</Form>
	)
}

export default FormUser;