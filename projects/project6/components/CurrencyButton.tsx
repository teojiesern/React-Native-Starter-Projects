import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

export default function CurrencyButton({name, flag}: CurrencyButtonProps) {
  return (
    <View style={styles.container}>
      <Text>{flag}</Text>
      <Text style={{color: 'black'}}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
