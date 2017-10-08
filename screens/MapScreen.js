import React from 'react';
import { connect } from "react-redux";
import { initTracker } from "../actions/TrackerActions";
import MapScreenView from "../components/MapScreenView";

/*
PROPS.
{
  alerts: {
    newAlerts: arrayOf(STRING)  - String names (unique identifiers) of events.
  }
  entities: {
    events: setOf(EVENT OBJECT) - Collection of extant events. Use event names to get events.

  }
}



*/


class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    // initialize key state stuff
    dispatch(initTracker());
  }
  render() {
    return (
      <MapScreenView {...this.props} />
    );
  }
}


const mapStateToProps = function(state) {
  return state;
}

export default connect(mapStateToProps)(MapScreen);
