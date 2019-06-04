import React, { Component } from "react";
import Scrollchor from "react-scrollchor";

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              Navbar
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <Scrollchor className="nav-link active" to="#clients">
                    Clients
                  </Scrollchor>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#team">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
