import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../Project9';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// this is saying that we can have this rootStackParamList which defines all the types of the params and then when we want to type the screens, we can simply just use this NativeStackScreenProps and then pass in the rootStackParamList which then the second parameter we would tell which one of the type that we want to use, since the RootStackParamList has all the screens and their params typed avaliable to us
// this is important even if we are not expecting any props to be passed because by doing this, we can provide type safety to the navigation, and the route that by default is passed to every screen for us to use
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <Text style={{color: 'black'}}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            productId: '123',
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
