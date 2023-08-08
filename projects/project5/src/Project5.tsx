import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';

// note that by importing the images in modules like these, they automatically comes with things like require, uri, etc, and that is why when we pass in these modules, typescript does not complain
import DiceOne from './assets/project5/One.png';
import DiceTwo from './assets/project5/Two.png';
import DiceThree from './assets/project5/Three.png';
import DiceFour from './assets/project5/Four.png';
import DiceFive from './assets/project5/Five.png';
import DiceSix from './assets/project5/Six.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// the PropsWithChildren is a generic type in TypeScript which is commonly used in React to define React component props that include children
type DiceProps = PropsWithChildren<{
  // this is so that the url that we pass in must and always will only be image, cannot be anything else
  //ImageSourcePropType can accept various types of image sources, including:

  // A string representing a local image resource URI (e.g., require('./path/to/image.png')).
  // An object with uri property representing a remote image URI (e.g., { uri: 'https://example.com/image.png' }).
  // An asset number from Image.resolveAssetSource, used for dynamic image loading in certain scenarios.

  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// we can see that if we are declaring like this, we did not state that this react component can have any children, therefore for any component that might have children we can use the PropsWithChildren generic type
// type testing = {
//   imageUrl: string
// }

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      {/* it is important to pass in this styles.diceImage to pass in the width and height because of cls i think */}
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function Project5() {
  const [dice, setDice] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDice(DiceOne);
        break;
      case 2:
        setDice(DiceTwo);
        break;
      case 3:
        setDice(DiceThree);
        break;
      case 4:
        setDice(DiceFour);
        break;
      case 5:
        setDice(DiceFive);
        break;
      case 6:
        setDice(DiceSix);
        break;
      default:
        setDice(DiceOne);
        break;
    }

    // this is triggering things like minor vibrations on the phone when we click the roll dice button
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={dice} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDice}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollDice: {
    fontSize: 20,
  },
});
