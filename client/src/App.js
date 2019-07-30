import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

import Landing from "./components/pages/Landing";
import AdminLogin from "./components/pages/AdminLogin";
import ClientLogin from "./components/pages/ClientLogin";
import Dashboard from "./components/pages/Dashboard/index";
import ServerAdmin from "./components/pages/ServerAdmin";
import WindowsAdmin from "./components/pages/WindowsAdmin";
import LinuxAdmin from "./components/pages/LinuxAdmin";
import DesktopAppSupp from "./components/pages/DesktopAppSupp";
import NetworkSecurity from "./components/pages/NetworkSecurity";
import SiteSurveillance from "./components/pages/SiteSurveillance";
import PrivateRoute from "./components/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";
import { loaduser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={AdminLogin} />
            <Route exact path="/client" component={ClientLogin} />
            <Route
              exact
              path="/server_administration"
              component={ServerAdmin}
            />
            <Route
              exact
              path="/windows_administration"
              component={WindowsAdmin}
            />
            <Route exact path="/linux_administration" component={LinuxAdmin} />
            <Route
              exact
              path="/desktop_application_support"
              component={DesktopAppSupp}
            />
            <Route
              exact
              path="/network_security_and_design"
              component={NetworkSecurity}
            />
            <Route
              exact
              path="/site_surveillance"
              component={SiteSurveillance}
            />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default App;
