import { TextField, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const CssTextField = withStyles((theme: Theme) => ({
  root: {
    width: '70%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.dark
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.dark
      }
    }
  }
}))(TextField);

export default CssTextField;
