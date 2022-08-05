import { PropsWithChildren } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import InsButton from '../atoms/InsButton'
import InsIconButton from '../atoms/InsIconButton'
import InsAppBar from '../molecules/InsAppBar'
import InsDarkModeToggle from '../molecules/InsDarkModeToggle'
import InsLogo from '../molecules/InsLogo'
import InsProfile from './InsProfile'

interface IProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

const InsHeader = ({
  darkMode,
  onToggleDarkMode,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsAppBar position="static">
      <InsButton color="inherit">Bikes</InsButton>
      <InsButton color="inherit">Gear</InsButton>
      <InsButton color="inherit">Parts</InsButton>

      <div className="hidden flex-grow md:block">
        <Link to="/" className="block text-center">
          <InsLogo />
        </Link>
      </div>

      <div className="block flex-grow md:hidden" />

      <InsDarkModeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />
      <InsIconButton>
        <SearchIcon />
      </InsIconButton>
      <InsIconButton>
        <Badge badgeContent={2} color="primary">
          <ShoppingBagIcon />
        </Badge>
      </InsIconButton>

      <InsProfile className="justify-end" />
    </InsAppBar>
  )
}

export default InsHeader
