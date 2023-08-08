import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playListData} from './src/constants';

export async function setupPlayer() {
  // using this try catch is a better approach because later on, we will see that the setting up of a player will be repeated once the track is going to be loaded onto it, so this is giving better performances and preventing the app from crashing on things like setting up the track too many times
  let isSetup = false;
  try {
    // this is initially assuming that the player is ready and if it really is ready, we will be able to get the track, however if the player is not ready, then we will do the setupPlayer to setup the player and then return true to indicate that the player is now ready
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack() {
  await TrackPlayer.add(playListData);
  // this is indicating that the music will keep on repeating once the queue is finished, songs will be repeated from the first song that is in the queue
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

// these are all the things that are outside of the app, things like if the users were to pause or play the music from notification bar or from the lock screen, we have to add the playback here to notify react native track player that those actions would resolve to what actions being taken, here the remotePlay indicates that the user is playing the song remotely( either using things like clicking the play button on the notification )
export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
};
