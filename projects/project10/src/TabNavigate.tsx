import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from './Project10';
import Details from './screens/Details';
import Home from './screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function TabNavigate() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
