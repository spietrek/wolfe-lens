import { Grid } from '@mui/material'
import { IProduct } from '@/types/product.type'
import InsImage from '../atoms/InsImage'
import InsOrderInfo from './InsOrderInfo'

interface IProps {
  product: IProduct
}

const InsHero = ({ product }: IProps): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <InsImage src={product.heroImage1} alt="Mountain Bike" />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <InsImage src={product.productImage} alt="Mountain Bike" />
        <InsOrderInfo product={product} />
      </Grid>
      <Grid item xs={12} md={6} order={3}>
        <InsImage src={product.heroImage2} alt="Mountain Bike" />
      </Grid>
      <Grid item xs={12} md={6} order={4}>
        <InsImage src={product.heroImage3} alt="Mountain Bike" />
      </Grid>
    </Grid>
  )
}

export default InsHero
