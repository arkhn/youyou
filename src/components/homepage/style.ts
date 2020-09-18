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
    "@media (min-width:800px)": {
      marginRight: theme.spacing(2)
    }
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
    padding: theme.spacing(4)
  },
  itemCardTitle: {
    zIndex: 1
  },
  itemCardLeft: {
    minWidth: 250,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "space",
    marginRight: theme.spacing(4),
    position: "relative",
    "@media (min-width:1200px)": {
      minWidth: 400
    }
  },
  itemCardLeftButton: {
    position: "relative",
    width: "100%",
    zIndex: 1,
    "@media (min-width:800px)": {
      display: "none"
    }
  },
  itemCardRight: {
    display: "none",
    "@media (min-width:800px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  },
  fhirLogo: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "100%",
    width: "65%",
    zIndex: 0
  }
}));

export default useStyles;
