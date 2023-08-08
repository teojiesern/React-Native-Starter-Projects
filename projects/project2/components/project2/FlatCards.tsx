import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  const data = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  const renderItem = ({item}: {item: string}) => {
    return <Text>{item}</Text>;
  };

  const seperator = () => {
    return (
      <View
        style={{backgroundColor: 'black', width: 1, marginHorizontal: 20}}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={seperator}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
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
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#fc1703',
  },
  cardTwo: {
    backgroundColor: '#03fca5',
  },
  cardThree: {
    backgroundColor: '#03a1fc',
  },
});
