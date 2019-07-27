import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";

const TestimonialCard = ({ testimonial: { client, company, comment } }) => {
  return (
    <Fragment>
      <div className="testimonial-container">
        <div className="vertical-center">
          <div className="testimonial-message">
            <p>"{comment}"</p>
          </div>
          <div className="testimonial-by">
            <span>{client}</span>
            <span>- {company}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object.isRequired
};

export default connect()(TestimonialCard);
