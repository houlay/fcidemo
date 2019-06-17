import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../layout/Alert";

import "./admin-login.css";

const AdminLogin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    passwword: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login-container">
        <Alert />
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h2>ADMIN LOGIN</h2>
              <p>Please enter your email and password</p>
            </div>
            <form id="Login" onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="inputEmail"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  id="inputPassword"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => onChange(e)}
                  minLength="6"
                  required
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary"
                id="loginBtn"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AdminLogin.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(AdminLogin);
