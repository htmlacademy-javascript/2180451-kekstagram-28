function getStringLength (string, length) {
  string += ''
  return string.length <= length ? 'true - строка проходит по длине' : 'false - строка не проходит по длине';
}

console.log(getStringLength(true, 4));

function isPalindrome (string) {
  string = string + '';
  let inverseString = '';
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');
  for (i = string.length - 1; i >= 0; i--) {
    inverseString = inverseString + string[i];
  }
  return string === inverseString ? 'true - строка является палиндромом' : 'false - это не палиндром';
}

console.log(isPalindrome('палиндром'));

function findNumber (string) {
  if (typeof(string) === 'number') {
    if (string < 0) {
      string = -string;
    }
    return string = string.toFixed()
  }
  return string = parseInt(string.replace(/[^\d]/g, ''));
}

console.log(findNumber(-5 / 0))

function addSymbol (string, length, symbol) {
  while (string.length < length) {
    if (symbol.length <= length - string.length) {
      string = symbol + string;
    } else {
      let missedSymbols = length - string.length;
      string = symbol.slice(0, missedSymbols) + string;
    }
  }
  return string;
}

console.log(addSymbol('horse', 10, 'white'))
