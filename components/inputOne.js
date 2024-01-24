import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import useApi from './useApi.js';

const imageWON = require('../assets/won.png');
const imageEURO = require('../assets/euro.png');

const InputOne = ({ isCurrency1Active, onConversion }) => {
  const { apiPriceEurToWon, apiPriceWonToEur } = useApi();
  const [inputValue, setInputValue] = useState('');

  const formatNumberWithSpaces = (numberString) => {

    const plainNumber = numberString.replace(/\s/g, '');

    return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleInputChange = (text) => {

    const formattedText = formatNumberWithSpaces(text);

    setInputValue(formattedText);

    const numberForConversion = formattedText.replace(/\s/g, '');

    const conversionRate = isCurrency1Active ? apiPriceWonToEur : apiPriceEurToWon;
    const convertedValue = parseFloat(numberForConversion) * conversionRate;

    onConversion(convertedValue);
  };

  return (
    <View style={styles.inputOne}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <View style={styles.right}>
        <Image source={isCurrency1Active ? imageEURO : imageWON} style={styles.image} />

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  inputOne: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  right: {
    height: 65,
    backgroundColor: '#4E6AFF',
    width: 50,
    marginTop: 45,
    marginLeft: 5,
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 65,
    backgroundColor: '#4E6AFF',
    color: 'white',
    borderColor: '#4E6AFF',
    fontSize: 34,
    borderWidth: 1,
    width: 250,
    marginTop: 45,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  image: {
    width: '100%',
    height: 28,
  },
});

export default InputOne;
