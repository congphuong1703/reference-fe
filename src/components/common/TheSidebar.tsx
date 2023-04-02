import { SideBarProps } from '../../types/layout'
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { notification } from './Notification'

const { Sider } = Layout
const TheSidebar = (props: SideBarProps) => {
  const [collapse, setCollapse] = useState(false)

  const [selectedKey, setSelectedKey] = useState('0')
  const onCollapse = () => {
    setCollapse(!collapse)
  }
  const location = useLocation()
  const locationPath = '/'.concat(location.pathname.split('/')[1])
  const MenuItem = () => {
    const navigation = props.nav
    const navbar = navigation.map((nav) => (
      // role !== "admin" && (nav.name === "users" || nav.name === "Employee") ? "" :
      <Menu.Item key={nav.tag} icon={nav.icon} style={{ marginTop: '0px' }}>
        <Link to={nav.to}>{nav.name}</Link>
      </Menu.Item>
    ))

    useEffect(() => {
      try {
        let key = navigation.find((_item) =>
          _item.to.startsWith(locationPath)
        )?.tag
        setSelectedKey(key ? key : '0')
      } catch (e) {
        notification()
      }
    }, [location])

    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['0']}
        selectedKeys={[selectedKey]}
      >
        {navbar}
      </Menu>
    )
  }
  return (
    <Sider
      width={200}
      className="site-layout-background"
      collapsible
      collapsed={collapse}
      onCollapse={() => onCollapse()}
    >
      <div className="logo" />
      <MenuItem />
    </Sider>
  )
}

export default TheSidebar
