import InsButton from '../atoms/InsButton'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'
import InsTextOverlay from '../molecules/InsTextOverlay'

const InsHero = (): JSX.Element => {
  return (
    <InsTextOverlay
      offset="large"
      renderText={() => (
        <>
          <InsHeading className="text-3xl font-bold uppercase">
            Summer Sale
          </InsHeading>
          <InsHeading className="text-xl">10% Off All Gear</InsHeading>
          <InsButton
            size="large"
            variant="contained"
            color="primary"
            className="mt-6"
          >
            Start Shopping
          </InsButton>
        </>
      )}
    >
      <InsImage src="/assets/images/hero.webp" alt="Mountain Bike" />
    </InsTextOverlay>
  )
}

export default InsHero
