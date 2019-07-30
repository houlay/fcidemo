import React from "react";
import Client from "../LiveChat/Client";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";

import Contact from "../layout/Sections/Contact";
import NavbarServices from "../layout/NavbarServices";

const NetworkSecurity = () => {
  return (
    <div>
      <Helmet>
        <title>Network Security and Desgin - FCI IT Services</title>
        <meta
          name="description"
          content="Resilient networks and connectivity are fundamental needs for today’s business. We have implemented many networks from the ground up – from small home file-and-print networks to larger enterprise-class networks we can assist your venture in promoting a secure networking environment and making the right choices."
        />
      </Helmet>
      <Client />
      <NavbarServices />
      <Element name="services" className="element">
        <div className="content-section" id="servicesinfo">
          <div className="container">
            <h3 className="service-title text-center pt-3">
              Network Security and Design
            </h3>
            <div className="service-description">
              <p>
                Resilient networks and connectivity are fundamental needs for
                today’s business.
              </p>
              <p>
                We have implemented many networks from the ground up – from
                small home file-and-print networks to larger enterprise-class
                networks we can assist your venture in promoting a secure
                networking environment and making the right choices.
              </p>
              <p>
                Working with you, we can find a suitable custom solution that
                will meet the uptime and stability requirements of your
                organization.
              </p>
              <p>Our networking services include:</p>
              <ul>
                <li>
                  Disaster Recovery and Business Resumption Planning: prevent
                  the loss of information and downtime in light of a disaster
                  situation
                </li>
                <li>Audits and Assessments</li>
                <li>Network Architecture design and planning</li>
                <li>Load-balancing</li>
                <li>Intrusion detection</li>
                <li>
                  End-user limitations (firewalls, port restrictions, etc)
                </li>
                <li>
                  Custom wireless network applications (setup, implementation
                  and support)
                </li>
                <li>Physical network / server room cleanup</li>
                <li>Remote user access (VPNs, Citrix)</li>
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

export default NetworkSecurity;
