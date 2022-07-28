import { Grid } from '@mui/material'
import InsImage from '../atoms/InsImage'

const InsHero = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <InsImage src="/assets/images/mb-left-top.png" alt="Mountain Bike" />
      </Grid>
      <Grid item xs={12} md={6}>
        <InsImage src="/assets/images/mb-right-top.png" alt="Mountain Bike" />
        <InsImage
          style={{ marginTop: '16px' }}
          src="/assets/images/mb-right-middle.png"
          alt="Mountain Bike"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InsImage
          style={{ width: '100%' }}
          src="/assets/images/mb-left-bottom.png"
          alt="Mountain Bike"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InsImage
          src="/assets/images/mb-right-bottom.png"
          alt="Mountain Bike"
        />
      </Grid>
    </Grid>
  )
}

export default InsHero
