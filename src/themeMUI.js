import {
    createMuiTheme
} from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        h1: {
            fontSize: 20
        },
        h6: {
            fontSize: 16
        }
    },
    palette: {
        primary: {
            main: '#1a235a'
        },
        secondary: {
            main: '#d48062'
        },
        background: {
            default: "#F7F8FA",
            paper: "#fff"
        }
    }
})

export default theme;