import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 12,
    h1: {
      fontSize: 24,
      fontWeight: 600
    },
    h6: {
      fontSize: 14
    }
  },
  palette: {
    primary: {
      main: '#394B59',
      light: '#F7F7F8',
      dark: '#1A2228'
    },
    secondary: {
      main: '#90DFBF',
      light: '#DCF8EA',
      dark: '#38C28A'
    },
    background: {
      default: '#F7F8FA',
      paper: '#fff'
    }
  }
});

export default theme;
