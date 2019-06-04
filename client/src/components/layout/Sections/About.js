import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="content-section" id="about">
          <div className="container text-center">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-lg-5">ABOUT US</h3>
              <div className="card">
                <div className="card-body about-text-area">
                  <p className="mb-lg-5">
                    FCI IT Services Ltd. is a Canadian company with headquarters
                    located in Calgary, Alberta. We provide a wide range of
                    custom computer solutions and managed networking services
                    for Windows and Linux systems.
                  </p>
                  <p className="mb-lg-5">
                    FCI IT Services Ltd. caters to small and medium businesses
                    in all industry segments. Our qualified team can support
                    your computer network and infrastructure as well as tend to
                    all your technical support needs – ultimately leaving you
                    free to do what you do best, run your business!
                  </p>
                  <p className="mb-lg-5">
                    Let us lend you a hand. We pride ourselves in wrangling
                    unruly computer systems, taming your IT infrastructure and
                    alleviating technology-related stress.
                  </p>
                  <p>
                    If system uptime and reliability of your computing
                    environment are mission critical, then give us a call or
                    drop us a note, we can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
