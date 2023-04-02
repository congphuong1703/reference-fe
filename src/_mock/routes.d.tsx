import React from 'react'
import { RouteProps } from '../types/layout'

const JobSeeker = React.lazy(() => import('../pages/job-seeker/job-seeker'))

export const routes: RouteProps[] = [
  {
    path: '/jobseekers',
    name: 'JobSeeker',
    component: JobSeeker,
    exact: true,
    permission: ['Trưởng bộ phận']
  }
]

export const privateRoutes: RouteProps[] = [
  {
    path: '/jobseekers',
    name: 'JobSeeker',
    component: JobSeeker,
    exact: true,
    permission: ['Trưởng bộ phận']
  }
]
