import * as types from "../constants/ActionTypes";
import {API_URL} from "../constants/config";
import fetch2 from "../utils/fetch2";

import {fetchEvents, receiveEvents} from "../actions/EventActions";

export function initTracker() {
  return (dispatch, getState) => {
    const { tracker } = getState();
    const { latitude, longitude } = tracker;

    fetch2(API_URL + "addTracker", {
      queryParams: {
        latitude,
        longitude,
      },
      method: "GET"
    }).then((res) => {
      console.log(res);
      return res.json();
    }).then((json) => {
      const { trackerId } = json;
      dispatch(setTrackerId(trackerId));

      // Fetch any event updates after setting the tracker ID.
      // NOTE: For now just testing minimum api updates.
      // later we would like the establish a streaming connection to server
      // where the server pushes event notifications to this app.

      dispatch(fetchEvents());
    }).catch((err) => {
      console.log("Error initializing tracker with API", err);
    });
  };
}

export function setLocation(latitude, longitude) {
  return {
    type: types.SET_LOCATION,
    latitude,
    longitude,
  };
}

export function setTrackerId(trackerId) {
  return {
    type: types.SET_TRACKER_ID,
    trackerId,
  };
}
