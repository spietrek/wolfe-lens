import { PropsWithChildren } from 'react'
import { IProduct } from '@/types/product.type'
import InsIndicator from '../molecules/InsIndicator'
import InsProductCards from '../organisms/InsProductCards'
import InsProductDetails from '../organisms/InsProductDetails'
import InsProductHero from '../organisms/InsProductHero'

const completeYourRideProducts = [
  {
    href: '/gear/10001',
    imgSrc: '/assets/images/product1.png',
    title: 'Cliplite MTB Shoes',
    subtitle: '$140.00',
  },
  {
    href: '/gear/10001',
    imgSrc: '/assets/images/product2.png',
    title: 'Mens Platform Bike Shorts',
    subtitle: '$120.00',
  },
  {
    href: '/gear/10001',
    imgSrc: '/assets/images/product3.png',
    title: 'POC Tectal Race Helmet',
    subtitle: '$154.00',
  },
  {
    href: '/gear/10001',
    imgSrc: '/assets/images/product4.png',
    title: 'Ultra Mtn Merino Socks',
    subtitle: '$28.00',
  },
]

const alsoLikeProducts = [
  {
    href: '/bike/1002',
    imgSrc: '/assets/images/bike1.png',
    title: 'Bike Name',
    subtitle: '26" Dirt Jumper',
  },
  {
    href: '/bike/1003',
    imgSrc: '/assets/images/bike2.png',
    title: 'Bike Name',
    subtitle: '29" 120MM',
  },
  {
    href: '/bike/1004',
    imgSrc: '/assets/images/bike3.png',
    title: 'Bike Name',
    subtitle: '27.5" 168MM',
  },
  {
    href: '/bike/1005',
    imgSrc: '/assets/images/bike4.png',
    title: 'Bike Name',
    subtitle: '29" 168MM',
  },
]

interface IProps {
  loading: boolean
  product: IProduct | null
}

const InsProduct = ({
  loading = true,
  product = null,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsIndicator isLoading={loading}>
      <InsProductHero product={product} />
      <InsProductDetails product={product} />
      <InsProductCards
        title="Complete Your Ride"
        items={completeYourRideProducts}
      />
      <InsProductCards title="You May Also Like" items={alsoLikeProducts} />
    </InsIndicator>
  )
}

export default InsProduct
