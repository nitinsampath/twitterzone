import * as types from "../constants/ActionTypes";
import {API_URL} from "../constants/config";
import {addAlert} from "../actions/AlertActions";
import fetch2 from "../utils/fetch2";

export function fetchEvents() {
  return (dispatch, getState) => {
    const { tracker } = getState();
    const { trackerId } = tracker;
    console.log(API_URL);
    fetch2(API_URL + "getEvents", {
      method: "GET",
      queryParams: {
        trackerId
      }
    }).then((res) => {
      return res.json();
    }).then((json) => {
      dispatch(receiveEvents(json));
    }).catch((err) => {
      console.log("Error fetching events from API", err);
    });
  };
}

/*
Receives all events and handles each one individually.
*/
export function receiveEvents(events) {
  return dispatch => {
    Object.keys(events).forEach((eventName) => {
      dispatch(consumeEvent(events[eventName]));
    });
  };
}

/*
Reads in an event object and adds the event to the events list,
spits out an event alert notification, and assigns an ID to the event in the event set.
*/
export function consumeEvent(e) {
  return dispatch => {
    dispatch(addEvent(e));
    dispatch(addAlert(e));
  };
}

/*
Adds the event to the set of events.
DUMB ACTION. "add", "set", etc. are typically DUMB.
*/
export function addEvent(e) {
  return {
    type: types.ADD_EVENT,
    e,
  };
}
