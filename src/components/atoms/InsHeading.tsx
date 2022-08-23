import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Headings } from '@/types/heading.type'

interface IProps {
  className?: string
  level?: Headings
  children?: React.ReactNode
}

const InsHeading = ({
  className,
  level = 'h3',
  children = 'Not Provided',
}: PropsWithChildren<IProps>): JSX.Element => {
  const Heading = level

  return <Heading className={clsx('m-0', className)}>{children}</Heading>
}

export default InsHeading
