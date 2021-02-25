import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  cardinalityForm: {
    display: 'flex',
    height: 53,
    alignItems: 'center',
    marginTop: 16
  },
  inputCardinality: {
    width: 60
  },
  cardinalityContainer: {
    borderRadius: 4,
    padding: '4px 16px 16px 16px',
    marginBottom: 16,
    border: `1px solid ${theme.palette.primary.light}`
  },
  cardinalityInformations: {
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  cardinalityTitle: {
    marginRight: 16
  }
}));

export default useStyles;
