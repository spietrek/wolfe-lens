import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'
import { ICategoryItem } from '../../types/category.type'
import InsButton from '../atoms/InsButton'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'
import InsTextOverlay from '../molecules/InsTextOverlay'

interface IProps {
  items: ICategoryItem[]
}

const InsCategories = ({ items }: PropsWithChildren<IProps>): JSX.Element => {
  const columns = 12 / items.length

  const getOffset = (index: number): number => {
    return index * 40
  }

  return (
    <Grid container className="mx-0 mt-[80px]">
      {items.map((item: ICategoryItem, index) => (
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
                <InsHeading className="text-3xl font-bold uppercase">
                  {item.title}
                </InsHeading>
                <InsButton size="medium" variant="outlined" className="mt-6">
                  {item.buttonText}
                </InsButton>
              </>
            )}
          >
            <InsImage
              className="pr-0 sm:pr-[12px]"
              height={370}
              src={item.imageUrl}
              alt={item.altText}
            />
          </InsTextOverlay>
        </Grid>
      ))}
    </Grid>
  )
}

export default InsCategories
