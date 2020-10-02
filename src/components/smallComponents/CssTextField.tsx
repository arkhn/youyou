import { TextField, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CssTextField = withStyles((theme: Theme) => ({
  root: {
    marginRight: 8,
    width: 300,
    maxWidth: 300,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.dark
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.dark
      }
    }
  }
}))(TextField);

export default CssTextField;
