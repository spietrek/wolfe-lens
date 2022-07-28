import InsIndicator from '../molecules/InsIndicator'
import InsHero from '../organisms/InsHero'
import InsProductCards from '../organisms/InsProductCards'
import InsProductDetails from '../organisms/InsProductDetails'

const InsHome = (): JSX.Element => {
  const loading = false

  return (
    <InsIndicator isLoading={loading}>
      <InsHero />
      <InsProductDetails />
      <InsProductCards />
      <InsProductCards />
    </InsIndicator>
  )
}

export default InsHome
