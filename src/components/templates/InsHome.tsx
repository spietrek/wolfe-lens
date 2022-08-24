import { ICategoryItem } from '../../types/category.type'
import { ICommunityItem } from '../../types/community.type'
import InsIndicator from '../molecules/InsIndicator'
import InsCategories from '../organisms/InsCategories'
import InsCommunity from '../organisms/InsCommunity'
import InsHero from '../organisms/InsHero'
import InsProductCards from '../organisms/InsProductCards'

const featuredroducts = [
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

const communityImages: ICommunityItem[] = [
  {
    altText: 'Community 1',
    src: '/assets/images/community1.png',
  },
  {
    altText: 'Community 4',
    src: '/assets/images/community4.png',
  },
  {
    altText: 'Community 7',
    src: '/assets/images/community7.png',
  },

  {
    altText: 'Community 2',
    src: '/assets/images/community2.png',
  },
  {
    altText: 'Community 5',
    src: '/assets/images/community5.png',
  },
  {
    altText: 'Community 8',
    src: '/assets/images/community8.png',
  },
  {
    altText: 'Community 3',
    src: '/assets/images/community3.png',
  },
  {
    altText: 'Community 6',
    src: '/assets/images/community6.png',
  },

  {
    altText: 'Community 9',
    src: '/assets/images/community9.png',
  },
]

const categories: ICategoryItem[] = [
  {
    altText: 'Bikes',
    imageUrl: '/assets/images/bikes.png',
    title: 'Bikes',
    buttonText: 'Shop Now',
  },
  {
    altText: 'Gear',
    imageUrl: '/assets/images/gear.png',
    title: 'Gear',
    buttonText: 'Shop Now',
  },
  {
    altText: 'Parts',
    imageUrl: '/assets/images/parts.png',
    title: 'Parts',
    buttonText: 'Shop Now',
  },
]

const InsHome = (): JSX.Element => {
  const loading = false

  return (
    <InsIndicator isLoading={loading}>
      <InsHero />
      <InsProductCards title="Featured Bikes" items={featuredroducts} />
      <InsCategories items={categories} />
      <InsCommunity images={communityImages} />
    </InsIndicator>
  )
}

export default InsHome
