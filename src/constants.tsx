export const initDataFilter = {
	page: 1,
	perPage: 10
}

export const STATUS: string[] = [
	"active",
	"inactive"
]

export const GENDER = [
	{
		label: 'male',
		value: 1
	},
	{
		label: 'female',
		value: 0
	}
]
export const layoutForm = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}

export const DATE_FORMAT = {
	MDY: "MM/DD/YYYY",
	DMY: "DD/MM/YYYY",
	DMY_DASH: "DD-MM-YYYY",

}

export const FONT_SIZE_LEVEL = 4

export const FORM_NAME = {
	USER_ID: 'id',
	USERNAME: 'username',
	EMAIL: 'email',
	FULL_NAME: 'fullName',
	DOB: 'dob',
	ADDRESS: 'address',
	GENDER: 'gender',
	PHONE_NUMBER: 'phoneNumber',
	// --------- ----------
	ROLE_ID: 'roleId',
	EMPLOYEE_ID: 'employeeId',
	DEPARTMENT_ID: 'departmentId',
	POSITION_ID: 'positionId',
	// ---------Role----------
	NAME: 'name',
	DESCRIPTION: 'description',

// --------- MENU----------
	MENU_ID: 'id',
	MENU_ORDER: 'order',
	MENU_ICON: 'icon',
	MENU_PARENT_ID: 'parentId',
	MENU_URL: 'url',
	STATUS: 'status',
}