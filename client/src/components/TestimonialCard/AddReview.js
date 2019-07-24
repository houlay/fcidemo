import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTestimonial } from "../../actions/testimonial";
import Alert from "../layout/Alert";

const AddReview = ({ addTestimonial, history }) => {
  const [formData, setFormData] = useState({
    client: "",
    company: "",
    email: "",
    comment: "",
    approved: false,
    showHideModal: "modal fade"
  });

  const { client, company, email, comment, showHideModal } = formData;

  const closeModal = () => {
    setFormData({ ...formData, showHideModal: "modal fade" });
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="review-modal-container">
        <div
          className={showHideModal}
          id="review-modal"
          role="dialog"
          aria-labelledby="review-modal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <Alert />

                <h3 className="review-title hide-on-break">
                  Please leave us a review
                </h3>
                <div className="review-description">
                  <h5>Let us know how did we do</h5>
                </div>
                <form
                  className="mt-3"
                  onSubmit={e => {
                    e.preventDefault();
                    addTestimonial(formData, history);
                    closeModal();
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      className="form-control"
                      id="inputName"
                      placeholder="Please provide your full name"
                      name="client"
                      value={client}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputCompany">Company</label>
                    <input
                      className="form-control"
                      id="inputCompany"
                      placeholder="Please provide your company name"
                      name="company"
                      value={company}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Please provide your email"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comment">Your comment</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                      name="comment"
                      value={comment}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>

                  <input type="reset" className="btn btn-danger mb-1" />
                  <input type="submit" className="btn btn-secondary mb-3" />
                </form>
                <div className="close-icon">
                  <i
                    className="fas fa-times-circle fa-3x"
                    data-dismiss="modal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddReview.propTypes = {
  addTestimonial: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTestimonial }
)(AddReview);
