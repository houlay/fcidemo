import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import fci_logo from "../../../img/fci-logo.png";

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src={fci_logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="FCI logo"
          />
          FCI IT Services
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#!" onClick={logout}>
                <i className="fas fa-sign-out-alt" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { logout }
)(Header);
