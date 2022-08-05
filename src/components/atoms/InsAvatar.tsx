import { PropsWithChildren } from 'react'
import { Avatar } from '@mui/material'

type AvatarVariants = 'square' | 'rounded' | 'circular'

interface IProps {
  alt?: string
  icon?: React.ReactNode
  src?: string
  variant?: AvatarVariants
  style?: React.CSSProperties
  className?: string
}

const InsAvatar = ({
  alt = '',
  icon = null,
  src = '',
  variant = 'rounded',
  style,
  className,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Avatar
      alt={alt}
      src={src}
      variant={variant}
      style={style}
      className={className}
    >
      {icon}
    </Avatar>
  )
}

export default InsAvatar
