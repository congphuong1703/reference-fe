import React, { useEffect } from 'react'
import { RouterPath } from '../types/route'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ConfigProvider, Spin } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { routes } from "../_mock/routes.d";
import { RouteProps } from "../types/layout";

const PublicLayout = React.lazy(
	() => import('../components/layout/public-layout')
)
const PrivateLayout = React.lazy(
	() => import('../components/layout/private-layout')
)

export const AppRouter = () => {
	const { i18n } = useTranslation()
	const { languageType, isLoggedIn } = useSelector((state: RootState) => state.user)

	useEffect(() => {
		i18n.changeLanguage(languageType)
	}, [languageType, i18n])

	return (
		<BrowserRouter>
			<React.Suspense fallback={<Spin />}>
				<ConfigProvider
					theme={{
						components: {
							Tag: {
								colorPrimary: '#15BA92'
							},
							Card: {
								colorBorderSecondary: '#33CC7F21',
								lineWidth: 4
							},
							Input: {
								colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)'
							},
							Button: {
								colorLink: '#1F7A4C'
							}
						},
						token: {
							colorPrimary: '#26A68D',
							colorBorder: '#26A68D',
							colorBgLayout: '#FDFDFD'
						}
					}}
				>
					<Routes>
						<Route
							path={RouterPath.LOGIN}
							element={
								// isLoggedIn ? (
								// 	<Navigate to={RouterPath.HOME_PAGE} />
								// ) : (
									<PrivateLayout />
								// )
							}
						>

						</Route>
						<Route
							path={RouterPath.HOME_PAGE}
							element={
								// isLoggedIn ? (
									<PublicLayout />
								// ) : (
								// 	<Navigate to={RouterPath.LOGIN} />
								// )
							}
						>
							{routes.map((route: RouteProps, idx: number) => {
								return (
									route.component && (
										<Route key={idx} path={route.path} element={route.component} />
									)
								)
							})}
						</Route>
					</Routes>
				</ConfigProvider>
			</React.Suspense>
		</BrowserRouter>
	)
}
