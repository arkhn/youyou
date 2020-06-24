import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./style.js";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header} variant="dense">
          <IconButton
            edge="start"
            className={classes.logo}
            color="inherit"
            aria-label="menu"
          >
            <img
              id="logoNavbar"
              src={"/arkhn_logo_only_white.svg"}
              alt="Arkhn"
            />
          </IconButton>
          <Typography className={classes.titleNavbar}>YOUYOU</Typography>
        </Toolbar>
      </AppBar>
      {/* <BPNavbar id="navbar">
        <BPNavbar.Group align={Alignment.LEFT}>
          <BPNavbar.Heading>
            <Link className="linkNavbar" to={ROUTE_HOME}>
              <img
                id="logoNavbar"
                src={"/arkhn_logo_only_white.svg"}
                alt="Arkhn"
              />
              <h3 id="titleNavbar">Extension maker</h3>
            </Link>
          </BPNavbar.Heading>
        </BPNavbar.Group>

        <BPNavbar.Group align={Alignment.RIGHT}>
          <Icon icon="user" />
          <div>User</div>
          <BPNavbar.Divider />
          <Button icon="more" minimal className="headerButtons" />
          <Button icon="log-out" minimal className="headerButtons" />
        </BPNavbar.Group>
      </BPNavbar> */}
    </div>
  );
};

export default Header;
