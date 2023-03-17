import './render-fullscreen.js';
import {photoDescriptionArray} from './data.js';
import {createElements} from './rendering.js';
import './upload-modal.js';
import './validation.js';

const descriptionData = photoDescriptionArray();
createElements(descriptionData);

export {descriptionData};
