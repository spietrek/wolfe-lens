import { PropsWithChildren } from 'react'
import InsAvatar from '../atoms/InsAvatar'
import InsBodyText from '../atoms/InsBodyText'

interface IProps {
  title: string
  avatar: string
  subtitle?: string
}

const InsAvatarWithText = ({
  title,
  avatar,
  subtitle,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="flex">
      <InsAvatar src={avatar} />
      <div className="ml-2">
        <InsBodyText className="text-base font-bold">{title}</InsBodyText>
        <InsBodyText className="text-sm">{subtitle}</InsBodyText>
      </div>
    </div>
  )
}

export default InsAvatarWithText
