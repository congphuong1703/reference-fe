import React from 'react'
import { RouteProps } from '../types/layout'
import { RouterPath } from "../types/route";

const JobSeeker = React.lazy(() => import('../pages/job-seeker/job-seeker'))
const User = React.lazy(() => import('../pages/user/index'))

export const routes: RouteProps[] = [
	{
		path: RouterPath.JOB_SEEKER,
		name: 'JobSeeker',
		component: <JobSeeker />,
		exact: true,
		// uncheckPermission: true,
		pKey: "JobSeekerController",
		accessKey: "create",
		uncheckPermission: true,
	},
	{
		path: RouterPath.USER,
		name: 'JobSeeker',
		component: <User />,
		exact: true,
		// uncheckPermission: true,
		pKey: "JobSeekerController",
		accessKey: "create",
		uncheckPermission: true,
	}
]
