import React from 'react'
import {
	UserAddOutlined,
	TeamOutlined,
	FileDoneOutlined,
	SnippetsOutlined,
	SettingOutlined,
	UserOutlined, ProfileOutlined, ScheduleOutlined
} from '@ant-design/icons'
import { NavProps } from '../types/Layout'
import { RouterPath } from "../types/route";

const nav: NavProps[] = [
	{
		tag: '9',
		name: 'Menu',
		to: RouterPath.MENU,
		icon: <SnippetsOutlined />
	},
	{
		tag: '1',
		name: 'Người Tìm việc',
		to: RouterPath.JOB_SEEKER,
		icon: <UserAddOutlined />
	},
	{
		tag: '2',
		name: 'Người tiến cử',
		to: RouterPath.JOB_SEEKER,
		icon: <TeamOutlined />
	},
	{
		tag: '3',
		name: 'Yêu cầu',
		to: RouterPath.JOB_SEEKER,
		icon: <FileDoneOutlined />
	},
	{
		tag: '4',
		name: 'Khảo sát',
		to: RouterPath.JOB_SEEKER,
		icon: <SnippetsOutlined />
	},
	{
		tag: '7',
		name: 'Quản lý người dùng',
		to: RouterPath.NOTHING,
		icon: <UserOutlined />,
		children: [
			{
				tag: '7.1',
				name: 'Người dùng',
				to: RouterPath.USER,
				icon: <ProfileOutlined />,
			},
			{
				tag: '7.2',
				name: 'Role',
				to: RouterPath.ROLE,
				icon: <ProfileOutlined />,
			},
			{
				tag: '7.3',
				name: 'Phân quyền người dùng',
				to: RouterPath.PERMISSION_FOR_USER,
				icon: <ProfileOutlined />,
			},
			{
				tag: '7.4',
				name: 'Phân quyền vị trí',
				to: RouterPath.PERMISSION_FOR_ROLE,
				icon: <ProfileOutlined />,
			},
			{
				tag: '7.5',
				name: 'Quản lý quyền',
				to: RouterPath.PERMISSION,
				icon: <ProfileOutlined />,
			},
		]
	},
	{
		tag: '8',
		name: 'Cài đặt',
		to: RouterPath.JOB_SEEKER,
		icon: <SettingOutlined />,
		children: [
			{
				tag: '8.1',
				name: 'components.menuWrapper.managerConstruction',
				to: RouterPath.JOB_SEEKER,
				icon: <ProfileOutlined />,
			},
			{
				tag: '8.2',
				name: 'components.menuWrapper.registerConstruction',
				to: RouterPath.JOB_SEEKER,
				icon: <ScheduleOutlined />,
			},
		],
	}
]
export default nav
