import * as types from "../constants/ActionTypes";
import {API_URL} from "../constants/config";
import fetch2 from "../utils/fetch2";
import { Permissions, Notifications } from 'expo';


import {fetchEvents, receiveEvents} from "../actions/EventActions";

export function initTracker(notificationcallback) {
  return async (dispatch, getState) => {
    //   const { status: existingStatus } = await Permissions.getAsync(
    //   Permissions.NOTIFICATIONS
    // );
    // let finalStatus = existingStatus;
    //
    // // only ask if permissions have not already been determined, because
    // // iOS won't necessarily prompt the user a second time.
    // if (existingStatus !== 'granted') {
    //   // Android remote notification permissions are granted during the app
    //   // install, so this will only ask on iOS
    //   const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //   finalStatus = status;
    // }
    //
    // // Stop here if the user did not grant permissions
    // if (finalStatus !== 'granted') {
    //   return;
    // }

    const { tracker } = getState();
    const { latitude, longitude } = tracker;
    //let token = await Notifications.getExpoPushTokenAsync();


    fetch2(API_URL + "addTracker", {
      queryParams: {
        latitude,
        longitude,
        token,
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
    //Notifications.addListener(notificationcallback);
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
