import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputOne from './inputOne';
import InputTwo from './inputTwo';

const CurrencyContainer = ({}) => {
  const [isCurrency1Active, setIsCurrency1Active] = useState(false);
  const currency1 = 'WON';
  const currency2 = 'EUR';
  const keyForInputOne = isCurrency1Active ? 'euro' : 'won';
  const keyForInputTwo = isCurrency1Active ? 'won' : 'euro';
  const [convertedValue, setConvertedValue] = useState(null);

  const handleToggleCurrency = () => {
    setIsCurrency1Active(!isCurrency1Active);
    setConvertedValue(null);
  };

  const handleConversion = (value) => {
    setConvertedValue(value);
  };

  

  return (
    <TouchableOpacity onPress={handleToggleCurrency}>
      <View style={styles.currencyContainer}>
        <Text style={[styles.h1, styles.active]}>{isCurrency1Active ? currency2 : currency1}</Text>
        
        <View style={styles.bgTransfer}>
          <Image
            source={require('../assets/doubleArrow.png')}
            style={styles.image}
          />
        </View>

        <Text style={[styles.h1, styles.inactive]}>{isCurrency1Active ? currency1 : currency2}</Text>
      </View>

      <InputOne key={keyForInputOne} isCurrency1Active={isCurrency1Active} onConversion={handleConversion} />
      <InputTwo key={keyForInputTwo} isCurrency1Active={isCurrency1Active} convertedValue={convertedValue} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  bgTransfer: {
    backgroundColor: '#4E6AFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 5,
    top: 5,
  },
  image: {
    width: 23,
    height: 28,
  },
});

export default CurrencyContainer;
