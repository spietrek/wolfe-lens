import { PropsWithChildren } from 'react'
import { IProduct } from '../../types/product.type'
import InsTypography from '../atoms/InsTypography'
import InsRecurringOrder from './InsRecurringOrder'
import InsSingleOrder from './InsSingleOrder'

interface IProps {
  product: IProduct
}

const InsOrderInfo = ({ product }: PropsWithChildren<IProps>): JSX.Element => {
  const isSingleOrder = (): boolean => {
    return product.recurrence === 0
  }

  return (
    <div className="mt-6">
      <div className="flex">
        <div className="flex-1">
          <InsTypography level="h4" bold uppercase>
            {product.name}
          </InsTypography>
        </div>
        <div className="text-right">
          <InsTypography level="h4" bold uppercase>
            {product.formattedPrice}
          </InsTypography>
        </div>
      </div>

      <InsTypography level="h6">
        <span className="text-gray-400">{product.subtitle}</span>
      </InsTypography>

      {isSingleOrder() ? (
        <InsSingleOrder product={product} />
      ) : (
        <>
          <div className="mb-4" />
          <InsRecurringOrder product={product} />
        </>
      )}
    </div>
  )
}

export default InsOrderInfo
