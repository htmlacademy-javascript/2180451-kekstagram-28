import './render-fullscreen.js';
import {photoDescriptionArray} from './data.js';
import {createElements} from './rendering.js';

const descriptionData = photoDescriptionArray();
createElements(descriptionData);

export {descriptionData};
