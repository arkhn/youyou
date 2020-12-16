import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { AccordionSummary } from '@material-ui/core';

export const MuiAccordionSummary = withStyles({
  root: {
    backgroundColor: '#90DFBF'
  }
})(AccordionSummary);

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 4,
    width: '100%'
  },
  accordion: {
    border: '1px solid ' + theme.palette.secondary.main,
    flexGrow: 1
  },
  accordionSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1
  },
  accordionAndButton: {
    display: 'flex'
  },
  accordionButton: {
    height: 30,
    width: 50
  },
  completeDiv: {
    border: '1px solid ' + theme.palette.secondary.light,
    borderRadius: 8
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0',
    textTransform: 'uppercase'
  },
  checkbox: {
    marginLeft: 0
  }
}));
