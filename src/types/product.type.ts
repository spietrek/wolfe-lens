export interface IProductItem {
  href: string
  imgSrc: string
  title: string
  subtitle: string
}

export interface IOption {
  id: string
  value: string
  hex?: string
}

export interface IProductDetailItem {
  title: string
}

export interface IProduct {
  id: number
  name: string
  subtitle: string
  price: number
  recurrence: number
  autoRenewPrice?: number
  productTitle: string
  productDescription: string
  productImage: string
  productDetails: IProductDetailItem[]
  heroImage1: string
  heroImage2: string
  heroImage3: string
  colors: IOption[]
  sizes: IOption[]
}
