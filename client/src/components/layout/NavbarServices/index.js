import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import fci_logo from "../../../img/fci-logo.png";

const NavbarServices = () => {
  return (
    <Fragment>
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
              <RouterLink className="nav-link" to="/">
                Home
              </RouterLink>
            </li>

            {/* <li className="nav-item dropdown-menu-custom">
              <Link
                className="nav-link"
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
              <div className="padder">
                <div className="dropdown-content hide-on-break">
                  <RouterLink to="/test1">Why choose us</RouterLink>
                  <RouterLink to="/test2">The FCI approach</RouterLink>
                </div>
              </div>
            </li> */}
            <li className="nav-item dropdown-menu-custom">
              <Link className="nav-link">Services</Link>
              <div className="padder">
                <div className="dropdown-content hide-on-break">
                  <RouterLink to="/server_administration">
                    Server Administration
                  </RouterLink>
                  <RouterLink to="/windows_administration">
                    Windows Administration
                  </RouterLink>
                  <RouterLink to="/linux_administration">
                    Linux Administration
                  </RouterLink>
                  <RouterLink to="/desktop_application_support">
                    Desktop Application Support
                  </RouterLink>
                  <RouterLink to="/network_security_and_design">
                    Network Security and Design
                  </RouterLink>
                  <RouterLink to="/site_surveillance">
                    Site Surveillance
                  </RouterLink>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <span className="navbar-text hide-on-break">| (587) 885-1123 </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavbarServices;
