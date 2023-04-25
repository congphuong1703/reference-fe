import React from 'react'
import {
	UserAddOutlined,
	TeamOutlined,
	FileDoneOutlined,
	SnippetsOutlined,
	SettingOutlined,
	UserOutlined, ProfileOutlined, ScheduleOutlined
} from '@ant-design/icons'
import { NavProps } from '../types/layout'
import { RouterPath } from "../types/route";

const nav: NavProps[] = [
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
		name: 'Người dùng',
		to: RouterPath.JOB_SEEKER,
		icon: <UserOutlined />
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
	},

]
export default nav
