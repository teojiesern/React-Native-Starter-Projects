import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://121clicks.com/wp-content/uploads/2022/01/most_beautiful_places.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Some unreal places</Text>
          <Text style={styles.cardLabel}>
            Sunset by the tree and a nature in awe
          </Text>
          <Text style={styles.cardDescription}>
            These are places that are not real which we would hope that they are
            but in reality these are just fictional places, I mean how could
            these places actually exists
          </Text>
          <Text style={styles.cardFooter}>100 Years away</Text>
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
    width: '100%',
    borderRadius: 10,
  },
  cardElevated: {
    backgroundColor: '#89aae0',
  },
  cardImage: {
    height: 200,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 16,
    color: 'black',
  },
  cardDescription: {
    marginTop: 10,
    fontSize: 12,
    color: 'black',
  },
  cardFooter: {
    fontSize: 10,
    color: 'black',
    marginTop: 10,
  },
});
