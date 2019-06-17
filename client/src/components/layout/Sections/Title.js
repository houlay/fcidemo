import React from "react";

const Title = () => {
  return (
    <div className="content-section title" id="title">
      <div className="overlay-left" />
      <div className="overlay-right" />
      <div className="container text-center">
        <div className="content-section-heading">
          <div className="title-phrase">
            <h3 className="animated zoomIn delay-1s">Are you ready for</h3>
            <span className="animated zoomIn delay-1s" id="line" />
            <span className="animated zoomIn delay-2s">SIMPLE SOLUTIONS</span>
            <br />
            <span className="animated zoomIn delay-3s">STEADFAST SUPPORT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
