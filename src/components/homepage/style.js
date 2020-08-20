import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cards: {
        display: "flex",
        width: "fit-content",
        flexWrap: "wrap",
        padding: 5,
        justifyContent: "center"
    },
    card: {
        height: 116,
        margin: 5
    },
    content: {
        height: "100%",
        padding: 20,
        textAlign: 'center'
    },
    text: {
        textDecoration: "none",
        width: "20%"
    }
}))

export default useStyles;