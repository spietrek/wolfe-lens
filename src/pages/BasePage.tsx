import { useEffect } from 'react'
import { Container, ContainerProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactGA from 'react-ga'
import { Outlet, useLocation } from 'react-router-dom'
import InsFooter from '../components/organisms/InsFooter'
import InsHeader from '../components/organisms/InsHeader'
import { useOnline } from '../hooks/useOnline'
import { useDarkMode } from '../providers/withThemeProvider'

const TRACKING_ID = 'UA-43288618-2'
ReactGA.initialize(TRACKING_ID)

const StyledContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  borderTop: `3px solid ${theme.palette.primary.main}`,
  padding: '0 !important',
  overflowX: 'hidden',
})) as typeof Container

const BasePage = (): JSX.Element => {
  const location = useLocation()
  const online = useOnline()
  const { darkMode, setDarkMode } = useDarkMode()

  useEffect(() => {
    if (online) {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [online, location])

  const handleToggleDarkMode = (): void => {
    const value = !darkMode
    setDarkMode(value)
  }

  return (
    <StyledContainer maxWidth="md">
      <InsHeader darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <div className="px-4 lg:px-0">
        <Outlet />
      </div>
      <InsFooter />
    </StyledContainer>
  )
}

export default BasePage
