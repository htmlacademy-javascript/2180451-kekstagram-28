function getStringLength (stringValue, maxLength) {
  return String(stringValue).length <= maxLength;
}

getStringLength('five', 4);

function isPalindrome (stringValue) {
  stringValue = String(stringValue);
  stringValue = stringValue.toLowerCase();
  stringValue = stringValue.replaceAll(' ', '');
  let inverseString = '';
  for (let i = stringValue.length - 1; i >= 0; i--) {
    inverseString = inverseString + stringValue[i];
  }
  return stringValue === inverseString;
}

isPalindrome('cannac');

function findNumber (stringValue) {
  stringValue = parseInt(String(stringValue).replace(/[^\d]/g, ''), 10);
  return stringValue;
}

findNumber('0 hello 123 gkdfdkffk443');

function addSymbol (string, length, symbol) {
  while (string.length < length) {
    if (symbol.length <= length - string.length) {
      string = symbol + string;
    } else {
      const missedSymbols = length - string.length;
      string = symbol.slice(0, missedSymbols) + string;
    }
  }
  return string;
}

addSymbol('horse', 14, 'white');
