import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRODUCTS_LIST} from '../data/constants';
import ProductItem from '../components/ProductItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Project10';
import Seperator from '../components/Seperator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const renderItem = ({item}: {item: Product}) => (
    <Pressable onPress={() => navigation.navigate('Details', {product: item})}>
      <ProductItem product={item} />
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={PRODUCTS_LIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
