import { makeStyles, Theme } from '@material-ui/core/styles';
import { navbarHeight } from 'components/navbar/style';

const useStyles = makeStyles((theme: Theme) => ({
  mapping: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
    boxSizing: 'border-box',
    padding: theme.spacing(5),
    paddingTop: theme.spacing(5) + navbarHeight
  },
  item: {
    '&:focus': {
      backgroundColor: theme.palette.primary.light
    }
  },
  paperRight: {
    flexGrow: 1,
    overflow: 'auto'
  },
  paperLeft: {
    width: 600,
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    padding: 32
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  containerRight: {
    display: 'flex',
    flexDirection: 'column'
  },
  marginBottom: {
    marginBottom: 16
  },
  treeView: {
    overflow: 'auto',
    margin: '8px 0 16px 0'
  },
  downloadLink: {
    textDecoration: 'none'
  },
  downloadButton: {
    width: '100%'
  },
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
