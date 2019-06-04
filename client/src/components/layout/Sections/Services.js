import React, { Component } from "react";

import serverPic from "../../../img/server-administration.png";
import windowsPic from "../../../img/windows-administration.png";
import linuxPic from "../../../img/linux-administration.png";
import desktopPic from "../../../img/desktop-app-support.png";
import networkPic from "../../../img/network-security.png";
import sitePic from "../../../img/site-surveillance.png";

export default class Services extends Component {
  state = {
    toggleModal1: "modal service-modal d-none",
    toggleModal2: "modal service-modal d-none",
    toggleModal3: "modal service-modal d-none",
    toggleModal4: "modal service-modal d-none",
    toggleModal5: "modal service-modal d-none",
    toggleModal6: "modal service-modal d-none"
  };

  clickToShow1 = () => {
    this.setState({
      toggleModal1: "modal serivice-modal d-block"
    });
  };
  clickToShow2 = () => {
    this.setState({
      toggleModal2: "modal serivice-modal d-block"
    });
  };
  clickToShow3 = () => {
    this.setState({
      toggleModal3: "modal serivice-modal d-block"
    });
  };
  clickToShow4 = () => {
    this.setState({
      toggleModal4: "modal serivice-modal d-block"
    });
  };
  clickToShow5 = () => {
    this.setState({
      toggleModal5: "modal serivice-modal d-block"
    });
  };
  clickToShow6 = () => {
    this.setState({
      toggleModal6: "modal serivice-modal d-block"
    });
  };
  clickToHide = () => {
    this.setState({
      toggleModal1: "modal service-modal d-none",
      toggleModal2: "modal service-modal d-none",
      toggleModal3: "modal service-modal d-none",
      toggleModal4: "modal service-modal d-none",
      toggleModal5: "modal service-modal d-none",
      toggleModal6: "modal service-modal d-none"
    });
  };

  render() {
    return (
      <div>
        <div className="content-section" id="services">
          <div className="container text-center">
            <div className="content-section-heading service-title">
              <h3 className="mb-0">Services</h3>
              <h2 className="mb-5">What We Offer</h2>
            </div>
            <div className="row justify-content-around">
              <div className="col-4 col-lg-3 col-sm-3 mb-5 mb-lg-5 service-box animated fadeInLeft delay-1s">
                <span className="service-icon mx-auto mb-3">
                  <img src={serverPic} alt="Server Administration" />
                </span>
                <div className="service-name">
                  <h4 className="resize-on-break">
                    <strong>Server Administration</strong>
                  </h4>
                </div>
                <p className="hide-on-break service-desc">
                  You've got servers, we've got experts! You need servers, we've
                  got servers!…
                </p>
                <div className="learn-more" onClick={this.clickToShow1}>
                  <span className="icon-box-link">
                    Learn more
                    <i className="far fa-arrow-alt-circle-right" />
                  </span>
                </div>
              </div>
              <div className="col-4 col-lg-3 col-sm-3 mb-5 mb-lg-5 service-box animated fadeInDown delay-1s">
                <span className="service-icon mx-auto mb-3">
                  <img src={windowsPic} alt="Windows Administration" />
                </span>
                <div className="service-name">
                  <h4 className="resize-on-break">
                    <strong>Windows Administration</strong>
                  </h4>
                </div>
                <p className="hide-on-break service-desc">
                  Windows desktops, servers, devices, we handle them all! We
                  have 20+ years…
                </p>
                <div className="learn-more" onClick={this.clickToShow2}>
                  <span className="icon-box-link">
                    Learn more
                    <i className="far fa-arrow-alt-circle-right" />
                  </span>
                </div>
              </div>
              <div className="col-4 col-lg-3 col-sm-3 mb-5 mb-lg-5 service-box animated fadeInRight delay-1s">
                <span className="service-icon mx-auto mb-3">
                  <img src={linuxPic} alt="Linux Administration" />
                </span>
                <div className="service-name">
                  <h4 className="resize-on-break">
                    <strong>Linux Administration</strong>
                  </h4>
                </div>
                <p className="hide-on-break service-desc">
                  Linux, UNIX and Open Source systems, no problem! Our
                  specialists can assist…
                </p>
                <div className="learn-more" onClick={this.clickToShow3}>
                  <span className="icon-box-link">
                    Learn more
                    <i className="far fa-arrow-alt-circle-right" />
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-4 col-lg-3 col-sm-3 mb-5 mb-lg-5 service-box animated fadeInLeft delay-1s">
                <span className="service-icon mx-auto mb-3">
                  <img src={desktopPic} alt="Desktop Application Support" />
                </span>
                <div className="service-name">
                  <h4 className="resize-on-break">
                    <strong>Desktop Application Support</strong>
                  </h4>
                </div>
                <p className="hide-on-break service-desc">
                  End-user desktop and application support, our qualified staff
                  can assist your users…
                </p>
                <div className="learn-more" onClick={this.clickToShow4}>
                  <span className="icon-box-link">
                    Learn more
                    <i className="far fa-arrow-alt-circle-right" />
                  </span>
                </div>
              </div>
              <div className="col-4 col-lg-3 col-sm-3 mb-5 mb-lg-5 service-box animated fadeInUp delay-1s">
                <span className="service-icon mx-auto mb-3">
                  <img src={networkPic} alt="Network Security and Design" />
                </span>
                <div className="service-name">
                  <h4 className="resize-on-break">
                    <strong>Network Security and Design</strong>
                  </h4>
                </div>
                <p className="hide-on-break service-desc">
                  Resilient networks and connectivity are fundamental needs for
                  today's business. We have…
                </p>
                <div className="learn-more" onClick={this.clickToShow5}>
                  <span className="icon-box-link">
                    Learn more
                    <i className="far fa-arrow-alt-circle-right" />
                  </span>
                </div>
              </div>
              <div className="col-4 col-lg-3 col-sm-3 mb-5 mb-lg-5 service-box animated fadeInRight delay-1s">
                <span className="service-icon mx-auto mb-3">
                  <img src={sitePic} alt="Site Surveillance" />
                </span>
                <div className="service-name">
                  <h4 className="resize-on-break">
                    <strong>Site Surveillance</strong>
                  </h4>
                </div>
                <p className="hide-on-break service-desc">
                  Physical site security is important for all businesses. IP
                  surveillance is a…
                </p>
                <div className="learn-more" onClick={this.clickToShow6}>
                  <span className="icon-box-link">
                    Learn more
                    <i className="far fa-arrow-alt-circle-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-container">
          <div className={this.state.toggleModal1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="service-title">Server Administration</h3>
                  <div className="service-description">
                    <p>
                      You’ve got servers, we’ve got experts! You need servers,
                      we’ve got servers!
                    </p>
                    <p>
                      Our experts have worked with a wide variety of servers,
                      domain controllers, database servers, key licensing
                      servers, application servers, custom-solutions… the list
                      goes on.
                    </p>
                    <p>
                      Our <strong>custom domain controller</strong> replaces all
                      functionalities of a traditional Windows server without
                      the prohibitive costs typically associated with server
                      license acquisition or per user costs. We have customized
                      the hardware for this offering, leveraging commodity
                      hardware rather than expensive rack-mount servers, we can
                      ensure lower up front costs, quicker time to resolution,
                      and better availability for replacement parts. Domain
                      level management is performed with standard windows
                      management tools and can be performed in-house or let us
                      do the work with our fully-managed service.
                    </p>
                    <p>We also provide other server related offerings:</p>
                    <ul>
                      <li>
                        Leveraging <strong>virtual machines</strong>, we are
                        able to fit more functionality into a smaller footprint
                        while maintaining perfect isolation between machines.
                      </li>
                      <li>
                        Our virtualization service is a great way to refresh
                        hardware without the need for rebuilding complex server
                        architectures.
                      </li>
                      <li>
                        Phone / PBX servers, increase the functionality of your
                        phone system by leveraging VOIP
                      </li>
                      <li>Cloud, offsite, and remote servers</li>
                      <li>
                        Regular maintenance, security updates, and emergency
                        repairs
                      </li>
                      <li>Auditing</li>
                    </ul>
                  </div>
                  <div className="close-icon">
                    <i
                      className="fas fa-times-circle fa-3x"
                      onClick={this.clickToHide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-container">
          <div className={this.state.toggleModal2}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="service-title">Windows Administration</h3>
                  <div className="service-description">
                    <p>
                      Windows desktops, servers, devices, we handle them all!
                    </p>
                    <p>
                      We have 20+ years experience working with various versions
                      of the Windows Server and Windows Desktop operating
                      systems. Our experts can assist with a number of different
                      particularities of your Windows Server 2012, Windows
                      Server 2008, Windows Server 2003, Windows Server 2000, and
                      Windows NT systems: initial setup, regular maintenance,
                      troubleshooting, and security audits.
                    </p>
                    <p>
                      Our services include but are not limited to the following:
                    </p>
                    <ul>
                      <li>
                        Active Directory setup, implementation, maintenance, and
                        integration with other applications
                      </li>
                      <li>Exchange Mail Server</li>
                      <li>
                        Microsoft SQL Server – installation, migration,
                        streamlining, scheduled backups, etc.
                      </li>
                      <li>Remote user connectivity (VPNs, Citrix, etc)</li>
                      <li>Desktop Virtualization</li>
                      <li>System backup and recovery</li>
                      <li>Anti-virus and anti-spam</li>
                      <li>Security compliance audits</li>
                    </ul>
                  </div>
                  <div className="close-icon">
                    <i
                      className="fas fa-times-circle fa-3x"
                      onClick={this.clickToHide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-container">
          <div className={this.state.toggleModal3}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="service-title">Linux Administration</h3>
                  <div className="service-description">
                    <p>
                      Linux, UNIX and Open Source systems, no problem! Our
                      specialists can assist in all phases of the design,
                      implementation, and maintenance of your Linux, UNIX and
                      Open Source infrastructure.
                    </p>
                    <p>
                      Whether you require domain management solutions, a LAMP
                      (Linux / Apache / MySQL / PHP) server to host your
                      corporate website, file and printer serving, network
                      security solutions, an independent / third-party audit, or
                      other, we can tailor an Open Source solution to meet your
                      specific requirements.
                    </p>
                    <p>
                      FCI IT Services can assist in all aspects of the
                      following:
                    </p>
                    <ul>
                      <li>
                        E-Mail server, enterprise spam protection and
                        transparent e-mail archiving
                      </li>
                      <li>
                        Web server implementation, configuration and scaling
                      </li>
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
                  <div className="close-icon">
                    <i
                      className="fas fa-times-circle fa-3x"
                      onClick={this.clickToHide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-container">
          <div className={this.state.toggleModal4}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="service-title">Desktop Application Support</h3>
                  <div className="service-description">
                    <p>
                      End-user desktop and application support, our qualified
                      staff can assist your users on a variety of platforms.
                      From Windows, to MAC and Linux desktops, FCI IT Services
                      Ltd. can untangle, troubleshoot and assist in all
                      varieties of desktop support.
                    </p>
                    <p>
                      Let us assist you in performing general desktop
                      maintenance, removing spyware, viruses and other
                      malignancies allowing you a more enjoyable end-user
                      experience.
                    </p>
                    <p>
                      FCI IT Services Ltd. an assist with desktop support on the
                      following platforms:
                    </p>
                    <ul>
                      <li>
                        Windows (10 / 8 / 7 / Vista / XP / 2000 / 98 / 95 / NT)
                      </li>
                      <li>
                        Most UNIX / Linux distributions (Ubuntu, Red Hat,
                        CentOS, Debian, BSD, etc.)
                      </li>
                      <li>MAC (OS X / 9 / 8)</li>
                    </ul>
                    <p>
                      We also offer support of various applications. Here are
                      some of the packages for which we can offer specialized
                      software assistance:
                    </p>
                    <ul>
                      <li>
                        Office suites (Microsoft Office, OpenOffice,
                        WordPerfect, etc)
                      </li>
                      <li>
                        Email clients (Outlook, Outlook Express, Thunderbird,
                        etc)
                      </li>
                      <li>Antivirus, anti-spam and anti-spyware – various</li>
                      <li>Accounting packages</li>
                      <li>AutoCAD and other 2D/3D design packages</li>
                      <li>
                        Graphic design packages (Adobe Photoshop, ImageReady)
                      </li>
                      <li>Collaborative software</li>
                    </ul>
                  </div>
                  <div className="close-icon">
                    <i
                      className="fas fa-times-circle fa-3x"
                      onClick={this.clickToHide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-container">
          <div className={this.state.toggleModal5}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="service-title">Network Security and Design</h3>
                  <div className="service-description">
                    <p>
                      Resilient networks and connectivity are fundamental needs
                      for today’s business.
                    </p>
                    <p>
                      We have implemented many networks from the ground up –
                      from small home file-and-print networks to larger
                      enterprise-class networks we can assist your venture in
                      promoting a secure networking environment and making the
                      right choices.
                    </p>
                    <p>
                      Working with you, we can find a suitable custom solution
                      that will meet the uptime and stability requirements of
                      your organization.
                    </p>
                    <p>Our networking services include:</p>
                    <ul>
                      <li>
                        Disaster Recovery and Business Resumption Planning:
                        prevent the loss of information and downtime in light of
                        a disaster situation
                      </li>
                      <li>Audits and Assessments</li>
                      <li>Network Architecture design and planning</li>
                      <li>Load-balancing</li>
                      <li>Intrusion detection</li>
                      <li>
                        End-user limitations (firewalls, port restrictions, etc)
                      </li>
                      <li>
                        Custom wireless network applications (setup,
                        implementation and support)
                      </li>
                      <li>Physical network / server room cleanup</li>
                      <li>Remote user access (VPNs, Citrix)</li>
                    </ul>
                  </div>
                  <div className="close-icon">
                    <i
                      className="fas fa-times-circle fa-3x"
                      onClick={this.clickToHide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-container">
          <div className={this.state.toggleModal6}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="service-title">Site Surveillance</h3>
                  <div className="service-description">
                    <p>
                      Physical site security is important for all businesses. IP
                      surveillance is a proactive step towards a secure
                      environment and with the advancement of video technology
                      there are many high-quality options available.
                    </p>
                    <p>
                      By leveraging existing network infrastructure and
                      Power-over-Ethernet (PoE) capabilities we are able to
                      provide reasonably priced options for any budget.
                    </p>
                    <p>Our experienced team can provide:</p>
                    <ul>
                      <li>Site survey and security assessment</li>
                      <li>Physical installation – both indoor and outdoor</li>
                      <li>
                        Surveillance server software installation and
                        customization
                      </li>
                      <li>Custom schedules, retention periods</li>
                      <li>Offsiting</li>
                    </ul>
                  </div>
                  <div className="close-icon">
                    <i
                      className="fas fa-times-circle fa-3x"
                      onClick={this.clickToHide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
