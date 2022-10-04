import { PropsWithChildren } from 'react'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import { Alignments, Typographies } from '../../types/typography.type'

interface IProps {
  level?: Typographies
  align?: Alignments
  bold?: boolean
  uppercase?: boolean
  children?: React.ReactNode
  className?: string
}

const InsTypography = ({
  align = 'inherit',
  level = 'h3',
  bold = false,
  uppercase = false,
  children = 'Not Provided',
  className = '',
}: PropsWithChildren<IProps>): JSX.Element => {
  const boldClass = bold ? 'font-bold' : ''
  const uppercaseClass = uppercase ? 'uppercase' : ''

  return (
    <Typography
      align={align}
      variant={level}
      className={clsx(className, boldClass, uppercaseClass)}
    >
      {children}
    </Typography>
  )
}

export default InsTypography
