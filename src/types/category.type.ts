import { IImage } from './image.type'
import { ILinkWithLabel } from './link.type'
import { ISortOrder } from './sortOrder.type'

export interface ICategory extends ISortOrder, IImage, ILinkWithLabel {
  title: string
}
