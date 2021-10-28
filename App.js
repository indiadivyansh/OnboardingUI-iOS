import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Hello</Text>
    </NavigationContainer>
  );
}
