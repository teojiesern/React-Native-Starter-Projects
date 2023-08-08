import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Controller, Control} from 'react-hook-form';

interface customInputProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  isDarkMode: boolean;
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
}

export default function CustomInput({
  control,
  name,
  placeholder,
  isDarkMode,
  keyboardType,
}: customInputProps) {
  const inputStyle = isDarkMode ? styles.darkStyle : styles.lightStyle;
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onBlur, onChange, value}, fieldState: {error}}) => (
        <View>
          <TextInput
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={[styles.input, inputStyle]}
            keyboardType={keyboardType}
          />
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  darkStyle: {
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  lightStyle: {
    borderColor: 'black',
    color: 'black',
  },
  errorMessage: {
    color: 'red',
    fontSize: 10,
  },
});
