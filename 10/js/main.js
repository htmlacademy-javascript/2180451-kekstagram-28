import {createElements} from './rendering.js';
import {renderBigPhoto} from './render-fullscreen.js';
import {getData} from './api.js';

getData()
  .then((requestData) => {
    createElements(requestData);
    renderBigPhoto(requestData);
  });
