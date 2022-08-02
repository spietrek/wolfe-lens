import { Grid } from '@mui/material'
import InsImage from '../atoms/InsImage'
import InsOrderInfo from './InsOrderInfo'

const styles: { [key: string]: React.CSSProperties } = {
  topLeftImage: { width: '100%', height: '100%' },
}

const InsHero = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <InsImage
          src="/assets/images/mb-left-top.png"
          alt="Mountain Bike"
          zoom
          style={styles.topLeftImage}
        />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <InsImage
          src="/assets/images/mb-right-top.png"
          alt="Mountain Bike"
          zoom
        />
        <InsOrderInfo />
      </Grid>
      <Grid item xs={12} md={6} order={3}>
        <InsImage
          style={{ width: '100%' }}
          src="/assets/images/mb-left-bottom.png"
          alt="Mountain Bike"
          zoom
        />
      </Grid>
      <Grid item xs={12} md={6} order={4}>
        <InsImage
          src="/assets/images/mb-right-bottom.png"
          alt="Mountain Bike"
          zoom
        />
      </Grid>
    </Grid>
  )
}

export default InsHero
