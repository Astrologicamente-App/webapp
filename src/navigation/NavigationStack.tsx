import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MessageOfTheDayScreen from '../screens/MessageOfTheDayScreen';
import HoroscopeScreen from '../screens/HoroscopoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Outras telas aqui */}
      <Stack.Screen name="MessageOfTheDay" component={MessageOfTheDayScreen} />
      <Stack.Screen name="Horoscopo" component={HoroscopeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack;
