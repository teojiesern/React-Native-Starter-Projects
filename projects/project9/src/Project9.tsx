import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

// this is telling the type of the params that we are going to pass to these stacks if any, if undefined means that we are not expecting any params to be passed on into here
// by passing the union here we are saying that the parameter here is optional to be passed on, note that if the param here does not have the union, then whenever we are going to use navigation.navigate to this details page, and we do not pass in a prop ts would yell at us saying that we are missing a parameter
export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string} | undefined;
};

// little bit of cheat sheet here is that
// 1) navigate will pop off all the screens that is in the way if the screen that we are navigating to is already in the navigation stack
// 2) push will keep on pushing new screens on top of the stack, no matter if the screen is already in the stack or not
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Project9() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Trending Products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
