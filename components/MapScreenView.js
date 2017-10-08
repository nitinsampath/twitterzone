import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { MAP_STYLE } from "../constants/config";

/*
PROPS.

{
  alertMarkers: arrayOf({
    name: STRING  - Event name.
    latitude: FLOAT - Event latitude.
    longitude: FLOAT  - Event longitude.
    sentiment: FLOAT  - Event sentiment.
    onPress: FUNCTION   - Callback to call when the marker is pressed.
  })
}

*/

class MapScreenView extends React.Component {
  renderMarkers() {
    const { alertMarkers } = this.props;
    console.log(alertMarkers);
    return alertMarkers.map((marker) => {
      return (
        <MapView.Marker
          title={marker.title}
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          image={require("../assets/images/marker.png")}
          onPress={marker.onPress}
        />
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MAP_STYLE}
        initialRegion={{
          latitude: 37.8719,
          longitude: -122.2585,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position:'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
});

export default MapScreenView;
