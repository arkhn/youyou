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

export const useStyles = makeStyles(() => ({
  accordionTitle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  accordionTitleDelete: {
    justifyContent: 'space-between'
  },
  accordionTitleTooltip: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginRight: 8
  }
}));
