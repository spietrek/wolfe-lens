import { PropsWithChildren } from 'react'
import { IProduct, IProductItem } from '../../types/product.type'
import InsIndicator from '../molecules/InsIndicator'
import InsStack from '../molecules/InsStack'
import InsProductCards from '../organisms/InsProductCards'
import InsProductDetails from '../organisms/InsProductDetails'
import InsProductHero from '../organisms/InsProductHero'

interface IProps {
  loading: boolean
  product: IProduct | null
  similarProducts: IProductItem[]
  hikingProducts: IProductItem[]
  gear: IProductItem[]
}

const InsProduct = ({
  loading = true,
  product = null,
  similarProducts = [],
  gear = [],
  hikingProducts = [],
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsIndicator isLoading={loading}>
      <InsStack spacing={10}>
        <InsProductHero product={product} />
        <InsProductDetails product={product} />
        <InsProductCards title="You May Also Like" items={similarProducts} />
        <InsProductCards title="Complete Your Ride" items={gear} />
        <InsProductCards
          title="Extend Your Journey"
          items={hikingProducts}
          height={275}
        />
      </InsStack>
    </InsIndicator>
  )
}

export default InsProduct
