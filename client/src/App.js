import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Landing from "./components/pages/Landing";
import AdminLogin from "./components/pages/AdminLogin";
import ClientLogin from "./components/pages/ClientLogin";
import Dashboard from "./components/pages/Dashboard/index";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/admin" component={AdminLogin} />
            <Route exact path="/client" component={ClientLogin} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
