import { makeStyles, Theme } from "@material-ui/core/styles";
import { navbarHeight } from "components/navbar/style";

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
    flexGrow: 1,
    overflow: "auto"
  },
  paperLeft: {
    width: 500,
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    padding: 32
  },
  capitalize: {
    textTransform: "capitalize"
  },
  containerRight: {
    display: "flex",
    flexDirection: "column"
  },
  marginBottom: {
    marginBottom: 16
  },
  treeView: {
    overflow: "auto",
    margin: "8px 0 16px 0",
    height: "100%"
  },
  downloadLink: {
    textDecoration: "none"
  },
  downloadButton: {
    width: "100%"
  }
}));

export default useStyles;
