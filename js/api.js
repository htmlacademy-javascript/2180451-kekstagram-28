import {closeRedactor} from './upload-modal.js';
import {showAlert} from './util.js';
import {unblockSubmitButton} from './validation.js';
import {uploadSuccess, uploadError} from './upload-state.js';

const SERVER_URL_GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const SERVER_URL_POST = 'https://28.javascript.pages.academy/kekstagra';

const errorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу.',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз.'
};

export const getData = () => fetch(SERVER_URL_GET_DATA)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error(errorText.GET_DATA);
  });

export const sendData = (body) => {
  fetch(SERVER_URL_POST, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        closeRedactor();
        uploadSuccess();
      } else {
        throw new Error(uploadError);
      }
      return response.json();
    })
    .catch(() => {
      uploadError();
    })
    .finally(unblockSubmitButton);
};
