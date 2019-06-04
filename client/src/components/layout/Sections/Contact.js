import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    toggleModal: "modal d-none"
  };

  clickToShow = () => {
    this.setState({ toggleModal: "modal d-block" });
  };
  clickToHide = () => {
    this.setState({ toggleModal: "modal d-none" });
  };

  render() {
    return (
      <div>
        <div className="content-section" id="contact">
          <div className="container text-center">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">Contact us</h3>
              <h2 className="mb-5">Not finding what you are looking for?</h2>
            </div>
            <div className="click-me d-block d-sm-none mb-3">
              <button className="btn btn-info" onClick={this.clickToShow}>
                Click me!
              </button>
            </div>

            <div className="contact-info row">
              <div className="col-12 col-lg-4 mb-3">
                <i className="fas fa-home fa-2x" />
                <br />
                <span>2801 26 ST SW Calgary AB</span>
              </div>
              <div className="col-12 col-lg-4 mb-3">
                <i className="fas fa-envelope fa-2x" />
                <br />
                <span>it@fiala.ca</span>
              </div>
              <div className="col-12 col-lg-4 mb-3">
                <i className="fas fa-phone fa-2x" />
                <br />
                <span>1 (587) 885-1123</span>
              </div>
            </div>

            <div className="contact-phrase d-none d-sm-block">
              <div>
                <p>
                  We have a wide range of skills and pride ourselves in
                  supporting anything our clients have required.
                </p>
                <p>
                  If you don't see what you are looking for, please don't
                  hesitate to contact us. We are happy to review your needs and
                  propose next steps.
                </p>
              </div>
            </div>

            <div className="social-networks row">
              <a
                className="col-4 col-lg-4"
                href="https://www.linkedin.com/company/fiala-consulting-inc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-5x" />
              </a>
              <a
                className="col-4 col-lg-4"
                href="https://www.facebook.com/FialaConsultingInc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square fa-5x" />
              </a>
              <a
                className="col-4 col-lg-4"
                href="https://twitter.com/Fiala_IT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square fa-5x" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal-container">
          <div className={this.state.toggleModal}>
            <div className="modal-dialog contact-modal" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <p>
                    We have a wide range of skills and pride ourselves in
                    supporting anything our clients have required.
                  </p>
                  <p>
                    If you don't see what you are looking for, please don't
                    hesitate to contact us. We are happy to review your needs
                    and propose next steps.
                  </p>
                  <i
                    className="fas fa-times-circle fa-2x text-danger mt-2"
                    onClick={this.clickToHide}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
