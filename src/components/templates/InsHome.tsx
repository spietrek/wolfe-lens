import { IProduct } from '@/types/product.type'
import InsIndicator from '../molecules/InsIndicator'
import InsHero from '../organisms/InsHero'
import InsProductCards from '../organisms/InsProductCards'
import InsProductDetails from '../organisms/InsProductDetails'

const completeYourRideProducts = [
  {
    href: '/',
    imgSrc: '/assets/images/product1.png',
    title: 'Cliplite MTB Shoes',
    subtitle: '$140.00',
  },
  {
    href: '/',
    imgSrc: '/assets/images/product2.png',
    title: 'Mens Platform Bike Shorts',
    subtitle: '$120.00',
  },
  {
    href: '/',
    imgSrc: '/assets/images/product3.png',
    title: 'POC Tectal Race Helmet',
    subtitle: '$154.00',
  },
  {
    href: '/',
    imgSrc: '/assets/images/product4.png',
    title: 'Ultra Mtn Merino Socks',
    subtitle: '$28.00',
  },
]

const alsoLikeProducts = [
  {
    href: '/',
    imgSrc: '/assets/images/bike1.png',
    title: 'Bike Name',
    subtitle: '26" Dirt Jumper',
  },
  {
    href: '/',
    imgSrc: '/assets/images/bike2.png',
    title: 'Bike Name',
    subtitle: '29" 120MM',
  },
  {
    href: '/',
    imgSrc: '/assets/images/bike3.png',
    title: 'Bike Name',
    subtitle: '27.5" 168MM',
  },
  {
    href: '/',
    imgSrc: '/assets/images/bike4.png',
    title: 'Bike Name',
    subtitle: '29" 168MM',
  },
]

interface IProps {
  product: IProduct
}

const InsHome = ({ product }: IProps): JSX.Element => {
  const loading = false

  return (
    <InsIndicator isLoading={loading}>
      <InsHero product={product} />
      <InsProductDetails product={product} />
      <InsProductCards
        title="Complete Your Ride"
        items={completeYourRideProducts}
      />
      <InsProductCards title="You May Also Like" items={alsoLikeProducts} />
    </InsIndicator>
  )
}

export default InsHome
