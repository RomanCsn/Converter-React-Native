import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import useApi from './useApi';

const ApiStatusIndicator = () => {
  const { isApiSuccessful, lastApiCallDate } = useApi();

  const wifi = require('../assets/wifi.png'); 
  const wifiError = require('../assets/wifi-error.png');

  const formatDate = date => {
    return date ? new Date(date).toLocaleString() : 'Pas de données';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{formatDate(lastApiCallDate)}</Text>
      <Image source={isApiSuccessful ? wifi : wifiError} style={styles.imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  dateText: {
    marginLeft: 10,
    opacity: 0.2,
  },
});

export default ApiStatusIndicator;
