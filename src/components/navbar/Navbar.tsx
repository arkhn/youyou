import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { ReactComponent as Logo } from "../../assets/img/arkhn-logo.svg";

type NavbarProps = {
  buttonType?: "profile" | "extension";
};

const Navbar: React.FC<NavbarProps> = ({ buttonType }) => {
  const classes = useStyles();

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

export default Navbar;
