import { useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import clsx from 'clsx'
import InsAvatar from '../atoms/InsAvatar'
import InsBodyText from '../atoms/InsBodyText'
import InsButton from '../atoms/InsButton'

interface IProps {
  className?: string
}

const InsProfile = ({ className = '' }: IProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div className={clsx('flex', 'items-center', 'justify-start', className)}>
      <InsAvatar
        variant="circular"
        src="assets/images/me.jpg"
        style={{ width: 24, height: 24, marginLeft: '8px' }}
      />

      <InsButton
        ariaControls={open ? 'basic-menu' : undefined}
        ariaHasPopup="true"
        ariaExpanded={open ? true : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        <InsBodyText className="pt1 font-bold" inline>
          Steve Pietrek
        </InsBodyText>
      </InsButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default InsProfile
