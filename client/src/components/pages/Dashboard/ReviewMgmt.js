import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReviewCard from "./ReviewCard";
import Alert from "../../../components/layout/Alert";
import { getTestimonials } from "../../../actions/testimonial";
import MDSpinner from "react-md-spinner";

const ReviewMgmt = ({
  getTestimonials,
  testimonial: { testimonials, loading }
}) => {
  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  return loading ? (
    <div className="col-xl-12 pt-5 my-auto text-center">
      <MDSpinner size={72} />
    </div>
  ) : (
    <Fragment>
      <div className="list-group">
        <Alert />
        {testimonials.map(testimonial => (
          <ReviewCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </Fragment>
  );
};

ReviewMgmt.propTypes = {
  testimonial: PropTypes.object.isRequired,
  getTestimonials: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  testimonial: state.testimonial
});

export default connect(
  mapStateToProps,
  { getTestimonials }
)(ReviewMgmt);
