export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomValue = (min, max) => {
  const previousValue = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValue.length >= (max - min + 1)) {
      return null;
    }
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValue.push(currentValue);
    return currentValue;
  };
};

export const isEscapeKey = (evt) => evt.key === 'Escape';
export const isEnterKey = (evt) => evt.key === 'Enter';

const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

export const createComment = (arr, container) => {
  arr.forEach((item) => {
    const listItem = makeElement('li', 'social__comment');
    listItem.classList.add('hidden');
    const picture = makeElement('img', 'social__picture');
    picture.src = item.avatar;
    picture.alt = item.name;
    listItem.appendChild(picture);
    const commentText = makeElement('p', 'social__text', item.message);
    listItem.appendChild(commentText);
    container.appendChild(listItem);
  });
};

const getStringLength = (stringValue, maxLength) => String(stringValue).length <= maxLength;

getStringLength('five', 4);

const isPalindrome = (stringValue) => String(stringValue) === String(stringValue).split('').reverse().join('');

isPalindrome('cannac');

const findNumber = (stringValue) => parseInt(String(stringValue).replace(/[^\d]/g, ''), 10);

findNumber('0 hello 123 gkdfdkffk443');

const addSymbol = (string, length, symbol) => {
  while (string.length < length) {
    if (symbol.length <= length - string.length) {
      string = symbol + string;
    }
    string = symbol.slice(0, length - string.length) + string;
  }
  return string;
};

addSymbol('horse', 14, 'white');

