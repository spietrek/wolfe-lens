import { PropsWithChildren } from 'react'
import { AppBar, AppBarProps, styled, Toolbar } from '@mui/material'

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  backgroundImage: 'none',
  boxShadow: 'none',
})) as typeof AppBar

interface IProps {
  color?: 'inherit' | 'default' | 'primary' | 'secondary'
  component?: React.ElementType
  elevation?: number
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
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
      <Toolbar style={{ padding: '0' }}>{children}</Toolbar>
    </StyledAppBar>
  )
}

export default InsAppBar
