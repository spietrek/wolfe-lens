import { PropsWithChildren } from 'react'
import { Avatar } from '@mui/material'

type AvatarVariants = 'square' | 'rounded' | 'circular'

interface IProps {
  alt?: string
  icon?: React.ReactNode
  src?: string
  variant?: AvatarVariants
}

const InsAvatar = ({
  alt = '',
  icon = null,
  src = '',
  variant = 'rounded',
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Avatar alt={alt} src={src} variant={variant} className="h-full w-full">
      {icon}
    </Avatar>
  )
}

export default InsAvatar
