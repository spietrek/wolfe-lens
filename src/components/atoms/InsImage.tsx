import { PropsWithChildren } from 'react'

interface IProps {
  src: string
  alt: string
  height?: number | string
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <img
      src={src}
      srcSet={src}
      height={height}
      alt={alt}
      className="block w-full transform transition duration-500"
      loading="lazy"
    />
  )
}

export default InsImage
