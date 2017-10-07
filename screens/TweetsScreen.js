import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

export default class TweetsScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={[{title: 'Title Text', key: 'item1'}]}
          renderItem={
              ({item}) => <ListItem
                title={`${item.title}`}/>
            }
        />
      </ScrollView>

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
