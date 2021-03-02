import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  dateTimeContainer: {
    borderRadius: 4,
    border: `1px solid ${theme.palette.primary.light}`,
    padding: 8
  },
  titles: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 12
  },
  title: {
    marginRight: 8
  },
  inputs: {
    display: 'flex'
  },
  timeInput: {
    marginLeft: 8
  }
}));

export default useStyles;
