import React, { Suspense } from 'react'
import { Layout, Spin } from 'antd'
import { Route, Routes ,Outlet} from 'react-router-dom'
import { routes } from '../../_mock/routes.d'
import { RouteProps } from '../../types/Layout'
import TheFooter from "./TheFooter";

const { Content } = Layout


const TheContent = () => {
  return (
    <Content
      style={{
        padding: '24px 24px 10px 24px',
        margin: 0,
        minHeight: '93vh'
      }}
    >
      <Suspense fallback={<Spin/>}>
        {/*<Routes>*/}
          <Outlet/>
        {/*</Routes>*/}
      </Suspense>
      <TheFooter />
    </Content>
  )
}
export default TheContent
