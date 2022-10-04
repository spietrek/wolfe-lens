import { PropsWithChildren } from 'react'
import { ICommunity } from '../../types/community.type'
import InsTypography from '../atoms/InsTypography'
import InsImageList from '../molecules/InsImageList'

interface IProps {
  images: ICommunity[]
}

const InsCommunity = ({ images }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="max-w-full">
      <InsTypography align="center" level="h3" uppercase bold>
        Our Community
      </InsTypography>
      <InsImageList images={images} />
    </div>
  )
}

export default InsCommunity
