import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navBar: {
        background: theme.palette.background.paper,
    },
    toolBar: {
        paddingLeft: 32
    }
}))

export default useStyles;