import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  selectMultipleType: { marginBottom: 4 },
  fixedBackbone: {
    borderRadius: 4,
    padding: 16,
    border: `1px solid ${theme.palette.primary.contrastText}`
  },
  fixedBackboneTitle: {
    marginBottom: 8
  }
}));

export default useStyles;
