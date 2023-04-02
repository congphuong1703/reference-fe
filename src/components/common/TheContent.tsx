import React, { Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../../_mock/routes.d'
import { RouteProps } from '../../types/layout'

const { Content } = Layout
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <Content
      style={{
        padding: '24px 24px 0px 24px',
        margin: 0,
        minHeight: '93vh',
      }}
    >
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route: RouteProps, idx: number) => {
            return (
              route.component && (
                <Route key={idx} path={route.path} element={route.component} />
              )
            )
          })}
        </Routes>
      </Suspense>
    </Content>
  )
}
export default TheContent
