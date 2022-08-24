import { PropsWithChildren } from 'react'
import { Card, CardContent } from '@mui/material'
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
    <div className="mt-[80px] max-w-full">
      <InsHeading className="mb-6 text-center text-3xl font-bold uppercase">
        {title}
      </InsHeading>

      <div className="overflow-x-auto">
        <div className="flex w-[992px]">
          {items.map((item, index) => (
            <Card className="flex-initial" key={index}>
              <CardContent>
                <Link to={item.href}>
                  <InsImage
                    className="min-w-[262px]"
                    src={item.imgSrc}
                    alt="product1"
                  />
                  <>
                    <InsHeading className="mt-1 text-base font-bold uppercase">
                      {item.title}
                    </InsHeading>
                    <InsHeading className="text-sm">{item.subtitle}</InsHeading>
                  </>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InsProductCards
