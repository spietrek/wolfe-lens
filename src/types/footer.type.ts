import { ILinkWithLabel } from './link.type'
import { ISortOrder } from './sortOrder.type'

interface IFooterNavLink extends ILinkWithLabel, ISortOrder {}

export interface IFooterNav extends ISortOrder {
  title: string
  links: IFooterNavLink[]
}
