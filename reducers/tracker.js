import * as types from "../constants/ActionTypes";

const initialState = {
  trackerId: "default-replace-me",
  latitude: 37.8719,
  longitude: -122.258,
};

export default function tracker(state = initialState, action) {
    if(isNaN(state.latitude)) {
      console.error("Turned to NaN latlon");
    }
    switch(action.type) {
        case types.SET_LOCATION:
            return { trackerId: state.trackerId, latitude: action.latitude, longitude: action.longitude };
        case types.SET_TRACKER_ID:
            return { ...state, trackerId: action.trackerId };
        default:
            return state;
    }
}
