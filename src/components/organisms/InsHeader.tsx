import { PropsWithChildren } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { ICategory } from '../../types/category.type'
import InsButton from '../atoms/InsButton'
import InsIconButton from '../atoms/InsIconButton'
import InsAppBar from '../molecules/InsAppBar'
import InsDarkModeToggle from '../molecules/InsDarkModeToggle'
import InsLogo from '../molecules/InsLogo'
import InsProfile from './InsProfile'

interface IProps {
  companyTitle: string
  headerNavLinks: ICategory[]
  darkMode: boolean
  onToggleDarkMode: () => void
}

const InsHeader = ({
  companyTitle,
  headerNavLinks = [],
  darkMode,
  onToggleDarkMode,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsAppBar position="static">
      {headerNavLinks.map((link: ICategory) => (
        <InsButton color="inherit" key={link.sortOrder}>
          {link.label}
        </InsButton>
      ))}

      <div className="hidden flex-grow md:block">
        <Link to="/" className="block text-center">
          <InsLogo companyTitle={companyTitle} />
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

      <InsProfile />
    </InsAppBar>
  )
}

export default InsHeader
