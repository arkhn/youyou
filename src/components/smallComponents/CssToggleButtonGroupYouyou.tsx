import { Theme } from "@material-ui/core";
import { ToggleButtonGroup } from "@material-ui/lab";
import { withStyles } from "@material-ui/styles";

const CssToggleButtonGroupYouyou = withStyles((theme: Theme) => ({
  root: {
    "& .Mui-selected": {
      backgroundColor: theme.palette.secondary.main
    },
    "& .Mui-disabled": {
      backgroundColor: theme.palette.primary.light,
      border: "none"
    },
    "& .MuiToggleButton-root": {
      width: 50,
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0.5),
      transition: theme.transitions.create(
        ["background-color", "border-color"],
        {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeIn
        }
      ),
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        transition: theme.transitions.create(
          ["background-color", "border-color"],
          {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeIn
          }
        ),
        borderColor: theme.palette.secondary.dark
      }
    },
    "& .MuiToggleButton-root:not(.Mui-disabled)": {
      borderColor: theme.palette.secondary.main,
      "&:first-child": {
        marginLeft: 0
      },
      "&:last-child": {
        marginRight: 0
      }
    }
  }
}))(ToggleButtonGroup);

export default CssToggleButtonGroupYouyou;
