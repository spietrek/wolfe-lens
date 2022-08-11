import { PropsWithChildren } from 'react'
import { Button } from '@mui/material'
import {
  ButtonAriaPopus,
  ButtonColors,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
} from '../../types/button.type'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopus
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode
  className?: string
  color?: ButtonColors
  disabled?: boolean
  endIcon?: React.ReactNode
  fullWidth?: boolean
  href?: string | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: ButtonSizes
  startIcon?: React.ReactNode
  style?: React.CSSProperties
  tabIndex?: number | undefined
  type?: ButtonTypes
  variant?: ButtonVariants
}

const InsButton = ({
  ariaControls = undefined,
  ariaHasPopup = undefined,
  ariaExpanded = undefined,
  children,
  className,
  color = 'inherit',
  disabled = false,
  endIcon = null,
  fullWidth = false,
  href = undefined,
  onClick,
  size = 'medium',
  startIcon = null,
  style = {},
  tabIndex = undefined,
  type = 'button',
  variant = 'text',
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Button
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      className={className}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      style={style}
      tabIndex={tabIndex}
      type={type}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export default InsButton
