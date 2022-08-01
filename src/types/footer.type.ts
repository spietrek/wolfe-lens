interface IFooterLinkItem {
  label: string
  href: string
}

export interface IFooterItem {
  label: string
  items?: string[]
  links?: IFooterLinkItem[]
}
