function getStringLength (string, length) {
  string += '';
  return string.length <= length ? 'true - строка проходит по длине' : 'false - строка не проходит по длине';
}

getStringLength(true, 4);

function isPalindrome (string) {
  string += '';
  let inverseString = '';
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');
  for (let i = string.length - 1; i >= 0; i--) {
    inverseString = inverseString + string[i];
  }
  string = inverseString ? 'true - строка является палиндромом' : 'false - это не палиндром';
  return string;
}

isPalindrome('anna');

function findNumber (string) {
  if (typeof(string) === 'number') {
    if (string < 0) {
      string = -string;
    }
    string = string.toFixed();
    return string;
  }
  string = parseInt(string.replace(/[^\d]/g, ''), 10);
  return string;
}

findNumber('ECMAScript 2022');

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
