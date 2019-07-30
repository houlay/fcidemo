import React from "react";
import Client from "../LiveChat/Client";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";

import Contact from "../layout/Sections/Contact";
import NavbarServices from "../layout/NavbarServices";

const SiteSurveillance = () => {
  return (
    <div>
      <Helmet>
        <title>Site Surveillance - FCI IT Services</title>
        <meta
          name="description"
          content="Physical site security is important for all businesses. IP surveillance is a proactive step towards a secure environment and with the advancement of video technology there are many high-quality options available. By leveraging existing network infrastructure and Power-over-Ethernet (PoE) capabilities we are able to provide reasonably priced options for any budget."
        />
      </Helmet>
      <Client />
      <NavbarServices />
      <Element name="services" className="element">
        <div className="content-section" id="servicesinfo">
          <div className="container">
            <h3 className="service-title text-center pt-3">
              Site Surveillance
            </h3>
            <div className="service-description">
              <p>
                Physical site security is important for all businesses. IP
                surveillance is a proactive step towards a secure environment
                and with the advancement of video technology there are many
                high-quality options available.
              </p>
              <p>
                By leveraging existing network infrastructure and
                Power-over-Ethernet (PoE) capabilities we are able to provide
                reasonably priced options for any budget.
              </p>
              <p>Our experienced team can provide:</p>
              <ul>
                <li>Site survey and security assessment</li>
                <li>Physical installation – both indoor and outdoor</li>
                <li>
                  Surveillance server software installation and customization
                </li>
                <li>Custom schedules, retention periods</li>
                <li>Offsiting</li>
              </ul>
            </div>
          </div>
        </div>
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
};

export default SiteSurveillance;
