import tabReducer from "./tab";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tab: tabReducer
});

export default rootReducer;
