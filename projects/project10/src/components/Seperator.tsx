import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Seperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: 'gray',
    height: 0.8,
    marginHorizontal: 20,
  },
});
