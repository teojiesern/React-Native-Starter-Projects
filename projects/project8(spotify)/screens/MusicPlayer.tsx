import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const {width} = Dimensions.get('window');

export default function MusicPlayer() {
  const [track, setTrack] = useState<Track | null>();

  // this is to subscribe to when the track is being changed, we will update the state of the track therefore able to continue playing song after song
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(playingTrack);
        break;
    }
  });

  const RenderArtWork = (): JSX.Element => {
    return (
      <View style={styles.albumContainer}>
        <View style={styles.imageContainer}>
          {track?.artwork && (
            <Image
              source={{uri: track.artwork.toString()}}
              style={styles.albumArtImg}
            />
          )}
        </View>
      </View>
    );
  };

  useEffect(() => {
    const loadInitialTrack = async () => {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      if (currentTrack !== null) {
        const trackData = await TrackPlayer.getTrack(currentTrack);
        setTrack(trackData);
      }
    };
    loadInitialTrack();
  }, []);

  return (
    <View>
      <RenderArtWork />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 10,
  },
});
