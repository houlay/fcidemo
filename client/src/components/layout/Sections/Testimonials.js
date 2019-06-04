import React from "react";
import TestimonialCard from "../../TestimonialCard";

const Testimonials = () => {
  return (
    <div>
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
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <TestimonialCard />
              </div>
              <div className="carousel-item">
                <TestimonialCard />{" "}
              </div>
              <div className="carousel-item">
                <TestimonialCard />{" "}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
