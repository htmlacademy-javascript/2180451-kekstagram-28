import {isEscapeKey} from './util.js';
import {onDocKeydown} from './upload-modal.js';
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessage = successMessageTemplate.cloneNode(true);
const errorMessage = errorMessageTemplate.cloneNode(true);

const onClickCloseModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
  } else if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();
  }
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

export const uploadSuccess = () => {
  document.body.append(successMessage);
  const successModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');
  successModal.addEventListener('click', onClickCloseModal);
  successButton.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.success').remove();
      document.addEventListener('keydown', onDocKeydown);
    }
  });
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

export const uploadError = () => {
  document.body.append(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');
  errorModal.addEventListener('click', onClickCloseModal);
  errorButton.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.error').remove();
      document.addEventListener('keydown', onDocKeydown);
    }
  });
};
