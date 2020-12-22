import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { AccordionSummary, Button } from '@material-ui/core';
import theme from 'themeMUI';

export const MuiAccordionSummary = withStyles({
  root: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: -1,
    height: 56
  }
})(AccordionSummary);

export const MuiButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: '#FEEDEB'
    }
  }
}))(Button);

export const useStyles = makeStyles((theme: Theme) => ({
  accordionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  accordionAddItem: {
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 4,
    border: `1px solid ${theme.palette.primary.light}`
  },
  accordion: {
    marginBottom: 16
  }
}));
