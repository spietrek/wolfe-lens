import { PropsWithChildren } from 'react'
import { ICommunityItem } from '../../types/community.type'
import InsHeading from '../atoms/InsHeading'
import InsImageList from '../molecules/InsImageList'

interface IProps {
  images: ICommunityItem[]
}

const InsCommunity = ({ images }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="mt-[80px] max-w-full">
      <InsHeading className="mb-6 text-center text-3xl font-bold uppercase">
        Our Community
      </InsHeading>
      <InsImageList images={images} />
    </div>
  )
}

export default InsCommunity
