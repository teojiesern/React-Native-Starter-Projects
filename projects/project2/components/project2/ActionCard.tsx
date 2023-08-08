import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  async function openWebsite(url: string) {
    Linking.openURL(url);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.card}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Blog Post about UM</Text>
        </View>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*Zd4Fyxn8reh8EQnUyEJeag.jpeg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.trailer}>
          <Text numberOfLines={3}>
            25 September 2022, the day that either makes or breaks the hopes and
            dreams of students that are waiting to be enrolled into Malaysia
            government universities. Fortunately I was one of the luckier ones
            and here I am, enrolled into the best university in Malaysia,
            University of Malaya and here are 3 things I learnt right after
            entering into this prestigious university
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://medium.com/@teojiesern42/3-things-i-learned-after-entering-best-university-in-malaysia-eebac93b7d63',
              )
            }>
            <Text style={styles.callToAction}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/teojiesern/')
            }>
            <Text style={styles.callToAction}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#db99ff',
  },
  headingContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {height: 200},
  trailer: {
    padding: 11,
  },
  callToAction: {
    fontWeight: 'bold',
  },
  footerText: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
});
