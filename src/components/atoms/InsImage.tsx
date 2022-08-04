import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  src: string
  alt: string
  height?: string
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
      height={height}
      alt={alt}
      className={clsx(
        'block w-full transform transition duration-500',
        className,
        className,
      )}
    />
  )
}

export default InsImage
