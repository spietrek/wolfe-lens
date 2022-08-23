import { Grid } from '@mui/material'
import InsImage from '../atoms/InsImage'

const InsNavImages = (): JSX.Element => {
  return (
    <Grid container className="mx-0 mt-[150px]">
      <Grid item xs={12} sm={6}>
        <InsImage
          className="pr-0 sm:pr-[8px]"
          src="/assets/images/gear.png"
          alt="Gear"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InsImage
          className="mt-[80px] pl-0 sm:pl-[8px]"
          src="/assets/images/parts.png"
          alt="Parts"
        />
      </Grid>
    </Grid>
  )
}

export default InsNavImages
