import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Track} from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

export default function SongInfo({track}: SongInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{track?.title}</Text>
      <Text style={styles.subTitle}>
        {track?.artist} . {track?.albums}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
});
