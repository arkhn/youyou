import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  treeItem: {
    margin: 2
  },
  treeItemContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 25,
    width: '100%'
  },
  iconEndTreeItem: {
    marginLeft: 'auto',
    height: 25,
    display: 'flex'
  },
  iconEndTreeItemPizza: {
    color: theme.palette.secondary.main
  },
  iconStartTreeItemPizza: {
    height: 15
  },
  treeItemText: {
    marginLeft: 8,
    wordBreak: 'break-word'
  }
}));

export default useStyles;
