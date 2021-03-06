import React, { Component } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import Title from "../layout/Sections/Title";
import About from "../layout/Sections/About";
import Services from "../layout/Sections/Services";
import Team from "../layout/Sections/Team";
import Clients from "../layout/Sections/Clients";
import Testimonials from "../layout/Sections/Testimonials";
import Contact from "../layout/Sections/Contact";

import Client from "../LiveChat/Client";

import fci_logo from "../../img/fci-logo.png";

export default class Landing extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            FCI IT Services - Calgary Managed IT Services For Small and Medium
            Sized Businesses
          </title>
          <meta
            name="description"
            content="FCI IT Services Ltd. caters to small and medium businesses in all industry segments. Our qualified team can support your computer network and infrastructure as well as tend to all your technical support needs – ultimately leaving you free to do what you do best, run your business!"
          />
        </Helmet>
        <Client />
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
              <li className="nav-item dropdown-menu-custom">
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
                {/* <div className="padder">
                  <div className="dropdown-content hide-on-break">
                    <RouterLink to="/test1">Why choose us</RouterLink>
                    <RouterLink to="/test2">The FCI approach</RouterLink>
                  </div>
                </div> */}
              </li>
              <li className="nav-item dropdown-menu-custom">
                <Link
                  className="nav-link"
                  to="services"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
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
                  to="team"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="clients"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="testimonials"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Testimonials
                </Link>
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

        <Element name="title" className="element">
          <Title />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="services" className="element">
          <Services />
        </Element>
        <Element name="team" className="element">
          <Team />
        </Element>
        <Element name="clients" className="element">
          <Clients />
        </Element>
        <Element name="testimonials" className="element">
          <Testimonials />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}
