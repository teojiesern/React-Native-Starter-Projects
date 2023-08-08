import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Project4() {
  const [backgroundColor, setBackgroundColor] = React.useState('#000000');

  const changeBg = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hex.charAt(Math.round(Math.random() * hex.length));
    }

    setBackgroundColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar backgroundColor={backgroundColor} />
      <TouchableOpacity onPress={changeBg} style={styles.button}>
        <Text style={styles.text}>Change Background Color</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#8954eb',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
