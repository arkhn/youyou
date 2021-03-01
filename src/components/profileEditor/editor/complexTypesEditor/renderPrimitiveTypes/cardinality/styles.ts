import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  cardinalityForm: {
    display: 'flex',
    height: 53,
    alignItems: 'center'
  },
  inputCardinality: {
    width: 60
  },
  cardinalityContainer: {
    borderRadius: 4,
    border: `1px solid ${theme.palette.primary.light}`,
    padding: 8
  },
  cardinalityInformations: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 4
  },
  cardinalityTitle: {
    marginRight: 16
  },
  cardinalityToggle: {
    marginRight: 8
  }
}));

export default useStyles;
