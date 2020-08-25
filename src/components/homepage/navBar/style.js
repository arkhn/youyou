import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navBar: {
        background: theme.palette.background.paper,
    },
    toolBar: {
        paddingLeft: 40
    },
    logo: {
        height: 27,
        width: 21,
        marginRight: 16
    }
}))

export default useStyles;