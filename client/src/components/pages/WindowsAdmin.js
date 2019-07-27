import React from "react";
import Client from "../LiveChat/Client";
import { Element } from "react-scroll";

import Contact from "../layout/Sections/Contact";
import NavbarServices from "../layout/NavbarServices";

const WindowsAdmin = () => {
  return (
    <div>
      <Client />
      <NavbarServices />
      <Element name="services" className="element">
        <div className="content-section" id="servicesinfo">
          <div className="container">
            <h3 className="service-title text-center pt-3">
              Windows Administration
            </h3>
            <div className="service-description">
              <p>Windows desktops, servers, devices, we handle them all!</p>
              <p>
                We have 20+ years experience working with various versions of
                the Windows Server and Windows Desktop operating systems. Our
                experts can assist with a number of different particularities of
                your Windows Server 2012, Windows Server 2008, Windows Server
                2003, Windows Server 2000, and Windows NT systems: initial
                setup, regular maintenance, troubleshooting, and security
                audits.
              </p>
              <p>Our services include but are not limited to the following:</p>
              <ul>
                <li>
                  Active Directory setup, implementation, maintenance, and
                  integration with other applications
                </li>
                <li>Exchange Mail Server</li>
                <li>
                  Microsoft SQL Server – installation, migration, streamlining,
                  scheduled backups, etc.
                </li>
                <li>Remote user connectivity (VPNs, Citrix, etc)</li>
                <li>Desktop Virtualization</li>
                <li>System backup and recovery</li>
                <li>Anti-virus and anti-spam</li>
                <li>Security compliance audits</li>
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

export default WindowsAdmin;
