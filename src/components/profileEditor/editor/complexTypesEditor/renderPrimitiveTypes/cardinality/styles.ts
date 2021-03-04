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
    border: `1px solid ${theme.palette.primary.contrastText}`,
    padding: 8
  },
  cardinalityInformations: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 12
  },
  cardinalityTitle: {
    marginRight: 8
  },
  cardinalityToggle: {
    marginRight: 8
  }
}));

export default useStyles;
