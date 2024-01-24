export const formatNumber = (number) => {
  if (number === null || number === undefined || isNaN(number)) {
    return '';
  }

  let roundedNumber = Number(number).toFixed(2);
  let [integerPart, decimalPart] = roundedNumber.split('.');

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (decimalPart === '00') {
    return integerPart;
  }

  return `${integerPart}.${decimalPart}`;
};