import React from "react";
import Client from "../LiveChat/Client";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";

import Contact from "../layout/Sections/Contact";
import NavbarServices from "../layout/NavbarServices";

const DesktopAppSupp = () => {
  return (
    <div>
      <Helmet>
        <title>Desktop Application Support - FCI IT Services</title>
        <meta
          name="description"
          content="End-user desktop and application support, our qualified staff can assist your users on a variety of platforms. From Windows, to MAC and Linux desktops, FCI IT Services Ltd. can untangle, troubleshoot and assist in all varieties of desktop support."
        />
      </Helmet>
      <Client />
      <NavbarServices />
      <Element name="services" className="element">
        <div className="content-section" id="servicesinfo">
          <div className="container">
            <h3 className="service-title text-center pt-3">
              Desktop Application Support
            </h3>
            <div className="service-description">
              <p>
                End-user desktop and application support, our qualified staff
                can assist your users on a variety of platforms. From Windows,
                to MAC and Linux desktops, FCI IT Services Ltd. can untangle,
                troubleshoot and assist in all varieties of desktop support.
              </p>
              <p>
                Let us assist you in performing general desktop maintenance,
                removing spyware, viruses and other malignancies allowing you a
                more enjoyable end-user experience.
              </p>
              <p>
                FCI IT Services Ltd. an assist with desktop support on the
                following platforms:
              </p>
              <ul>
                <li>Windows (10 / 8 / 7 / Vista / XP / 2000 / 98 / 95 / NT)</li>
                <li>
                  Most UNIX / Linux distributions (Ubuntu, Red Hat, CentOS,
                  Debian, BSD, etc.)
                </li>
                <li>MAC (OS X / 9 / 8)</li>
              </ul>
              <p>
                We also offer support of various applications. Here are some of
                the packages for which we can offer specialized software
                assistance:
              </p>
              <ul>
                <li>
                  Office suites (Microsoft Office, OpenOffice, WordPerfect, etc)
                </li>
                <li>
                  Email clients (Outlook, Outlook Express, Thunderbird, etc)
                </li>
                <li>Antivirus, anti-spam and anti-spyware – various</li>
                <li>Accounting packages</li>
                <li>AutoCAD and other 2D/3D design packages</li>
                <li>Graphic design packages (Adobe Photoshop, ImageReady)</li>
                <li>Collaborative software</li>
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

export default DesktopAppSupp;
