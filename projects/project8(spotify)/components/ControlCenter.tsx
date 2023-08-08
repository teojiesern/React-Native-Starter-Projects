import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Feather';

// this is all the control which includes the play button, next song button, and previous song button
export default function ControlCenter() {
  const playBackState = usePlaybackState();

  const nextSong = async () => {
    await TrackPlayer.skipToNext();
  };

  const previousSong = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async () => {
    // this is to see if there is a song playing because if there is not a song playing, and we run the TrackPlayer.play() function, it will crash the app
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playBackState === State.Paused || playBackState === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={previousSong}>
        <Icon name="skip-back" size={30} color="white" />
      </Pressable>

      <Pressable onPress={togglePlayback}>
        <Icon
          name={playBackState === State.Playing ? 'pause' : 'play'}
          size={50}
          color="white"
        />
      </Pressable>

      <Pressable onPress={nextSong}>
        <Icon name="skip-forward" size={30} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
