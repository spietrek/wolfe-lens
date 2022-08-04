import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  src: string
  alt: string
  height?: string
  width?: string
  style?: React.CSSProperties
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
  width = 'auto',
  style,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      className="block w-full transform transition duration-500"
      style={{ ...style }}
    />
  )
}

export default InsImage
