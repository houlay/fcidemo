import React from "react";
import serverPic from "../../../img/server-administration.png";
import windowsPic from "../../../img/windows-administration.png";
import linuxPic from "../../../img/linux-administration.png";
import desktopPic from "../../../img/desktop-app-support.png";
import networkPic from "../../../img/network-security.png";
import sitePic from "../../../img/site-surveillance.png";

const Services = () => {
  return (
    <div>
      <div className="content-section" id="services">
        <div className="container text-center">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Services</h3>
            <h2 className="mb-5">What We Offer</h2>
          </div>
          <div className="row justify-content-around">
            <div className="col-4 col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={serverPic} alt="Server Administration" />
              </span>
              <h4 className="resize-on-break">
                <strong>Server Administration</strong>
              </h4>
              <p className="hide-on-break">
                You've got servers, we've got experts! You need servers, we've
                got servers!…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-4 col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={windowsPic} alt="Windows Administration" />
              </span>
              <h4 className="resize-on-break">
                <strong>Windows Administration</strong>
              </h4>
              <p className="hide-on-break">
                Windows desktops, servers, devices, we handle them all! We have
                20+ years…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-4 col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={linuxPic} alt="Linux Administration" />
              </span>
              <h4 className="resize-on-break">
                <strong>Linux Administration</strong>
              </h4>
              <p className="hide-on-break">
                Linux, UNIX and Open Source systems, no problem! Our specialists
                can assist…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-4 col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={desktopPic} alt="Desktop Application Support" />
              </span>
              <h4 className="resize-on-break">
                <strong>Desktop Application Support</strong>
              </h4>
              <p className="hide-on-break">
                End-user desktop and application support, our qualified staff
                can assist your users…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-4 col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={networkPic} alt="Network Security and Design" />
              </span>
              <h4 className="resize-on-break">
                <strong>Network Security and Design</strong>
              </h4>
              <p className="hide-on-break">
                Resilient networks and connectivity are fundamental needs for
                today's business. We have…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-4 col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={sitePic} alt="Site Surveillance" />
              </span>
              <h4 className="resize-on-break">
                <strong>Site Surveillance</strong>
              </h4>
              <p className="hide-on-break">
                Physical site security is important for all businesses. IP
                surveillance is a…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
