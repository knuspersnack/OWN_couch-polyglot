import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "./Grid";
import Home from "./Home";
import Impressum from "./Impressum";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/impressum" component={Impressum}></Route>
      <Route exact path="/grid" component={Grid}></Route>
    </Switch>
  );
};

export default Routing;
