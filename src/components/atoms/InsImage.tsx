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
}: IProps): JSX.Element => {
  return (
    <div className="inline-block overflow-hidden">
      <img
        src={src}
        height={height}
        width={width}
        alt={alt}
        className="block transform transition duration-500 hover:scale-125"
        style={{ ...style }}
      />
    </div>
  )
}

export default InsImage
