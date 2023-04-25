import React from 'react'
import { Layout } from 'antd'
import TheHeader from './TheHeader'
import TheSidebar from './TheSidebar'
import TheContent from './TheContent'
import _nav from '../../_mock/nav.d'

const TheLayout = () => {

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
