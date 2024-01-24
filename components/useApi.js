import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useApi = () => {
  const [apiPriceWonToEur, setApiPriceWonToEur] = useState(null);
  const [apiPriceEurToWon, setApiPriceEurToWon] = useState(null);
  const [isApiSuccessful, setIsApiSuccessful] = useState(null);
  const [lastApiCallDate, setLastApiCallDate] = useState(null);

  const fetchCurrencyRates = async () => {
    try {
      const responseWonToEur = await fetch('https://api.currencyapi.com/????');
      const dataWonToEur = await responseWonToEur.json();

      if (dataWonToEur && dataWonToEur.data && dataWonToEur.data.KRW) {
        const newApiPriceWonToEur = parseFloat(dataWonToEur.data.KRW.value);
        setApiPriceWonToEur(newApiPriceWonToEur);
        setIsApiSuccessful(true);

        if (newApiPriceWonToEur !== 0) {
          setApiPriceEurToWon(1 / newApiPriceWonToEur);
        }

        const currentDate = new Date().toISOString();
        await AsyncStorage.setItem('lastFetchDate', currentDate);
        await AsyncStorage.setItem('apiPriceWonToEur', JSON.stringify(newApiPriceWonToEur));
        setLastApiCallDate(currentDate);
      } else {
        throw new Error('Invalid data from API');
      }
    } catch (error) {
      console.error('Error fetching currency rates:', error);
      setIsApiSuccessful(false);
      setApiPriceWonToEur(1450); 
      setApiPriceEurToWon(1 / 1450); 
    }
  };

  useEffect(() => {
    const initializeApiCall = async () => {
      const lastFetch = await AsyncStorage.getItem('lastFetchDate');
      const storedPrice = await AsyncStorage.getItem('apiPriceWonToEur');
      const lastFetchDate = lastFetch ? new Date(lastFetch) : null;
      const today = new Date().toISOString().split('T')[0];

      if (storedPrice !== null) {
        const storedPriceValue = parseFloat(JSON.parse(storedPrice));
        setApiPriceWonToEur(storedPriceValue);
        setApiPriceEurToWon(1 / storedPriceValue);
      }

      if (!lastFetchDate || lastFetchDate.toISOString().split('T')[0] !== today) {
        await fetchCurrencyRates();
      } else {
        setIsApiSuccessful(true);
        setLastApiCallDate(lastFetch);
      }
    };

    initializeApiCall();
  }, []);

  return { apiPriceWonToEur, apiPriceEurToWon, isApiSuccessful, lastApiCallDate };
};

export default useApi;
