import React from 'react'
import { Layout } from 'antd'
import TheHeader from './TheHeader'
import TheSidebar from './TheSidebar'
import TheContent from './TheContent'
import _nav from '../../_mock/nav.d'

const TheLayout = () => {
  // useEffect(() => {
  //   if (localStorage.getItem("token") === null || localStorage.getItem("role") === null
  //     || localStorage.getItem("role").includes("Quản trị nhân sự") === undefined) {
  //     history.push("/login");
  //   } else {
  //     role.current = localStorage.getItem("role").includes("Quản trị nhân sự")
  //   }
  //   if (role.current) {
  //     setNav(navigation)
  //   } else {
  //     setNav(navigationForLead)
  //   }
  //
  // }, [])

  return (
    <Layout>
      <TheHeader />
      <Layout>
        <TheSidebar nav={_nav} />
        <Layout>
          <TheContent />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default TheLayout
