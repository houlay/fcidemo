import React from "react";

const Title = () => {
  return (
    <div>
      <div className="content-section" id="title">
        {/* <div className="title-bar">
          <div className="contact-info-title-page hide-on-break">
            <div className="mb-3">
              <i className="fas fa-home" />
              <span>2801 26 ST SW Calgary AB</span>
            </div>
            <div className="mb-3">
              <i className="fas fa-envelope" />
              <span>it@fiala.ca</span>
            </div>
            <div className="mb-3">
              <i className="fas fa-phone" />
              <span>1 (587) 885-1123</span>
            </div>
          </div>
        </div> */}
        <div className="overlay-left" />
        <div className="overlay-right" />
        <div className="container text-center">
          <div className="content-section-heading">
            <div className="title-phrase">
              <h3>Are you ready for</h3>
              <span id="line" />
              <span>SIMPLE SOLUTIONS</span>
              <br />
              <span>STEADFAST SUPPORT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
