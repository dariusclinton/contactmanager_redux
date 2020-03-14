import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer.js";

export default combineReducers({
  contact: contactReducer,
  user: userReducer
});
