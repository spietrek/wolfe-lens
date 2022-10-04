import { IImage } from './image.type'
import { ILinkWithLabel } from './link.type'

export interface IHero extends IImage {
  title: string
  subtitle?: string
}

export interface IHeroWithButton extends IHero, ILinkWithLabel {
  active: boolean
}
