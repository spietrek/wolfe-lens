import { ToggleButton } from '@mui/material'
import clsx from 'clsx'

export interface IToggleButtonProps {
  value: string
  key: string
  className?: string
  children?: React.ReactNode
}

const InsToggleButton = ({
  value,
  key,
  className,
  children,
}: IToggleButtonProps): JSX.Element => {
  const classes = clsx('h-[42px] w-[42px]', className)

  return (
    <ToggleButton value={value} key={key} className={classes}>
      {children}
    </ToggleButton>
  )
}

export default InsToggleButton
