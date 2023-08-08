import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';

export default function SongSlider() {
  const {position, duration} = useProgress();
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={duration}
        value={position}
        thumbTintColor="white"
        minimumTrackTintColor="white"
        maximumTrackTintColor="white"
      />

      <View style={styles.timeInfo}>
        <Text>{new Date(position * 1000).toISOString().substring(15, 19)}</Text>
        <Text>
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(15, 19)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
