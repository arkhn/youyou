import { TextField, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const CssTextField = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.dark
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.dark
      },
      '&.Mui-error fieldset': {
        borderColor: theme.palette.error.main
      }
    }
  }
}))(TextField);

export default CssTextField;
