import { PropsWithChildren } from 'react'
import { ICategory } from '../../types/category.type'
import { ICommunity } from '../../types/community.type'
import { IHeroWithButton } from '../../types/hero.type'
import { IProductItem } from '../../types/product.type'
import InsIndicator from '../molecules/InsIndicator'
import InsStack from '../molecules/InsStack'
import InsCategories from '../organisms/InsCategories'
import InsCommunity from '../organisms/InsCommunity'
import InsHero from '../organisms/InsHero'
import InsProductCards from '../organisms/InsProductCards'

interface IProps {
  loading: boolean
  categories: ICategory[]
  communityImages: ICommunity[]
  featuredProducts: IProductItem[]
  hikingProducts: IProductItem[]
  hero: IHeroWithButton | null
}

const InsHome = ({
  loading,
  categories = [],
  communityImages = [],
  featuredProducts = [],
  hikingProducts = [],
  hero = null,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsIndicator isLoading={loading}>
      <InsStack spacing={10}>
        <InsHero hero={hero} />
        <InsProductCards title="Featured Bikes" items={featuredProducts} />
        <InsCategories items={categories} />
        <InsProductCards
          title="Extend Your Journey"
          items={hikingProducts}
          height={275}
        />
        <InsCommunity images={communityImages} />
      </InsStack>
    </InsIndicator>
  )
}

export default InsHome
