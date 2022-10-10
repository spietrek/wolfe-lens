import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { IProductItem } from '../../types/product.type'
import InsImage from '../atoms/InsImage'
import InsTypography from '../atoms/InsTypography'

interface IProps {
  title: string
  items: IProductItem[]
  height?: number
}

const InsProductCards = ({
  title,
  items = [],
  height = 215,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="max-w-full">
      <InsTypography align="center" level="h3" bold uppercase>
        {title}
      </InsTypography>

      <div className="mb-6" />

      <div className="overflow-x-auto">
        <div className="flex">
          {items.map((item, index) => (
            <div className="mr-4" key={index}>
              <div className="w-[280px]">
                <Link to={item.link} className="w-full">
                  <div className="mb-2">
                    <InsImage
                      src={item.image}
                      height={height}
                      alt={item.altText}
                    />
                  </div>
                  <>
                    <InsTypography level="body1" bold uppercase>
                      {item.title}
                    </InsTypography>
                    <InsTypography level="body2">{item.subtitle}</InsTypography>
                  </>
                </Link>
                <div className="mb-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InsProductCards
