import * as types from "../constants/ActionTypes";

const initialState = {
  trackerId: "default-replace-me",
  latitude: 0.0,
  longitude: 0.0,
};

export default function tracker(state = initialState, action) {
    switch(action.type) {
        case types.SET_LOCATION:
            return { trackerId: state.trackerId, latitude: action.latitude, longitude: action.longitude };
        case types.SET_TRACKER_ID:
            return { ...state, trackerId: action.trackerId };
        default:
            return state;
    }
}
