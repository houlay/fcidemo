import React from "react";
import "./style.css";
import serverPic from "../../../img/server-administration.png";
import windowsPic from "../../../img/windows-administration.png";
import linuxPic from "../../../img/linux-administration.png";
import desktopPic from "../../../img/desktop-app-support.png";
import networkPic from "../../../img/network-security.png";
import sitePic from "../../../img/site-surveillance.png";

const Sections = () => {
  return (
    <div className="snap" id="sectionDiv">
      <section className="content-section" id="about">
        <div className="container text-center">
          <div className="content-section-heading">
            <h2 className="text-secondary mb-5">ABOUT US</h2>
            <p>
              FCI IT Services Ltd. is a Canadian company with headquarters
              located in Calgary, Alberta. We provide a wide range of custom
              computer solutions and managed networking services for Windows and
              Linux systems.
            </p>
            <p>
              FCI IT Services Ltd. caters to small and medium businesses in all
              industry segments. Our qualified team can support your computer
              network and infrastructure as well as tend to all your technical
              support needs – ultimately leaving you free to do what you do
              best, run your business!
            </p>
            <p>
              Let us lend you a hand. We pride ourselves in wrangling unruly
              computer systems, taming your IT infrastructure and alleviating
              technology-related stress.
            </p>
            <p>
              If system uptime and reliability of your computing environment are
              mission critical, then give us a call or drop us a note, we can
              help.
            </p>
          </div>
        </div>
      </section>
      <div className="content-section" id="services">
        <section className="container text-center">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Services</h3>
            <h2 className="mb-5">What We Offer</h2>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={serverPic} alt="Server Administration" />
              </span>
              <h4>
                <strong>Server Administration</strong>
              </h4>
              <p>
                You've got servers, we've got experts! You need servers, we've
                got servers!…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={windowsPic} alt="Windows Administration" />
              </span>
              <h4>
                <strong>Windows Administration</strong>
              </h4>
              <p>
                Windows desktops, servers, devices, we handle them all! We have
                20+ years…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={linuxPic} alt="Linux Administration" />
              </span>
              <h4>
                <strong>Linux Administration</strong>
              </h4>
              <p>
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
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={desktopPic} alt="Desktop Application Support" />
              </span>
              <h4>
                <strong>Desktop Application Support</strong>
              </h4>
              <p>
                End-user desktop and application support, our qualified staff
                can assist your users…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={networkPic} alt="Network Security and Design" />
              </span>
              <h4>
                <strong>Network Security and Design</strong>
              </h4>
              <p>
                Resilient networks and connectivity are fundamental needs for
                today's business. We have…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <span className="service-icon mx-auto mb-3">
                <img src={sitePic} alt="Site Surveillance" />
              </span>
              <h4>
                <strong>Site Surveillance</strong>
              </h4>
              <p>
                Physical site security is important for all businesses. IP
                surveillance is a…
              </p>
              <a className="icon-box-link" href="#">
                Learn more
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="content-section" id="team">
        <section className="container text-center">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Team</h3>
            <h2 className="mb-5">Meet our IT wizards</h2>
          </div>
        </section>
      </div>
      <div className="content-section" id="clients">
        <section className="container text-center">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Clients</h3>
            <h2 className="mb-5">We have been proudly serving</h2>
          </div>
        </section>
      </div>
      <div className="content-section" id="testimonials">
        <section className="container text-center">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Testimonials</h3>
            <h2 className="mb-5">Check out what others have to say about us</h2>
          </div>
        </section>
      </div>
      <div className="content-section" id="contact">
        <section className="container text-center">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Let's connect</h3>
            <h2 className="mb-5">
              Share your ideas with us and we do our best to turn your ideas
              into reality
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sections;
