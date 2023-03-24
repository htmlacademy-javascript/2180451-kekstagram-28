const SERVER_URL = 'https://28.javascript.pages.academy/kekstagram/data';

export const getData = () => fetch(SERVER_URL)
  .then((Response) => Response.json());

// export const sendData = (body) => {
//   fetch(SERVER_URL, {
//     method: 'POST',
//     body,
//   })
//     .then((Response) => {
//       if (!Response.ok) {
//         throw new Error();
//       }
//       return Response.json();
//     })
//     .catch((err) => {
//       throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
//     });
// };
