import { makeStyles, Theme } from "@material-ui/core/styles";
import { navbarHeight } from "../navbar/style";

const useStyles = makeStyles((theme: Theme) => ({
  mapping: {
    display: "flex",
    alignItems: "stretch",
    height: "100vh",
    boxSizing: "border-box",
    padding: theme.spacing(5),
    paddingTop: theme.spacing(5) + navbarHeight
  },
  item: {
    "&:focus": {
      backgroundColor: theme.palette.primary.light
    }
  },
  paperRight: {
    marginLeft: 16,
    flexGrow: 1
  },
  paperLeft: {
    overflow: "auto"
  },
  paper: {
    padding: 16
  }
}));

export default useStyles;
