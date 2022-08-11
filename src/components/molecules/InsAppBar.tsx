import { PropsWithChildren } from 'react'
import { AppBar, AppBarProps, styled, Toolbar } from '@mui/material'
import { Colors } from '@/types/color.type'
import { Positions } from '../../types/position.type'

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  backgroundImage: 'none',
  boxShadow: 'none',
})) as typeof AppBar

interface IProps {
  color?: Colors
  component?: React.ElementType
  elevation?: number
  position?: Positions
  children?: React.ReactNode
  style?: React.CSSProperties
}

const InsAppBar = ({
  color = 'default',
  component = 'header',
  elevation = 1,
  position = 'static',
  children = null,
  style,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <StyledAppBar
      color={color}
      component={component}
      elevation={elevation}
      position={position}
      style={style}
    >
      <Toolbar className="p-0">{children}</Toolbar>
    </StyledAppBar>
  )
}

export default InsAppBar
