export const permissions = [
	{
		key: '1',
		id: 'permission 1',
		name: 'permission 1',
	},
	{
		key: '2',
		id: 'permission 2',
		name: 'permission 2',
	},
	{
		key: '3',
		id: 'permission 3',
		name: 'permission 3',
	},
]

export const permissionGroups = [
	{
		key: 1,
		id: "id 1",
		name: "name 1"
	},
	{
		key: 2,
		id: "id 2",
		name: "name 3"
	},
	{
		key: 3,
		id: "id 3",
		name: "name 3"
	},
	{
		key: 4,
		id: "id 4",
		name: "name 4"
	},
]

export const permissionDetails = [
	{
		key: 1,
		code: 'code 1 ',
		name: 'name 1',
		description: 'description 1',
		isSkip: true,
	},
	{
		key: 2,
		code: 'code 2',
		name: 'name 2',
		description: 'description 2',
		isSkip: true,
	},
	{
		key: 3,
		code: 'code 3',
		name: 'name 3',
		description: 'description 3',
		isSkip: false,
	},
	{
		key: 4,
		code: 'code 4',
		name: 'name 4',
		description: 'description 4',
		isSkip: true,
	},
]
export const permissionTable = {
	data: permissions,
}

export const permissionGroupTable = {
	data: permissionGroups,
	page: 1,
	perPage: 10
}

export const permissionGroupInfo = {
	permissions: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	],
	id: 1,
	name: 'name permission group',
	order: 1,
}