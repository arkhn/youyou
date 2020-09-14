// REACT
import React from "react";
import { Link } from "react-router-dom";

// EXTERNAL DEPENDENCIES & MATERIAL UI
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

// COMPONENTS & STATES
import { ReactComponent as Logo } from "assets/img/arkhn-logo.svg";

// STYLE
import useStyles from "components/navbar/style";

type NavbarProps = {
  buttonType?: "profile" | "extension";
};

const Navbar: React.FC<NavbarProps> = ({ buttonType }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navBar}>
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
            <Link to={"/extension/edit"}>
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
