import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default (
  <Router>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/admin" />
      <Route exact path="/client" />
      <Route exact path="/server_administration" />
      <Route exact path="/windows_administration" />
      <Route exact path="/linux_administration" />
      <Route exact path="/desktop_application_support" />
      <Route exact path="/network_security_and_design" />
      <Route exact path="/site_surveillance" />
      <Route />
    </Switch>
  </Router>
);
