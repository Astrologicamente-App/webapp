import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MessageOfTheDayScreen from '../screens/MessageOfTheDayScreen';


const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MessageOfTheDay" component={MessageOfTheDayScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack;
