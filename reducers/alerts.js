import * as types from "../constants/ActionTypes";

const initialState = {
  newAlerts: [], //stack of new alerts (event IDs). as they are read, they are popped off top.
};

export default function alerts(state = initialState, action) {
    switch(action.type) {
        case types.ADD_ALERT:
            return { newAlerts: [...state.newAlerts, action.name] };
        case types.POP_ALERT:
            return { newAlerts: state.newAlerts.slice[0, state.newAlerts.length - 1] }
        default:
            return state;
    }
}
