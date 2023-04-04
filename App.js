import * as React from 'react';
import { Text, View} from 'react-native';
import  {NavigationContainer}  from "@react-navigation/native";
import  BottomTabNavigator  from './TabNavigator';
import Home from "./screens/Home";
import List from "./screens/List";

export default function App() {
  return (
  
    <NavigationContainer>
<BottomTabNavigator>
</BottomTabNavigator>
</NavigationContainer>
   
  );
}

