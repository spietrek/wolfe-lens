import { PropsWithChildren } from 'react'

interface IProps {
  className?: string
  children?: React.ReactNode
  inline?: boolean
}

const InsBodyText = ({
  className,
  children = 'Not Provided',
  inline = false,
}: PropsWithChildren<IProps>): JSX.Element => {
  if (inline) {
    return <span className={className}>{children}</span>
  }

  return <p className={className}>{children}</p>
}

export default InsBodyText
