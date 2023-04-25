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
  ANY = '*'
}
