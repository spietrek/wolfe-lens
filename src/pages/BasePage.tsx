import { useEffect } from 'react'
import { Container, ContainerProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactGA from 'react-ga'
import { Outlet, useLocation } from 'react-router-dom'
import InsFooter from '../components/organisms/InsFooter'
import InsHeader from '../components/organisms/InsHeader'
import InsSignupForm from '../components/organisms/InsSignupForm'
import { useOnline } from '../hooks/useOnline'
import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks'
import { useDarkMode } from '../providers/withThemeProvider'
import { RootState } from '../store'
import {
  companyTitleSelector,
  retrieveBasePageData,
} from '../store/slices/basePage/basePageSlice'

const TRACKING_ID = 'UA-43288618-2'
ReactGA.initialize(TRACKING_ID)

const StyledContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  borderTop: `4px solid ${theme.palette.primary.main}`,
  padding: '0 !important',
  overflowX: 'hidden',
})) as typeof Container

const BasePage = (): JSX.Element => {
  const location = useLocation()
  const online = useOnline()
  const { darkMode, setDarkMode } = useDarkMode()
  const dispatch = useAppDispatch()

  const companyTitle = useAppSelector((state: RootState) => {
    return companyTitleSelector(state)
  })

  const { headerNavLinks, footerNavLinks } = useAppSelector(
    (state: RootState) => {
      return state.storeBasePage
    },
  )

  useEffect(() => {
    void dispatch(retrieveBasePageData())
    window.scrollTo(0, 0)
  }, [dispatch])

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
    <StyledContainer className="max-w-[1200px]">
      <InsHeader
        companyTitle={companyTitle}
        headerNavLinks={headerNavLinks}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <div className="px-4">
        <Outlet />
      </div>
      <div className="mt-10 mb-20">
        <InsSignupForm />
      </div>
      <InsFooter companyTitle={companyTitle} footerNavLinks={footerNavLinks} />
    </StyledContainer>
  )
}

export default BasePage
