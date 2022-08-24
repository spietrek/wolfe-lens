import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  src: string
  alt: string
  height?: number | string
  className?: string
  style?: React.CSSProperties
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
  className,
  style,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <img
      src={src}
      srcSet={src}
      height={height}
      alt={alt}
      className={clsx(
        'block w-full transform transition duration-500',
        className,
        className,
      )}
      style={style}
      loading="lazy"
    />
  )
}

export default InsImage
