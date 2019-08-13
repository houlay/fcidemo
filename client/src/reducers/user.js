import {
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_ERROR
} from "../actions/types";

const initialState = {
  userList: [],
  user: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        userList: payload,
        loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(user => user._id !== payload),
        loading: false
      };
    case ADD_USER:
      return {
        userList: [payload, ...state.userList],
        ...state,
        loading: false
      };
    case UPDATE_USER:
      return {};
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
