import { PropsWithChildren } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import InsIconButton from '../atoms/InsIconButton'

interface IProps {
  darkMode: boolean
  onToggle: () => void
}

const InsDarkModeToggle = ({
  darkMode,
  onToggle,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <InsIconButton onClick={onToggle}>
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </InsIconButton>
  )
}

export default InsDarkModeToggle
