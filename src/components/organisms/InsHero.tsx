import { Grid } from '@mui/material'
import InsImage from '../atoms/InsImage'
import InsOrderInfo from './InsOrderInfo'

const InsHero = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <InsImage src="/assets/images/mb-left-top.png" alt="Mountain Bike" />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <InsImage src="/assets/images/mb-right-top.png" alt="Mountain Bike" />
        <InsOrderInfo />
      </Grid>
      <Grid item xs={12} md={6} order={3}>
        <InsImage src="/assets/images/mb-left-bottom.png" alt="Mountain Bike" />
      </Grid>
      <Grid item xs={12} md={6} order={4}>
        <InsImage
          src="/assets/images/mb-right-bottom.png"
          alt="Mountain Bike"
        />
      </Grid>
    </Grid>
  )
}

export default InsHero
