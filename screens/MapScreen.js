import React from 'react';
import { connect } from "react-redux";
import { initTracker } from "../actions/TrackerActions";
import MapScreenView from "../components/MapScreenView";
import { StackNavigator } from "react-navigation";

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

  // state = {
  //     notification: {},
  //   };

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    // initialize key state stuff
    dispatch(initTracker((notification) => {
      this.setState({notification: notification});
    }));

  }



  render() {
    const { navigate } = this.props.navigation;
    const { entities, alerts } = this.props;
    const { newAlerts } = alerts;
    const { events } = entities;
    const alertMarkers = newAlerts.map((alert) => {
      const e = events[alert];
      return {
        ...e,
        onPress: (pressedEvent) => navigate('TweetsScreen', {name: e.name}),
      }
    });
    return (
      <View>
      <MapScreenView alertMarkers={alertMarkers} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
      </View>
      </View>
    );
  }
}


const mapStateToProps = function(state) {
  return state;
}

export default connect(mapStateToProps)(MapScreen);
