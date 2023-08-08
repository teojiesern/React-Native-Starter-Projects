import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  project3Validator,
  project3ValidatorType,
} from '../../../validator/project3Validator';
import CustomInput from '../components/CustomInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {zodResolver} from '@hookform/resolvers/zod';

export default function Project3() {
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  const isDarkMode = useColorScheme() === 'dark';

  const textColor = isDarkMode ? styles.lightText : styles.darkText;

  const {control, handleSubmit, reset} = useForm<project3ValidatorType>({
    resolver: zodResolver(project3Validator),
  });

  const prepPassword = (passLength: number) => {
    let characters = '';
    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
      characters += '0123456789';
    }
    if (symbols) {
      characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }

    generatePassword(characters, passLength);
  };

  const generatePassword = (characters: string, passLength: number) => {
    let password = '';
    for (let i = 0; i < passLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    setGeneratedPassword(password);
  };

  const onSubmit = ({passwordLength}: project3ValidatorType) => {
    prepPassword(passwordLength);
    reset();
  };

  const handleReset = () => {
    setLowercase(false);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
    reset();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={[styles.headingText, textColor]}>Password Generator</Text>

        <View style={{gap: 20}}>
          <View style={styles.options}>
            <Text style={textColor}>Password Length</Text>
            <CustomInput
              control={control}
              placeholder="Ex. 8"
              isDarkMode={isDarkMode}
              name="passwordLength"
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.options}>
            <Text style={textColor}>Include Lowercase letters</Text>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={lowercase}
              onPress={() => setLowercase(prev => !prev)}
            />
          </View>
          <View style={styles.options}>
            <Text style={textColor}>Include Uppercase letters</Text>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={uppercase}
              onPress={() => setUppercase(prev => !prev)}
              fillColor="#e61515"
            />
          </View>
          <View style={styles.options}>
            <Text style={textColor}>Include Numbers</Text>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={numbers}
              onPress={() => setNumbers(prev => !prev)}
              fillColor="#5e15e6"
            />
          </View>
          <View style={styles.options}>
            <Text style={textColor}>Include Symbols</Text>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={symbols}
              onPress={() => setSymbols(prev => !prev)}
              fillColor="#15e673"
            />
          </View>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles.button, {backgroundColor: '#03d7fc'}]}>
            <Text style={[textColor, {fontWeight: 'bold'}]}>Generate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleReset}
            style={[styles.button, {backgroundColor: '#898e8f'}]}>
            <Text style={[textColor, {fontWeight: 'bold'}]}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {generatedPassword !== '' && (
        <View style={styles.passwordContainer}>
          <Text style={styles.instruction}>Long Press to Copy or Share</Text>
          <Text selectable style={styles.generatedPassword}>
            {generatedPassword}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  darkText: {
    color: 'black',
  },
  lightText: {
    color: 'white',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  passwordContainer: {
    backgroundColor: 'white',
    margin: 25,
    padding: 10,
    borderRadius: 5,
  },
  generatedPassword: {
    color: 'black',
    fontSize: 20,
  },
  instruction: {
    color: 'black',
    fontSize: 25,
  },
});
