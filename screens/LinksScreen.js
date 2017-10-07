import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

const headerStyles = {
  backgroundColor: "#2F4858",
  padding: 30,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    header: null ,
  };

  render() {
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
                data={[{title: 'Title Text', key: 'item1'}]}
                renderItem={
                    ({item}) => <ListItem
                      title={`${item.title}`}/>
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
