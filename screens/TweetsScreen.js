import React from 'react';
import { Image, View, Text, ScrollView, StyleSheet, FlatList, } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';


const headerStyles = {
  backgroundColor: "#2F4858",
  padding: 30,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const example = [
  {id: 123,
    text: "CAL HACKS 4.0!",
    author: "Andrew",
  location:"Berkeley"},
    {
      id: 111,
      text: "Protest at cal",
      author: "Nitin",
      location: "San Francisco"
    },
]




export default class TweetsScreen extends React.Component {
  static navigationOptions = {
    title: 'Tweets',
    header: null,
  };


  render() {
    const {params} = this.props.navigation.state;
    console.log(this.props.name)
    return (
      <ScrollView style={styles.container}>
      <View style={ headerStyles }>
        <Image source={require("../assets/images/logo.png")} />
        <Text style={{color: "#FFFFFF", fontSize: 20}}>
          {params.name}

        </Text>
        <Image source={require("../assets/images/settings.png")} style={{width: 50, height: 50}} />
      </View>

        <FlatList
          data={example}
          renderItem={
              ({item}) => <ListItem
                title={`${item.author}`}
                subtitle={item.text}/>
            }
        />
      </ScrollView>
/*
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
*/
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
