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
    mode: 'light',
    success: {
      main: '#90caf9',
    },
    primary: {
      main: '#06AAAA',
    },
    background: {
      default: '#f0f2f5',
    },
  },
})

export default theme
