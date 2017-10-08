import * as types from "../constants/ActionTypes";

const initialState = {
    events: {}, //hashmap of event entities indexed by ID
    tweets: {}, //hashmap of tweet entities indexed by ID
};

export default function entities(state = initialState, action) {
    switch(action.type) {
        case types.ADD_EVENT:
            return { ...state, events: { ...state.events, [action.e.name]: action.e } };
        default:
            return state;
    }
}
