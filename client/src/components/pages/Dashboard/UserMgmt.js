import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import Alert from "../../../components/layout/Alert";
import { getUsers, addUser } from "../../../actions/user";
import MDSpinner from "react-md-spinner";

const UserMgmt = ({ getUsers, addUser, user: { userList, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return loading ? (
    <div className="col-xl-12 pt-5 my-auto text-center">
      <MDSpinner size={72} />
    </div>
  ) : (
    <Fragment>
      <div className="list-group">
        <Alert />
        {userList.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </Fragment>
  );
};

UserMgmt.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers, addUser }
)(UserMgmt);
