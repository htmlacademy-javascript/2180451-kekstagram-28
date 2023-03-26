import {isEscapeKey} from './util.js';
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessage = successMessageTemplate.cloneNode(true);
const errorMessage = errorMessageTemplate.cloneNode(true);

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

export const uploadSuccess = () => {
  document.body.append(successMessage);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.success').remove();
    }
  });
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

export const uploadError = () => {
  document.body.append(errorMessage);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.error').remove();
    }
  });
};
