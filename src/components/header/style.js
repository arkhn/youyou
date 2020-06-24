
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50
  },
  header: {
    backgroundColor: "#6ad4a9",
    height: 50
  },
  logo: {
    marginRight: theme.spacing(1),
  },
  titleNavbar: {
    cursor: "pointer",
    textDecoration: "none",
    color: "white"
  }
}));

export default useStyles;