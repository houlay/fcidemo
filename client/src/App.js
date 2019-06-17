import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Landing from "./components/pages/Landing";
import AdminLogin from "./components/pages/AdminLogin";
import ClientLogin from "./components/pages/ClientLogin";
import Dashboard from "./components/pages/Dashboard/index";
import Allservices from "./components/pages/Allservices";
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
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/client" component={ClientLogin} />
          <Route exact path="/allservices" component={Allservices} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
