import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPasswords: [],
      lastVisiblePassword: null,
    };
  }

  renderItem = ({ item, i }) => {
    return (
      <View>
        <ListItem key={i} />
        <ListItem.Title style={styles.title}>
          Organisation: {item.Organisation}
        </ListItem.Title>
        <ListItem.Content>
          <Text>Username: {item.Username}</Text>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>
          Password: {item.Password}
        </ListItem.Subtitle>
        
      </View>
    );
  };

  componentDidMount = async () => {
    this.getPasswords();
  };
  getPasswords = () => {
    db.collection('passwords')
      .limit(100)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            allPasswords: [...this.state.allPasswords, doc.data()],
            lastVisiblePassword: doc,
          });
        });
      });
    console.log(lastVisiblePassword);
  };

  render() {
    const { allPasswords } = this.state;
    return (
      <ScrollView>
        <View>
          <FlatList
            style={styles.lowerContainer}
            data={allPasswords}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}></FlatList>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  lowerContainer: {
    flex: 0.8,
    backgroundColor:"red",
  },
  title: {
    fontSize: 30,
    color: 'black',
  }
});
