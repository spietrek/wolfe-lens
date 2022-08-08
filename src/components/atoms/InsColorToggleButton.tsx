import clsx from 'clsx'
import InsToggleButton, { IToggleButtonProps } from './InsToggleButton'

interface IColorToggleButtonProps extends IToggleButtonProps {
  color: string
}

const InsColorToggleButton = ({
  value,
  key,
  className,
  children,
  color,
}: IColorToggleButtonProps): JSX.Element => {
  const classes = clsx(className, `!bg-[${color}]`)

  return (
    <InsToggleButton value={value} key={key} className={classes}>
      {children}
    </InsToggleButton>
  )
}

export default InsColorToggleButton
