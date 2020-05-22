import * as React from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "./components/home";

import { ROUTE_HOME } from "./constants";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTE_HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
