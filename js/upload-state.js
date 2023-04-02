import {isEscapeKey} from './util.js';
import {onDocKeydown} from './upload-modal.js';
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

const onSuccessStateKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const successModal = document.querySelector('.success');
    successModal.remove();
    document.removeEventListener('keydown', onSuccessStateKeydown);
  }
};

const onErrorStateKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const errorModal = document.querySelector('.error');
    errorModal.remove();
    document.removeEventListener('keydown', onErrorStateKeydown);
  }
};

const onOutStateModalClick = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onSuccessStateKeydown);
  } else if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();
  }
};

const onSuccessButtonClick = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccessStateKeydown);
};

export const uploadSuccess = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');
  successModal.addEventListener('click', onOutStateModalClick);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', onSuccessStateKeydown);
};

const onErrorButtonClick = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorStateKeydown);
};

export const uploadError = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');
  errorModal.addEventListener('click', onOutStateModalClick);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', onErrorStateKeydown);
};
