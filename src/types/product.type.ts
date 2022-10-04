import { IImage } from './image.type'
import { ILink } from './link.type'
import { ISortOrder } from './sortOrder.type'

export interface IOption {
  id: string
  value: string
  hex?: string
}

export interface IProductDetail {
  title: string
  text?: string
}

export interface IProduct {
  id: number
  active: boolean
  featured: boolean
  category: string
  name: string
  subtitle: string
  price: number
  formattedPrice: string
  recurrence: number
  autoRenewPrice?: number
  formattedAutoRenewPrice?: string
  featuredImage: string
  productTitle: string
  productDescription: string
  productImage: string
  productDetails: IProductDetail[]
  heroImage1: string
  heroImage2: string
  heroImage3: string
  colors: IOption[]
  sizes: IOption[]
}

export interface IProductItem extends ISortOrder, IImage, ILink {
  active: boolean
  featured: boolean
  title: string
  subtitle?: string
}
