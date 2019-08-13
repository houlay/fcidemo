import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../../../actions/user";
import Alert from "../../../components/layout/Alert";

const AddUser = ({ addUser, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    level: "",
    showHideModal: "modal fade"
  });

  const { name, email, password, level, showHideModal } = formData;

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
          id="user-modal"
          role="dialog"
          aria-labelledby="user-modal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <Alert />

                <h3 className="review-title hide-on-break">
                  Register a new user
                </h3>
                <div className="review-description">
                  <h5>Fill out the following information</h5>
                </div>
                <form
                  className="mt-3"
                  onSubmit={e => {
                    e.preventDefault();
                    addUser(formData, history);
                    closeModal();
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      className="form-control"
                      id="inputName"
                      placeholder="Enter the user's full name"
                      name="name"
                      value={name}
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
                      placeholder="Enter the user's email address"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      aria-describedby="emailHelp"
                      placeholder="Enter the user's password"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputEmail">Access level</label>
                    <input
                      className="form-control"
                      id="inputLevel"
                      aria-describedby="emailHelp"
                      placeholder="Enter the user's level (admin / client)"
                      name="level"
                      value={level}
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

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addUser }
)(AddUser);
