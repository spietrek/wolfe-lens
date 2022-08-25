import { PropsWithChildren, useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import clsx from 'clsx'
import InsAvatar from '../atoms/InsAvatar'
import InsBodyText from '../atoms/InsBodyText'
import InsButton from '../atoms/InsButton'

interface IProps {
  className?: string
}

const InsProfile = ({
  className = '',
}: PropsWithChildren<IProps>): JSX.Element => {
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
        src="/assets/images/me.webp"
        className="ml-2 h-[24px] w-[24px]"
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
