import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductItemProps = PropsWithChildren<{
  product: Product;
}>;

export default function ProductItem({product}: ProductItemProps) {
  return (
    <View style={styles.productContainer}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />

      <View>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.flexContainer}>
          <View style={styles.ratingButton}>
            <Text style={styles.rating}>{product.rating} ⭐</Text>
          </View>
          <Text style={styles.ratingCount}>({product.ratingCount})</Text>
        </View>

        <View style={styles.flexContainer}>
          <Text style={styles.oriPrice}>₹{product.originalPrice}</Text>
          <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
          <Text style={styles.percentageOff}>
            {product.offerPercentage}% off
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    margin: 20,
    gap: 10,
  },
  image: {
    width: 90,
    height: 130,
    resizeMode: 'contain',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flexContainer: {
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
});
