import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CurrencyContainer from './components/currencyContainer.js';
import ApiStatusIndicator from './components/apiStatusIndicator.js'; 
import CurrencyPrice from './components/currencyPrice.js'; 
import InputOne from './components/inputOne.js';
import InputTwo from './components/inputTwo.js';

export default function App() {
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.bg}>
        <View style={styles.container}>
          <ApiStatusIndicator />
          <Text style={styles.h3}>CONVERTER</Text>
          <CurrencyContainer />
        </View>
        <CurrencyPrice />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#191B1D',
  },

  bg: {
    flex: 1,
    backgroundColor: '#191B1D',
  },

  container: {
    width: '100%',
    height: '70%',
    backgroundColor: '#2A3140',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  h3: {
    color: '#4E6AFF',
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 20,


  },

  resultText: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});
