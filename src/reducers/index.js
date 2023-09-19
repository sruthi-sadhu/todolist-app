import * as counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

let reducers = Object.assign({},counterReducer, loggedReducer);
const allReducers = combineReducers(reducers);

export default allReducers;