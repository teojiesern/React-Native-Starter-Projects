import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface contactType {
  id: number;
  name: string;
  status: string;
  imageUrl: string;
}

const contacts: contactType[] = [
  {
    id: 1,
    name: 'Hitesh Choudhary',
    status: 'Just an extra ordinary teacher',
    imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
  },
  {
    id: 2,
    name: 'Anurag Tiwari',
    status: 'I ❤️ To Code and Teach!',
    imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
  },
  {
    id: 3,
    name: 'Sanket Singh',
    status: 'Making your GPay smooth',
    imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
  },
  {
    id: 4,
    name: 'Anirudh Jwala',
    status: 'Building secure Digital banks',
    imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
  },
];

export default function ContactList() {
  const renderItem = ({
    item: {name, status, imageUrl},
  }: {
    item: contactType;
  }) => (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.profileImg} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );

  const seperator = () => <View style={styles.seperator} />;

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>

      <FlatList
        data={contacts}
        renderItem={renderItem}
        ItemSeparatorComponent={seperator}
      />
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
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
  },
  seperator: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 15,
  },
});
