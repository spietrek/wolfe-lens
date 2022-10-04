import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'
import { ICategory } from '../../types/category.type'
import InsButton from '../atoms/InsButton'
import InsImage from '../atoms/InsImage'
import InsTypography from '../atoms/InsTypography'
import InsTextOverlay from '../molecules/InsTextOverlay'

interface IProps {
  items: ICategory[]
}

const InsCategories = ({ items }: PropsWithChildren<IProps>): JSX.Element => {
  const columns = 12 / items.length

  const getOffset = (index: number): number => {
    return index * 40
  }

  return (
    <Grid container className="mx-0">
      {items.map((item: ICategory, index) => (
        <Grid
          key={item.title}
          item
          xs={12}
          sm={columns}
          style={{ marginTop: `${getOffset(index)}px` }}
        >
          <InsTextOverlay
            renderText={() => (
              <>
                <InsTypography className="text-white" level="h3" uppercase bold>
                  {item.title}
                </InsTypography>
                <InsButton
                  size="medium"
                  variant="outlined"
                  className="mt-3 text-white"
                >
                  {item.label}
                </InsButton>
              </>
            )}
          >
            <div className="pr-0 sm:pr-[12px]">
              <InsImage height={370} src={item.image} alt={item.altText} />
            </div>
          </InsTextOverlay>
        </Grid>
      ))}
    </Grid>
  )
}

export default InsCategories
