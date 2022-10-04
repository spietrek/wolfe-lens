import { PropsWithChildren } from 'react'
import { IconButton } from '@mui/material'
import {
  ButtonAriaPopus,
  ButtonColors,
  ButtonSizes,
} from '../../types/button.type'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopus
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode
  color?: ButtonColors
  disabled?: boolean
  size?: ButtonSizes
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const InsIconButton = ({
  ariaControls = undefined,
  ariaHasPopup = undefined,
  ariaExpanded = undefined,
  children,
  color = 'inherit',
  disabled = false,
  onClick,
  size = 'medium',
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <IconButton
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {children}
    </IconButton>
  )
}

export default InsIconButton
