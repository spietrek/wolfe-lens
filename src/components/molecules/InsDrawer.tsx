import { PropsWithChildren } from 'react'
import { Drawer } from '@mui/material'
import { Anchors } from '@/types/drawer.type'

interface IProps {
  anchor?: Anchors
  open?: boolean
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void
  children?: React.ReactNode
}

const InsDrawer = ({
  anchor = 'left',
  open = false,
  onClose,
  children = null,
}: PropsWithChildren<IProps>): JSX.Element => (
  <Drawer anchor={anchor} open={open} onClose={onClose}>
    {children}
  </Drawer>
)

export default InsDrawer
