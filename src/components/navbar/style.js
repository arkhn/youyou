import { makeStyles } from "@material-ui/core/styles";

export const navbarHeight = 65;

const useStyles = makeStyles((theme) => ({
  navBar: {
    background: theme.palette.background.paper,
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
    position: "absolute",
    right: 10,
    top: 10
  },
  homeLink: {
    color: "inherit",
    textDecoration: "none",
    display: "flex"
  }
}));

export default useStyles;
