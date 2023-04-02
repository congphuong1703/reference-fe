import React from 'react';
import { useSelector } from 'react-redux';
import { redirect, Route } from 'react-router-dom'
import { UserStateType } from '../../features/User/types';
import { PrivateRouteProps } from "../../types/route";


export default function PrivateRoute({
	                                     children,
	                                     ...rest
                                     }: PrivateRouteProps) {
	const userState = useSelector((state: any) => state.user) as UserStateType;
	const { isLoggedIn } = userState;

	return (
		isLoggedIn ?
		<Route
			{...rest}
			element={
				isLoggedIn ? (
					children
				) : (
					<Route path="about" render={() => <Redirect to="about-us" />} />
				)
			}
		/>
			: <Route path="/"
	);
}
