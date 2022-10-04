import { PropsWithChildren } from 'react'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { ICommunity } from '../../types/community.type'

interface IProps {
  images: ICommunity[]
}

const InsImageList = ({ images }: PropsWithChildren<IProps>): JSX.Element => {
  const matches = useMediaQuery('(min-width:960px)')
  const cols = matches ? 3 : 2

  return (
    <ImageList variant="masonry" cols={cols} gap={16}>
      {images.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.image}
            srcSet={item.image}
            alt={item.altText}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default InsImageList
