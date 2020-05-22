import { Alignment, Button, Icon, Navbar as BPNavbar } from "@blueprintjs/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { ROUTE_HOME } from "../../constants";

import "./style.css";

const Header = () => {
  return (
    <BPNavbar id="navbar">
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
    </BPNavbar>
  );
};

export default Header;
