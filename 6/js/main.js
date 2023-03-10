import './render-fullscreen.js';
import {photoDescriptionArray} from './data.js';
import {createElements} from './rendering.js';

const descriptionData = photoDescriptionArray();
export {descriptionData};
createElements(descriptionData);

