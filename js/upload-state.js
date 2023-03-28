import {isEscapeKey} from './util.js';
import {onDocKeydown} from './upload-modal.js';
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

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
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');
  successModal.addEventListener('click', onClickCloseModal);
  successButton.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      successModal('.success').remove();
      document.addEventListener('keydown', onDocKeydown);
    }
  });
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

export const uploadError = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');
  errorModal.addEventListener('click', onClickCloseModal);
  errorButton.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      errorModal.remove();
      document.addEventListener('keydown', onDocKeydown);
    }
  });
};
