import React, { Fragment, useState } from "react";
import "./admin-login.css";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    passwword: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("SUCCESS");
  };

  return (
    <Fragment>
      <div className="login-container">
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

export default AdminLogin;
