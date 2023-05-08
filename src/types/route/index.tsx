import { ReactNode } from 'react'

export interface RouteProps {
  element: ReactNode
  path: string
}

export enum RouterPath {
  HOME_PAGE = '/',
  LOGIN = '/login',
  JOB_SEEKER= '/job-seeker',
  USER= '/user',
  ROLE= '/role',
  MENU= '/menu',
  NOTHING= '#',
  PERMISSION= '/permission',
  PERMISSION_FOR_ROLE= '/grant-permission-role',
  PERMISSION_FOR_USER= '/grant-permission-user',
  ANY = '*'
}
