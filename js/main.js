import {createElements} from './rendering.js';
import {showAlert} from './util.js';
import {getData} from './api.js';
import './upload-modal.js';
import './validation.js';
import './slider.js';

getData()
  .then((requestData) => {
    createElements(requestData);
  })
  .catch((err) => {
    showAlert(err.message);
  });
