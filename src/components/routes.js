import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage, AboutUs, ContactUs, Marble, NotFound } from "./components";
import Nav from "./nav";

const Routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/marble/:id" component={Marble} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
