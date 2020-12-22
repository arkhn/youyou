import { makeStyles, Theme } from '@material-ui/core/styles';

export const navbarHeight = 65;

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    background: theme.palette.secondary.main,
    height: navbarHeight
  },
  toolBar: {
    paddingLeft: 40
  },
  logo: {
    height: 27,
    width: 21,
    marginRight: 16
  },
  buttonExtension: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  homeLink: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',
    display: 'flex'
  }
}));

export default useStyles;
