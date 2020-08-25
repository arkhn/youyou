import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./style";
import { ReactComponent as Logo } from "../../../assets/img/arkhn-logo.svg";

const NavBar: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar className={classes.toolBar}>
        <Logo className={classes.logo} />
        <Typography variant="h1" color="primary">
          YOUYOU
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
