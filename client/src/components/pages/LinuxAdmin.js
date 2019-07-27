import React from "react";
import Client from "../LiveChat/Client";
import { Element } from "react-scroll";

import Contact from "../layout/Sections/Contact";
import NavbarServices from "../layout/NavbarServices";

const LinuxAdmin = () => {
  return (
    <div>
      <Client />
      <NavbarServices />
      <Element name="services" className="element">
        <div className="content-section" id="servicesinfo">
          <div className="container">
            <h3 className="service-title text-center pt-3">
              Linux Administration
            </h3>
            <div className="service-description">
              <p>
                Linux, UNIX and Open Source systems, no problem! Our specialists
                can assist in all phases of the design, implementation, and
                maintenance of your Linux, UNIX and Open Source infrastructure.
              </p>
              <p>
                Whether you require domain management solutions, a LAMP (Linux /
                Apache / MySQL / PHP) server to host your corporate website,
                file and printer serving, network security solutions, an
                independent / third-party audit, or other, we can tailor an Open
                Source solution to meet your specific requirements.
              </p>
              <p>FCI IT Services can assist in all aspects of the following:</p>
              <ul>
                <li>
                  E-Mail server, enterprise spam protection and transparent
                  e-mail archiving
                </li>
                <li>Web server implementation, configuration and scaling</li>
                <li>Database design, setup, and optimization</li>
                <li>Domain Name (DNS) management</li>
                <li>Firewalls and security</li>
                <li>File and print servers</li>
                <li>Archiving and backup solutions</li>
                <li>Server-side management scripting</li>
                <li>Automated inventory control and management</li>
                <li>System auditing</li>
                <li>Custom application development</li>
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

export default LinuxAdmin;
