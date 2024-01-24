import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { formatNumber } from './utils.js'


const imageWON = require('../assets/won.png');
const imageEURO = require('../assets/euro.png');

const InputTwo = ({ isCurrency1Active, convertedValue, inputValue }) => {

  const formattedValue = formatNumber(convertedValue, inputValue);
  
  return (
    <View style={styles.inputTwo}>
      <View style={styles.input}>
        <Text style={styles.inputText}>{formattedValue}</Text>
      </View>

      <View style={styles.right}>
        <Image source={isCurrency1Active ? imageWON : imageEURO} style={styles.image} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputTwo: {
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
    borderWidth: 1,
    width: 250,
    marginTop: 45,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  inputText: {
    fontSize: 34,
    color: 'white',
  },

  image: {
    width: '100%',
    height: 28,
  },
});

export default InputTwo;
