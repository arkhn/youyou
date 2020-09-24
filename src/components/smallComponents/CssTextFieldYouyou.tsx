import { TextField, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CssTextFieldYouyou = withStyles((theme: Theme) => ({
  root: {
    marginBottom: 16,
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

export default CssTextFieldYouyou;
