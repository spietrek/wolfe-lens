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
    <div className="mt-[150px] max-w-full">
      <InsHeading className="mb-6 text-center text-3xl font-bold uppercase">
        {title}
      </InsHeading>

      <div className="flex overflow-x-auto">
        {items.map((item, index) => (
          <CardContent key={index} className="flex-initial">
            <Link to={item.href}>
              <InsImage
                className="min-w-[262px]"
                src={item.imgSrc}
                alt="product1"
              />
              <div>
                <InsHeading className="mt-1 text-base font-bold uppercase">
                  {item.title}
                </InsHeading>
                <InsHeading className="text-sm">{item.subtitle}</InsHeading>
              </div>
            </Link>
          </CardContent>
        ))}
      </div>
    </div>
  )
}

export default InsProductCards
