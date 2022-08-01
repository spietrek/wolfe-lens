import { PropsWithChildren } from 'react'
import { CircularProgress } from '@mui/material'

interface IProps {
  isLoading: boolean
  children?: React.ReactNode
}

const InsIndicator = ({
  isLoading,
  children,
}: PropsWithChildren<IProps>): JSX.Element => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    )
  }

  return <div>{children}</div>
}

export default InsIndicator
