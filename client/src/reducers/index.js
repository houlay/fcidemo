import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import testimonial from "./testimonial";

export default combineReducers({
  alert,
  auth,
  testimonial
});
