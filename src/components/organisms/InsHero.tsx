import { PropsWithChildren } from 'react'
import { IHeroWithButton } from '../../types/hero.type'
import InsButton from '../atoms/InsButton'
import InsImage from '../atoms/InsImage'
import InsTypography from '../atoms/InsTypography'
import InsTextOverlay from '../molecules/InsTextOverlay'

interface IProps {
  hero: IHeroWithButton | null
}

const InsHero = ({ hero }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsTextOverlay
      offset="large"
      renderText={() => (
        <>
          <InsTypography className="text-white" level="h1" bold uppercase>
            {hero?.title}
          </InsTypography>
          <InsTypography className="text-white" level="h3">
            {hero?.subtitle}
          </InsTypography>
          <InsButton
            size="large"
            variant="contained"
            color="primary"
            className="mt-6"
          >
            {hero?.label}
          </InsButton>
        </>
      )}
    >
      <InsImage src={hero?.image ?? ''} alt={hero?.altText ?? ''} />
    </InsTextOverlay>
  )
}

export default InsHero
