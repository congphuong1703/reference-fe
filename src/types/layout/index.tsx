export type SideBarProps = {
  nav: NavProps[]
}

export type NavProps = {
  tag: string
  name: string
  to: string
  icon: JSX.Element
}

export type RouteProps = {
  path: string
  exact: boolean
  name: string
  permission: string[]
  component: any
}
