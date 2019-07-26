import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteUser } from "../../../actions/user";

const UserCard = ({
  updateUser,
  deleteUser,
  user: { _id, name, email, level, date }
}) => {
  return (
    <Fragment>
      <a
        href="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{name}</h5>
          <small>
            Registered at: <Moment format="YYYY/MM/DD">{date}</Moment>
          </small>
        </div>
        <p className="mb-1">Username: {email}</p>
        <p className="mb-1">Account Level: {level}</p>
        <br />
        <button
          onClick={e => updateUser(_id)}
          type="button"
          className="btn btn-success mr-1"
        >
          <i className="fas fa-check mr-1" />
          Edit
        </button>
        <button
          onClick={e => deleteUser(_id)}
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

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteUser }
)(UserCard);
