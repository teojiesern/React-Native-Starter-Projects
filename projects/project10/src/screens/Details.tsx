import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Project10';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route}: DetailsProps) {
  const {product} = route.params;

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.tag}>
      <Text style={{color: 'black'}}>{item}</Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 6, padding: 20}}>
        <Image style={styles.image} source={{uri: product.imageUrl}} />
      </View>
      <View style={{flex: 4, gap: 10}}>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingButton}>
            <Text style={styles.rating}>{product.rating} ⭐</Text>
          </View>
          <Text style={styles.ratingCount}>({product.ratingCount})</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.oriPrice}>₹{product.originalPrice}</Text>
          <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
          <Text style={styles.percentageOff}>
            {product.offerPercentage}% off
          </Text>
        </View>

        <FlatList data={product.tags} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  ratingButton: {
    backgroundColor: '#08cf5e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  rating: {
    color: 'white',
    fontSize: 12,
  },
  ratingCount: {
    color: 'gray',
    fontSize: 13,
  },
  priceContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 5,
    alignItems: 'center',
    backgroundColor: '#65fcae',
    borderRadius: 6,
  },
  oriPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 15,
  },
  discountPrice: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  percentageOff: {
    color: '#0c9c4a',
    fontSize: 15,
  },
  tag: {
    padding: 2,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
});
