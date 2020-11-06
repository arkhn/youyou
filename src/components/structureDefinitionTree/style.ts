import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  treeItem: {
    display: 'flex',
    margin: 2
  },
  iconTreeItemMeta: {
    color: theme.palette.secondary.dark
  },
  textTreeItemMeta: {
    fontStyle: 'italic'
  },
  iconTreeItem: {
    width: 15,
    marginRight: 10
  },
  resourceId: {
    marginBottom: 8
  }
}));

export default useStyles;
