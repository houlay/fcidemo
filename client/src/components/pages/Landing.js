import React, { Component } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import Title from "../layout/Sections/Title";
import About from "../layout/Sections/About";
import Services from "../layout/Sections/Services";
import Team from "../layout/Sections/Team";
import Clients from "../layout/Sections/Clients";
import Testimonials from "../layout/Sections/Testimonials";
import Contact from "../layout/Sections/Contact";

import Client from "../LiveChat/Client";

export default class Landing extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <Client />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/">
            <img
              src="http://www.fiala.ca/wp-content/uploads/2016/04/cropped-EF-Colour-5thickD.png"
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
              </li>
              <li className="nav-item">
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
            <span class="navbar-text hide-on-break">| (587) 885-1123 </span>
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
