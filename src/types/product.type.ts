export interface IProductItem {
  href: string
  imgSrc: string
  title: string
  subtitle: string
}

interface IColor {
  id: string
  value: string
  hex: string
}

interface ISize {
  id: string
  value: string
}

export interface IProduct {
  id: number
  name: string
  subtitle: string
  financials: {
    price: number
    recurrence: number
  }
  productTitle: string
  productDescription: string
  productImage: string
  heroImage1: string
  heroImage2: string
  heroImage3: string
  colors: IColor[]
  sizes: ISize[]
  similiarProducts: number[]
}
