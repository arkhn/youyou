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
    width: '100%',
    alignItems: 'center'
  },
  accordionAddItem: {
    borderRadius: 4,
    padding: 4,
    paddingRight: 16,
    border: `1px solid ${theme.palette.primary.light}`
  },
  accordion: {
    marginBottom: 16
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleAdd: {
    marginLeft: 4
  },
  accordionTitleDelete: {
    justifyContent: 'space-between'
  }
}));
