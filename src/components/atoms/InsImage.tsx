import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  src: string
  alt: string
  height?: string
  width?: string
  style?: React.CSSProperties
  zoom?: boolean
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
  width = 'auto',
  style,
  zoom = false,
}: PropsWithChildren<IProps>): JSX.Element => {
  const zoomStyle: string = zoom ? 'hover:scale-125' : ''

  return (
    <div className="inline-block w-full overflow-hidden">
      <img
        src={src}
        height={height}
        width={width}
        alt={alt}
        className={clsx(
          'block w-full transform transition duration-500',
          zoomStyle,
        )}
        style={{ ...style }}
      />
    </div>
  )
}

export default InsImage
