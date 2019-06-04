import React from "react";
import "./style.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-message">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="testimonial-by">
        <span>- Lester Tester, </span>
        <span>Tester Ltd.</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
