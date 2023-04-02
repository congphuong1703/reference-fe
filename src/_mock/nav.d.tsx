import React from 'react'
import {
  UserAddOutlined,
  TeamOutlined,
  FileDoneOutlined,
  SnippetsOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { NavProps } from '../types/layout'

const nav: NavProps[] = [
  {
    tag: '1',
    name: 'Người Tìm việc',
    to: '/job-seekers',
    icon: <UserAddOutlined />
  },
  {
    tag: '2',
    name: 'Người tiến cử',
    to: '/referrers',
    icon: <TeamOutlined />
  },
  {
    tag: '3',
    name: 'Yêu cầu',
    to: '/requests',
    icon: <FileDoneOutlined />
  },
  {
    tag: '4',
    name: 'Khảo sát',
    to: '/surveys',
    icon: <SnippetsOutlined />
  },
  {
    tag: '7',
    name: 'Người dùng',
    to: '/users',
    icon: <UserOutlined />
  },
  {
    tag: '8',
    name: 'Cài đặt',
    to: '/settings',
    icon: <SettingOutlined />
  }
]
export default nav
