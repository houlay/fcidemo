import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_USERS,
  USER_ERROR,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER
} from "./types";

// Get users
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get("/api/users");

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Register a user
export const addUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(`/api/users`, formData, config);

    dispatch({
      type: ADD_USER,
      payload: res.data
    });

    dispatch(setAlert("User account has been registered", "success"));
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: "err.response.statusText" }
    });
  }
};

// Delete a user
export const deleteUser = id => async dispatch => {
  try {
    await axios.delete(`/api/users/${id}`);

    dispatch({
      type: DELETE_USER,
      payload: id
    });

    dispatch(setAlert("User account has been deleted!", "success"));
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update a user
