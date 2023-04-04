import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./screens/Home";
import List from "./screens/List";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
    <Tab.Navigator 
    screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Password') {
                        iconName = focused
                            ? 'key'
                            : 'key-outline';
                    } else if (route.name === 'List') {
                        iconName = focused ? 'clipboard' : 'clipboard-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Password" component={Home} /> 
            <Tab.Screen name="List" component={List} />
            
    </Tab.Navigator>
  )
}
export default BottomTabNavigator;