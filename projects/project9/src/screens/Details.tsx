import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Project9';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({navigation, route}: DetailsProps) {
  return (
    <View>
      <Text style={{color: 'black'}}>{route.params?.productId}</Text>
      <Text style={{color: 'black'}}>{route.name}</Text>
      <Button
        title="Go to home page"
        onPress={() => {
          navigation.push('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
