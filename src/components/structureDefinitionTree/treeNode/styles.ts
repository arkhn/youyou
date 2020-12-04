import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  index: {
    display: 'flex',
    alignItems: 'center',
    height: 25
  },
  treeItem: {
    display: 'flex',
    margin: 2,
    width: '100%'
  },
  iconTreeItem: {
    width: 15,
    marginRight: 10
  },
  pizzaIcon: {
    position: 'absolute',
    display: 'flex',
    right: 0
  }
}));

export default useStyles;
