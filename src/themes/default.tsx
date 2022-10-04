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
  typography: {
    h1: {
      fontSize: '56px',
      lineHeight: '64px',
      margin: '0',
    },
    h2: {
      fontSize: '40px',
      lineHeight: '48px',
      margin: '0',
    },
    h3: {
      fontSize: '32px',
      lineHeight: '40px',
      margin: '0',
    },
    h4: {
      fontSize: '28px',
      lineHeight: '36px',
      margin: 0,
    },
    h5: {
      fontSize: '24px',
      lineHeight: '32px',
      margin: '0',
    },
    h6: {
      fontSize: '20px',
      lineHeight: '28px',
      margin: '0',
    },
  },
})

export default theme
