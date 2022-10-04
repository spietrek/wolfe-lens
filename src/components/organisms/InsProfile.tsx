import { useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import clsx from 'clsx'
import InsAvatar from '../atoms/InsAvatar'
import InsButton from '../atoms/InsButton'
import InsTypography from '../atoms/InsTypography'

const InsProfile = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div className={clsx('flex', 'items-center', 'justify-start')}>
      <div className="ml-2 h-[30px] w-[30px]">
        <InsAvatar variant="circular" src="/assets/images/me.webp" />
      </div>

      <InsButton
        ariaControls={open ? 'basic-menu' : undefined}
        ariaHasPopup="true"
        ariaExpanded={open ? true : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        <InsTypography level="body2" bold>
          Steve Pietrek
        </InsTypography>
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
