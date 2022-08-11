import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../types/product.type'
import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'
import InsAccordion from '../molecules/InsAccordion'

interface IProps {
  product: IProduct | null
}

const InsProductDetails = ({
  product = null,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Grid container className="my-[80px] mx-0 py-0 px-[12px]">
      <Grid item xs={12} md={6}>
        <div className="mb-6 mr-0 lg:mr-8 lg:mb-0">
          <InsHeading className="text-6xl font-bold uppercase">
            {product !== null ? product.productTitle : ''}
          </InsHeading>

          <InsBodyText className="mt-6 text-base">
            {product !== null ? product.productDescription : ''}
          </InsBodyText>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ml-0 lg:ml-8">
          <InsHeading className="text-sm font-bold uppercase">
            Product Info
          </InsHeading>

          <div className="mt-6">
            {product?.productDetails.map(item => (
              <InsAccordion key={item.title} title={item.title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </InsAccordion>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default InsProductDetails
