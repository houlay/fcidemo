import {
  GET_TESTIMONIALS,
  TESTIMONIAL_ERROR,
  ADD_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  APPROVE_TESTIMONIAL
} from "../actions/types";

const initialState = {
  testimonials: [],
  testimonial: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TESTIMONIALS:
      return {
        ...state,
        testimonials: payload,
        loading: false
      };
    case DELETE_TESTIMONIAL:
      return {
        ...state,
        testimonials: state.testimonials.filter(
          testimonial => testimonial._id !== payload
        ),
        loading: false
      };
    case ADD_TESTIMONIAL:
      return {
        testimonials: [payload, ...state.testimonials],
        ...state,
        loading: false
      };
    case APPROVE_TESTIMONIAL:
      return {
        ...state,
        testimonials: state.testimonials.map(testimonial =>
          testimonial._id === payload.id
            ? { ...testimonial, approved: payload.approved }
            : testimonial
        ),
        loading: false
      };
    case TESTIMONIAL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
