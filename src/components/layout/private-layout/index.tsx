import React from 'react'
import { Layout } from 'antd'
import TheHeader from '../../common/TheHeader'
import TheSidebar from '../../common/TheSidebar'
import _nav from '../../../_mock/nav.d'
import TheContent from '../../common/TheContent'

const PrivateLayout = () => {
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
export default PrivateLayout
