import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useApi from './useApi.js'; 
import { formatNumber } from './utils';


const CurrencyPrice = ({}) => {
    const { apiPriceWonToEur } = useApi();
    const formattedPrice = formatNumber(apiPriceWonToEur);
  

  return (
    <View style={styles.bgCurrencyPrice}>
        <Text style={styles.h3}>PRIX</Text>
        <View style={styles.lineOne}> 
            <Text style={styles.h1}>1€</Text>
            <Text style={[styles.h1, { color: '#4E6AFF', fontWeight:200,}]}>=</Text>
                <Text style={styles.h1}> {formattedPrice}₩ </Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    bgCurrencyPrice:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
  },
  lineOne:{
    padding: 10,
    margin: 20,
    gap: 20,
    flexDirection: 'row',
    borderWidth: 1,
    width: 'auto',
    height: 'auto',
    borderColor: '#4E6AFF',
    backgroundColor: 'transparent',
    borderRadius: 5,

},
rectangle:{
    borderWidth: 1,
    width: 100,
    height: 70,
    borderColor: '#4E6AFF',
    backgroundColor: 'transparent',
},
h1: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },
h3: {
    color: '#4E6AFF',
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
},
});

export default CurrencyPrice;
