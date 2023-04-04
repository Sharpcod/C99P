import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import db from "../config";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      Organisation: '',
    };
  }

addPassword=()=>{
   db.collection("passwords").add({
     Username: this.state.Username,
      Password: this.state.Password, 
      Organisation:this.state.Organisation, 
   })
}
  render() {
    const { Username, Password, Organisation } = this.state;
    return (
      <ImageBackground source={require('../assets/Password11.gif')} style={styles.backgroundImage} >
      <View>
       <Image style={styles.image} source={require("../assets/b.png")} />
        <View  style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Organisation"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ Organisation: text })}
          />
        </View>
        <View  style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ Username: text })}
          />
        </View>

        <View  style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ Password: text })}
          />
        </View>

        <TouchableOpacity style={styles.b} onPress={()=>this.addPassword()}><Text>ADD PASSWORD</Text></TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100, 
    borderRadius: 10,
    marginLeft:120  },
    b:{
  backgroundColor:"gold",
  marginTop:25,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:50,
  width:120,
  height:60,
  marginLeft:100
},
TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white',
  },
   inputView: {
    backgroundColor: "red",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 15,
    color: 'white',
    alignItems: "center",
    marginLeft:50,
    marginTop:15},

    backgroundImage: {
        resizeMode: 'cover',
        width:350,
        height:499
          },
   
});
