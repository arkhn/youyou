import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import useStyles from "./style";
import { ReactComponent as Logo } from "../../assets/img/arkhn-logo.svg";

type HeaderProps = {
  buttonType?: "profile" | "extension" | undefined;
};

const Header: React.FC<HeaderProps> = ({ buttonType = undefined }) => {
  const classes = useStyles();

  const redirect = buttonType === "profile" ? "/editprofile" : "/editextension";

  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar className={classes.toolBar}>
        <Link to={"/"} className={classes.homeLink}>
          <Logo className={classes.logo} />
          <Typography variant="h1" color="primary">
            YOUYOU
          </Typography>
        </Link>
        {buttonType === "profile" ? (
          <Link to={"/"}>
            <Button variant="contained" className={classes.buttonExtension}>
              Profile generator
            </Button>
          </Link>
        ) : (
          buttonType && (
            <Link to={"/editextension"}>
              <Button variant="contained" className={classes.buttonExtension}>
                Extension generator
              </Button>
            </Link>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
