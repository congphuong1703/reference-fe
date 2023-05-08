import React from 'react'
import { RouteProps } from '../types/Layout'
import { RouterPath } from "../types/route";

const JobSeeker = React.lazy(() => import('../pages/jobSeeker/JobSeeker'))
const UserManagement = React.lazy(() => import('../pages/user/index'))
const RoleManagement = React.lazy(() => import('../pages/role/index'))
const PermissionForUser = React.lazy(() => import('../pages/permissionForUser/index'))
const PermissionForRole = React.lazy(() => import('../pages/permissionForRole/index'))
const PermissionManagement = React.lazy(() => import('../pages/permission/index'))
const MenuManagement = React.lazy(() => import('../pages/menu/index'))

export const routes: RouteProps[] = [
	{
		path: RouterPath.JOB_SEEKER,
		name: 'JobSeeker',
		component: <JobSeeker />,
		exact: true,
		pKey: "JobSeekerController",
		accessKey: "getPage",
		uncheckPermission: true,
	},
	{
		path: RouterPath.USER,
		name: 'User',
		component: <UserManagement />,
		exact: true,
		pKey: "JobSeekerController",
		accessKey: "getPage",
		uncheckPermission: true,
	},
	{
		path: RouterPath.ROLE,
		name: 'Role',
		component: <RoleManagement />,
		exact: true,
		pKey: "RoleController",
		accessKey: "getPage",
		uncheckPermission: true,
	},
	{
		path: RouterPath.PERMISSION_FOR_USER,
		name: 'PermissionForUser',
		component: <PermissionForUser />,
		exact: true,
		pKey: "PermissionController",
		accessKey: "getPage",
		uncheckPermission: true,
	}
	,
	{
		path: RouterPath.PERMISSION_FOR_ROLE,
		name: 'PermissionForRole',
		component: <PermissionForRole />,
		exact: true,
		pKey: "PermissionController",
		accessKey: "getPage",
		uncheckPermission: true,
	},
	{
		path: RouterPath.PERMISSION,
		name: 'Permission',
		component: <PermissionManagement />,
		exact: true,
		pKey: "PermissionController",
		accessKey: "getPage",
		uncheckPermission: true,
	},
	{
		path: RouterPath.MENU,
		name: 'Menu',
		component: <MenuManagement />,
		exact: true,
		pKey: "MenuController",
		accessKey: "getPage",
		uncheckPermission: true,
	}
]
