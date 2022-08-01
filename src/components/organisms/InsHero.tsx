import { Grid } from '@mui/material'
import InsImage from '../atoms/InsImage'

const styles: { [key: string]: React.CSSProperties } = {
  topLeftImage: { width: '100%', minHeight: '670px' },
}

const InsHero = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        {/* <div
          role="img"
          aria-label="Riding mountain bike down hill"
          className="bg-center-center absolute h-[550px] min-h-[665px] w-[438px] bg-[url('/assets/images/mb-left-top.png')] bg-cover bg-fixed bg-no-repeat"
        /> */}
        <InsImage
          src="/assets/images/mb-left-top.png"
          alt="Mountain Bike"
          zoom
          style={styles.topLeftImage}
        />
      </Grid>
      <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
        <InsImage
          src="/assets/images/mb-right-top.png"
          alt="Mountain Bike"
          zoom
        />
        <InsImage
          style={{ marginTop: '16px' }}
          src="/assets/images/mb-right-middle.png"
          alt="Mountain Bike"
        />
      </Grid>
      <Grid item xs={12} sm={6} order={3}>
        <InsImage
          style={{ width: '100%' }}
          src="/assets/images/mb-left-bottom.png"
          alt="Mountain Bike"
          zoom
        />
      </Grid>
      <Grid item xs={12} sm={6} order={4}>
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
