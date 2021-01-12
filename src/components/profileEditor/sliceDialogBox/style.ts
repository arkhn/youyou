import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  dialogBoxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  dialogBoxContainer: {
    padding: 24,
    width: 500
  },
  dialogBoxTitle: {
    marginTop: 8
  },
  dialogBoxClose: {
    height: 48
  },
  dialogBoxText: {
    marginBottom: 24
  },
  dialogBoxButton: {
    marginTop: 16
  }
}));

export default useStyles;
