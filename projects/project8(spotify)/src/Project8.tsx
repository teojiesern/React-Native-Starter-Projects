import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import MusicPlayer from '../screens/MusicPlayer';
import {addTrack, setupPlayer} from '../services';

export default function Project8() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    const isReady = await setupPlayer();
    if (isReady) await addTrack();

    setIsPlayerReady(isReady);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        {/* <ActivityIndicator />; */}
        <Text>loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <StatusBar />
      <MusicPlayer />
    </View>
  );
}
