import { makeStyles, Theme } from "@material-ui/core/styles";
import { navbarHeight } from "components/navbar/style";

const useStyles = makeStyles((theme: Theme) => ({
  loader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginRight: theme.spacing(2)
  },
  buttonLink: {
    textDecoration: "none"
  },
  items: {
    padding: theme.spacing(5),
    paddingTop: navbarHeight + theme.spacing(2),
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    position: "relative"
  },
  itemCard: {
    padding: theme.spacing(3),
    "@media (min-width:1300px)": {
      padding: theme.spacing(8)
    }
  },
  itemCardTitle: {
    zIndex: 1
  },
  itemCardLeft: {
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "space",
    marginRight: theme.spacing(4),
    position: "relative",
    "@media (min-width:1300px)": {
      minWidth: 400
    }
  },
  itemCardLeftButton: {
    position: "relative",
    width: "100%",
    zIndex: 1
  },
  itemCardRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  fhirLogo: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 0,
    height: "100%",
    width: "auto"
  }
}));

export default useStyles;
