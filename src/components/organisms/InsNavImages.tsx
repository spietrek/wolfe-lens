import { Grid } from '@mui/material'
import InsButton from '../atoms/InsButton'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'
import InsTextOverlay from '../molecules/InsTextOverlay'

const InsNavImages = (): JSX.Element => {
  return (
    <Grid container className="mx-0 mt-[150px]">
      <Grid item xs={12} sm={6}>
        <InsTextOverlay
          renderText={() => (
            <>
              <InsHeading className="text-3xl font-bold uppercase">
                Gear
              </InsHeading>
              <InsButton size="medium" variant="outlined" className="mt-6">
                Shop Now
              </InsButton>
            </>
          )}
        >
          <InsImage
            className="pr-0 sm:pr-[8px]"
            src="/assets/images/gear.png"
            alt="Gear"
          />
        </InsTextOverlay>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InsTextOverlay
          renderText={() => (
            <>
              <InsHeading className="text-2xl font-bold uppercase">
                Parts
              </InsHeading>
              <InsButton size="medium" variant="outlined" className="mt-6">
                Shop Now
              </InsButton>
            </>
          )}
        >
          <InsImage
            className="mt-[80px] pl-0 sm:pl-[8px]"
            src="/assets/images/parts.png"
            alt="Parts"
          />
        </InsTextOverlay>
      </Grid>
    </Grid>
  )
}

export default InsNavImages
