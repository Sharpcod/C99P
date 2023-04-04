import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.upText}> WELCOME TO </Text>
        <Text style={styles.downText}> Plant Care </Text>
        
        <LinearGradient
          style={styles.button}
          colors={['#2af598', '#22e4ac', '#1BD7BB', '#14C9CB']}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate('AppTabNavigator')}>
            GET STARTED!
          </Text>
        </LinearGradient>
      </View>
    ); 
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  upText: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'century gothic',
    marginTop: 40,
    fontStyle: 'italic',
    color: 'slategrey',
  },

  downText: {
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'century gothic',
    fontStyle: 'italic',
    color: '#1bd7bb',
    marginBottom: 30,
  },

  image: {
    width: '90%',
    height: '50%',
    marginBottom: 60,
  },

  button: {
    marginBottom: 100,
    width: '80%',
    height: '7%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'century gothic',
    color: 'white',
    textAlign: 'center',
  },
});
