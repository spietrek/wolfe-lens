import { PropsWithChildren } from 'react'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { ICommunityItem } from '../../types/community.type'

interface IProps {
  images: ICommunityItem[]
}

const InsImageList = ({ images }: PropsWithChildren<IProps>): JSX.Element => {
  const matches = useMediaQuery('(min-width:960px)')
  const cols = matches ? 3 : 2

  return (
    <ImageList variant="masonry" cols={cols} gap={16}>
      {images.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.src}
            srcSet={item.src}
            alt={item.altText}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default InsImageList
