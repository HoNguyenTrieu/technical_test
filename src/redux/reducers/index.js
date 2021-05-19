import leadReducer from "./lead.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  leads: leadReducer,
});

export default reducers;
