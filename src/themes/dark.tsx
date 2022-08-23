import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    mode: 'dark',
    success: {
      main: '#90caf9',
    },
    primary: {
      main: '#06AAAA',
    },
    background: {
      default: '#1e1e1e',
    },
  },
})

export default theme
