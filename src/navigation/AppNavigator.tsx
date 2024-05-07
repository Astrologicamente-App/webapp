import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationStack from './NavigationStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
