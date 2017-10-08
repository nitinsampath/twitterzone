import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

import { connect } from "react-redux";
import { distLatLonKm } from "../utils/distance";

const headerStyles = {
  backgroundColor: "#2F4858",
  padding: 30,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

/*
PROPS.
{
  eventList: sortedArrayOf({
    name: STRING  - Event name.
    key: STRING
    latitude: FLOAT
    longitude: FLOAT
    sentiment: FLOAT
    distance: FLOAT
    description: STRING - optional.
  })
}

*/

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    header: null ,
  };

  render() {
    const { eventList } = this.props;
    return (
      <View>
        <View style={ headerStyles }>
          <Image source={require("../assets/images/logo.png")} />
          <Text style={{color: "#FFFFFF", fontSize: 24}}>
            Alerts in your Area
          </Text>
          <Image source={require("../assets/images/settings.png")} style={{width: 50, height: 50}} />
        </View>
            <List>
              <FlatList
                data={eventList}
                renderItem={
                    ({item}) => <ListItem
                      title={`${item.name}`}
                      key={item.key}
                      subtitle={`${item.distance.toFixed(2)} kilometers from you`}/>
                  }
              />
            </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = function(state) {
  const { entities, alerts, tracker } = state;
  const { events } = entities;
  const { alertList } = alerts;
  let me = tracker;
  console.log(me);
  // sort events by distance to user.
  let eventList = Object.keys(events).map((eventName) => {
    let e = events[eventName];
    const dist = distLatLonKm(me.latitude, me.longitude, e.latitude, e.longitude);
    //console.log([me.lat, me.lon, e.latitude, e.longitude]);
    //console.log("Computed dist:" + dist);
    return {
      ...e,
      distance: dist,
      key: e.name,
    };
  });
  eventList.sort((a, b) => {
    if (a.distance < b.distance) { return -1; }
    if (a.distance > b.distance) { return 1; }
    return 0;
  });

  return {eventList: eventList};
}

export default connect(mapStateToProps)(LinksScreen);
