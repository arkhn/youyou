import { makeStyles, Theme } from "@material-ui/core/styles";
import { navbarHeight } from "components/navbar/style";

const useStyles = makeStyles((theme: Theme) => ({
  jsonViewer: {
    height: "100vh",
    display: "flex",
    padding: theme.spacing(5),
    paddingTop: navbarHeight + theme.spacing(2),
  }
}));

export default useStyles;
