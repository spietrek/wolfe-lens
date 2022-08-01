import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    success: {
      main: '#90caf9',
    },
    background: {
      default: '#1e1e1e',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default theme
