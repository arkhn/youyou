import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  accordionTitle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  accordionAddItem: {
    borderRadius: 4,
    padding: 4,
    border: `1px solid ${theme.palette.primary.light}`
  },
  addValue: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  title: {
    marginRight: 8,
    marginLeft: 4
  },
  allTitles: {
    display: 'flex',
    alignItems: 'center'
  }
}));
