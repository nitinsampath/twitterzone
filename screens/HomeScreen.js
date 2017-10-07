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

import MapView from 'react-native-maps';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
        initialRegion={{
          latitude: 37.8719,
          longitude: -122.2585,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Circle
          center={{
            latitude: 37.8719,
            longitude: -122.2585,
            latitudeDelta: 0.0922,
          }}
          radius = {100}
          fillColor =  "rgba(255, 92, 92, 0.5)"
        />
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
