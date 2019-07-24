import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import {
  deleteTestimonial,
  approveTestimonial
} from "../../../actions/testimonial";

const ReviewCard = ({
  deleteTestimonial,
  approveTestimonial,
  testimonial: { _id, client, company, comment, email, date, approved }
}) => {
  return (
    <Fragment>
      <a
        href="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {client}, {company}
          </h5>
          <small>
            <Moment format="YYYY/MM/DD">{date}</Moment>
          </small>
        </div>
        <p className="mb-3">{comment}</p>
        <small>Submitted by: {email}</small>
        <br />
        {!approved && (
          <button
            onClick={e => approveTestimonial(_id)}
            type="button"
            className="btn btn-success mr-1"
          >
            <i className="fas fa-check mr-1" />
            Approve
          </button>
        )}
        <button
          onClick={e => deleteTestimonial(_id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times mr-1" />
          Delete
        </button>
      </a>
    </Fragment>
  );
};

ReviewCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
  deleteTestimonial: PropTypes.func.isRequired,
  approveTestimonial: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTestimonial, approveTestimonial }
)(ReviewCard);
