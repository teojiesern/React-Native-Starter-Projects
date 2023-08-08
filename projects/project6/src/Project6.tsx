import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CurrencyButton from '../components/CurrencyButton';
import {currencyByRupee} from './constants';
import Snackbar from 'react-native-snackbar';

export default function Project6() {
  const [selected, setSelected] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');

  const handlePress = (name: string, value: number, symbol: string) => {
    const valueToBeConverted = Number(inputValue);
    if (isNaN(valueToBeConverted)) {
      return Snackbar.show({
        text: 'Please enter a valid number',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: 'Undo',
          textColor: 'green',
          onPress: () => {
            setInputValue('');
          },
        },
      });
    }

    const convertedValue = (valueToBeConverted * value).toFixed(2);
    setOutputValue(`${symbol} ${convertedValue} 🤑💰`);
    setSelected(name);
  };

  const renderItem = ({
    item: {flag, name, symbol, value},
  }: {
    item: Currency;
  }) => (
    <View
      style={[styles.container, selected === name && styles.selectedStyles]}>
      <Pressable
        onPress={() => handlePress(name, value, symbol)}
        disabled={inputValue === ''}>
        <CurrencyButton flag={flag} name={name} />
      </Pressable>
    </View>
  );

  return (
    <View>
      <View style={styles.rupeesContainer}>
        <Text>₹</Text>
        <TextInput
          maxLength={14}
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType="number-pad"
          placeholder="Enter amount in Rupees"
        />
      </View>

      {outputValue !== '' && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>{outputValue}</Text>
        </View>
      )}

      <FlatList
        data={currencyByRupee}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fadf93',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  selectedStyles: {
    backgroundColor: '#fcbb08',
  },
  rupeesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
