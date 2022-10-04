import { PropsWithChildren } from 'react'
import { Stack } from '@mui/material'

interface IProps {
  spacing?: number
  children?: React.ReactNode
}

const InsStack = ({
  spacing = 4,
  children,
}: PropsWithChildren<IProps>): JSX.Element => {
  return <Stack spacing={spacing}>{children}</Stack>
}

export default InsStack
