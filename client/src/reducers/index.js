import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import testimonial from "./testimonial";
import user from "./user";

export default combineReducers({
  alert,
  auth,
  testimonial,
  user
});
