const SERVER_URL = 'https://28.javascript.pages.academy/kekstagram/data';

export const getData = () => fetch(SERVER_URL)
  .then((Response) => Response.json());

export const sendData = (formData) => {
  fetch('https://28.javascript.pages.academy/kekstagram/data', {
    method: 'POST',
    body: formData,
  })
    .then((Response) => {
      if (Response.ok) {
        closeRedactor();
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .finally(unblockSubmitButton);
};
