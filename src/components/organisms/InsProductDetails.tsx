import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../types/product.type'
import InsTypography from '../atoms/InsTypography'
import InsAccordion from '../molecules/InsAccordion'

interface IProps {
  product: IProduct | null
}

const InsProductDetails = ({
  product = null,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Grid container className="mx-0 py-0 px-[12px]">
      <Grid item xs={12} md={6}>
        <div className="mb-6 mr-0 lg:mr-8 lg:mb-0">
          <InsTypography level="h1" bold uppercase>
            {product?.productTitle ?? ''}
          </InsTypography>
          <div className="mb-8" />
          <InsTypography level="body1">
            {product?.productDescription ?? ''}
          </InsTypography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ml-0 lg:ml-8">
          <InsTypography level="h6" bold uppercase>
            <span className="text-sm">Product Info</span>
          </InsTypography>

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
