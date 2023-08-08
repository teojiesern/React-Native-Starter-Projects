import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Project8 from '../../project8(spotify)/src/Project8';
import TabNavigate from './TabNavigate';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
};

const Tab = createBottomTabNavigator();

export default function Project10() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Shop"
          component={TabNavigate}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Music"
          component={Project8}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="musical-notes" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
