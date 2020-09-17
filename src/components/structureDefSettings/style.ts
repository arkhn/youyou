import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  form: {
    overflowY: "auto",
    paddingTop: 8,
    marginBottom: 8,
    height: "1fr"
  },
  submitButton: {
    width: 100
  },
  bigInput: {
    width: "100%"
  },
  endForm: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
}));

export default useStyles;
