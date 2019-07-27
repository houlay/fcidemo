import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTestimonials } from "../../../actions/testimonial";
import TestimonialCard from "../../TestimonialCard";
import AddReview from "../../TestimonialCard/AddReview";

const Testimonials = ({ getTestimonials, testimonial: { testimonials } }) => {
  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  return (
    <Fragment>
      <div className="content-section" id="testimonials">
        <div className="container text-center">
          <div className="content-section-heading section-contrast">
            <h3 className="text-secondary mb-0">Testimonials</h3>
            <h2 className="mb-5">Check out what others have to say about us</h2>
          </div>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-container">
                  <div className="testimonial-message">
                    <p>
                      "FCI IT Services has a knowledgeable team of IT experts
                      who are readily available and always willing to help.
                      During various projects we have pursued over the years,
                      FCI has provided excellent recommendations to accommodate
                      to our needs while providing sincere and efficient
                      service. The FCI team effectively simplifies foreign IT
                      terminology and processes that makes solving IT problems a
                      lot less intimidating and complex. We greatly appreciate
                      the patience and effort FCI has dedicated to us during our
                      long-standing relationship.”
                    </p>
                  </div>
                  <div className="testimonial-by">
                    <span>- Christie, </span>
                    <span>Orion Projects</span>
                  </div>
                </div>
              </div>

              {testimonials
                .filter(testimonials => testimonials.approved)
                .map(testimonial => (
                  <div className="carousel-item">
                    <TestimonialCard
                      key={testimonial._id}
                      testimonial={testimonial}
                    />
                  </div>
                ))}
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <button
            className="btn btn-dark mt-3"
            data-toggle="modal"
            data-target="#review-modal"
          >
            Leave us a review!
          </button>
        </div>
      </div>

      <AddReview />
    </Fragment>
  );
};

Testimonials.propTypes = {
  getTestimonials: PropTypes.func.isRequired,
  testimonial: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  testimonial: state.testimonial
});

export default connect(
  mapStateToProps,
  { getTestimonials }
)(Testimonials);
