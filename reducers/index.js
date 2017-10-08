import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";
import entities from "../reducers/entities";
import alerts from "../reducers/alerts";
import tracker from "../reducers/tracker";

const initialState = {
};

const rootReducer = combineReducers({
    entities,
    tracker,
    alerts,
});

export default rootReducer;
