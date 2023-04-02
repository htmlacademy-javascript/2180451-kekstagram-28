import {onCancelUploadClick} from './upload-modal.js';
import {showAlert} from './util.js';
import {unblockSubmitButton} from './validation.js';
import {uploadSuccess, uploadError} from './upload-state.js';

const SERVER_URL_GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const SERVER_URL_POST = 'https://28.javascript.pages.academy/kekstagram';

const errorText = 'Не удалось загрузить данные. Попробуйте обновить страницу.';

export const getData = () => fetch(SERVER_URL_GET_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    showAlert(errorText);
  });

export const sendData = (body) => {
  fetch(SERVER_URL_POST, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      onCancelUploadClick();
      uploadSuccess();
      return response.json();
    })
    .catch(() => {
      uploadError();
    })
    .finally(unblockSubmitButton);
};
