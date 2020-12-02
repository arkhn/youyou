import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focused': {
      outline: 'none'
    }
  },
  modalPaper: {
    width: 400,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative'
  },
  modalPaperClose: {
    position: 'absolute',
    top: 10,
    right: 10
  }
}));

export default useStyles;
