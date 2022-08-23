import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  src: string
  alt: string
  height?: number | string
  className?: string
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
  className,
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
      loading="lazy"
    />
  )
}

export default InsImage
