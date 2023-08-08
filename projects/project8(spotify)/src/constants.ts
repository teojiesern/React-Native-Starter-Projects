import {Track} from 'react-native-track-player';

export const playListData: Track[] = [
  {
    id: 1,
    title: '毒药',
    artist: '蕭秉治',
    album: 'Champagne Talk',
    artwork:
      'https://www.huaiyinjie.com/wp-content/uploads/2023/07/c48dfeb26cc0de476b171c92a5e5405f.jpg',
    url: require('./assets/audio/one.mp3'),
  },
  {
    id: 2,
    title: 'Drenched',
    artist: '曲婉婷',
    album: 'Healing',
    artwork: 'https://i.ytimg.com/vi/UoucYR30MmU/maxresdefault.jpg',
    url: require('./assets/audio/two.mp3'),
  },
  {
    id: 3,
    title: '戒不掉',
    artist: '歐陽耀瑩',
    album: '戒不掉',
    artwork:
      'https://p0.itc.cn/images01/20230321/b36af2489e8b4c2da3b1359786e586e3.jpeg',
    url: require('./assets/audio/three.mp3'),
  },
];
