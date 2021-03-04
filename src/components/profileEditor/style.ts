import { makeStyles, Theme } from '@material-ui/core/styles';
import { navbarHeight } from 'components/navbar/style';

const useStyles = makeStyles((theme: Theme) => ({
  profileEditorContainer: {
    display: 'flex',
    height: '100vh',
    boxSizing: 'border-box',
    justifyContent: 'stretch',
    padding: theme.spacing(5),
    paddingTop: theme.spacing(5) + navbarHeight
  },
  structureDefTreeContainer: {
    maxWidth: 400,
    minWidth: 400,
    marginRight: 24,
    padding: '24px 32px 16px 32px',
    display: 'flex',
    flexDirection: 'column'
  },
  containerTreeAndEditor: {
    flexGrow: 1,
    overflowY: 'scroll',
    overflowX: 'hidden',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: 4,
    margin: '8px 0'
  },
  loader: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorTitle: {
    marginBottom: 16
  }
}));

export default useStyles;
