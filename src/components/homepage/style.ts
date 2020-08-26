import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  loader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  homepage: {
    margin: 32
  },
  homepageText: {
    marginLeft: 8,
    marginBottom: 24,
    color: theme.palette.primary.main
  },
  grid: {
    width: "100%",
    margin: 0
  },
  gridItem: {
    height: 116
  },
  itemCardAction: {
    height: "100%",
    padding: 10
  },
  itemLink: {
    textDecoration: "none"
  },
  itemCard: {
    height: "100%",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: 8
  },
  itemText: {
    zIndex: 2,
    position: "relative",
    textAlign: "center",
    color: theme.palette.primary.dark
  },
  fhirLogo: {
    position: "absolute",
    right: 0,
    bottom: 0
  }
}));

export default useStyles;
