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
    paddingRight: 16,
    border: `1px solid ${theme.palette.primary.light}`
  },
  titleAdd: {
    marginLeft: 4
  }
}));
