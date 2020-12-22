import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  editorContainer: {
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  breadcrumbs: {
    wordBreak: 'break-word',
    marginBottom: 8
  },
  paperRight: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: '22px 32px 16px 32px',
    display: 'flex',
    flexDirection: 'column'
  },
  formContainer: {
    padding: 16
  },
  formFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

export default useStyles;
