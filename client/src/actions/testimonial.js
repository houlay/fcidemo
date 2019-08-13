import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_TESTIMONIALS,
  TESTIMONIAL_ERROR,
  ADD_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  APPROVE_TESTIMONIAL
} from "./types";

// Get testimonials
export const getTestimonials = () => async dispatch => {
  try {
    const res = await axios.get("/api/testimonials");

    dispatch({
      type: GET_TESTIMONIALS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TESTIMONIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a testimonial
export const addTestimonial = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(`/api/testimonials`, formData, config);

    dispatch({
      type: ADD_TESTIMONIAL,
      payload: res.data
    });

    dispatch(
      setAlert("Thank you! We have received your valued opinion!", "success")
    );
  } catch (err) {
    dispatch({
      type: TESTIMONIAL_ERROR,
      payload: { msg: "err.response.statusText" }
    });
  }
};

// Delete a testimonial
export const deleteTestimonial = id => async dispatch => {
  try {
    await axios.delete(`/api/testimonials/${id}`);

    dispatch({
      type: DELETE_TESTIMONIAL,
      payload: id
    });

    dispatch(setAlert("Review has been deleted!", "success"));
  } catch (err) {
    dispatch({
      type: TESTIMONIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Approve a testimonial
export const approveTestimonial = id => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    await axios.post(`/api/testimonials/${id}`, { approved: true }, config);

    dispatch({
      type: APPROVE_TESTIMONIAL,
      payload: { id, approved: true }
    });

    dispatch(
      setAlert(
        "Review has been approved and will show up on the frontpage!",
        "success"
      )
    );
  } catch (err) {
    dispatch({
      type: TESTIMONIAL_ERROR,
      payload: { msg: "err.response.statusText" }
    });
  }
};
