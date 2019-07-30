import React from "react";
import Client from "../LiveChat/Client";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";

import Contact from "../layout/Sections/Contact";
import NavbarServices from "../layout/NavbarServices";

const ServerAdmin = () => {
  return (
    <div>
      <Helmet>
        <title>
          Server Administration & Custom domain controller- FCI IT Services
        </title>
        <meta
          name="description"
          content="Our custom domain controller replaces all functionalities of a traditional Windows server without the prohibitive costs typically associated with server license acquisition or per user costs. We have customized the hardware for this offering, leveraging commodity hardware rather than expensive rack-mount servers, we can ensure lower up front costs, quicker time to resolution, and better availability for replacement parts."
        />
      </Helmet>
      <Client />
      <NavbarServices />
      <Element name="services" className="element">
        <div className="content-section" id="servicesinfo">
          <div className="container">
            <h3 className="service-title text-center pt-3">
              Server Administration
            </h3>
            <div className="service-description">
              <p>
                You’ve got servers, we’ve got experts! You need servers, we’ve
                got servers!
              </p>
              <p>
                Our experts have worked with a wide variety of servers, domain
                controllers, database servers, key licensing servers,
                application servers, custom-solutions… the list goes on.
              </p>
              <p>
                Our <strong>custom domain controller</strong> replaces all
                functionalities of a traditional Windows server without the
                prohibitive costs typically associated with server license
                acquisition or per user costs. We have customized the hardware
                for this offering, leveraging commodity hardware rather than
                expensive rack-mount servers, we can ensure lower up front
                costs, quicker time to resolution, and better availability for
                replacement parts. Domain level management is performed with
                standard windows management tools and can be performed in-house
                or let us do the work with our fully-managed service.
              </p>
              <p>We also provide other server related offerings:</p>
              <ul>
                <li>
                  Leveraging <strong>virtual machines</strong>, we are able to
                  fit more functionality into a smaller footprint while
                  maintaining perfect isolation between machines.
                </li>
                <li>
                  Our virtualization service is a great way to refresh hardware
                  without the need for rebuilding complex server architectures.
                </li>
                <li>
                  Phone / PBX servers, increase the functionality of your phone
                  system by leveraging VOIP
                </li>
                <li>Cloud, offsite, and remote servers</li>
                <li>
                  Regular maintenance, security updates, and emergency repairs
                </li>
                <li>Auditing</li>
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

export default ServerAdmin;
