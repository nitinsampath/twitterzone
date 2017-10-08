import * as types from "../constants/ActionTypes";

/*
Adds an alert for the event e. DUMB.
*/
export function addAlert(e) {
  return {
    type: types.ADD_ALERT,
    name: e.name,
  };
}

/*
Pops an alert from the alert stack. DUMB.
*/
export function popAlert() {
  return {
    type: types.POP_ALERT
  };
}
