function convertBase(number, fromBase, toBase) {
    if (typeof number !== 'string') {
      number = String(number);
    }
  
    // Convert the number from the 'fromBase' to decimal
    const decimalNumber = parseInt(number, fromBase);
  
    // Convert the decimal number to the 'toBase'
    const convertedNumber = decimalNumber.toString(toBase);
  
    return convertedNumber;
  }
export default convertBase;