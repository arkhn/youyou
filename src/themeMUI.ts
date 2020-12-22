import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontSize: 24,
      fontWeight: 600
    },
    h2: {
      fontSize: 16,
      fontStyle: 'italic'
    },
    body1: {
      fontSize: 14
    },
    body2: {
      fontSize: 12
    }
  },
  palette: {
    primary: {
      main: '#384B59',
      light: '#F7F8FA',
      contrastText: '#E6EBEF'
    },
    secondary: {
      main: '#8FDFBF',
      light: '#E6EBEF',
      dark: '#38C28A',
      contrastText: '#fff'
    },
    background: {
      default: '#F7F8FA',
      paper: '#fff'
    },
    text: {
      primary: '#384B59',
      secondary: '#7F7F80'
    }
  }
});

export default theme;
