import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

export default function Project1(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[styles.container, isDarkMode ? styles.blackBg : styles.whiteBg]}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
  blackBg: {
    backgroundColor: 'black',
  },
  whiteBg: {
    backgroundColor: 'white',
  },
});
