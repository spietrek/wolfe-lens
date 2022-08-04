import { PropsWithChildren } from 'react'
import { CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { IProductItem } from '../../types/product.type'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'

interface IProps {
  title: string
  items: IProductItem[]
}

const InsProductCards = ({
  title,
  items = [],
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <section className="mt-[120px] max-w-full">
      <InsHeading className="mb-6 text-center text-3xl font-bold uppercase">
        {title}
      </InsHeading>

      <div className="flex overflow-x-auto">
        {items.map((item, index) => (
          <CardContent key={index} style={{ flex: '0 1 auto' }}>
            <Link to={item.href}>
              <InsImage
                style={{ minWidth: '262px' }}
                src={item.imgSrc}
                alt="product1"
              />
              <div>
                <InsHeading className="mt-1 uppercase">{item.title}</InsHeading>
                <InsHeading>{item.subtitle}</InsHeading>
              </div>
            </Link>
          </CardContent>
        ))}
      </div>
    </section>
  )
}

export default InsProductCards
