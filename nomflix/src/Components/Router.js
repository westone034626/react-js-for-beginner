import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
}

export default Router;
