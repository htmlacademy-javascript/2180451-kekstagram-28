import './render-fullscreen.js';
import {photoDescriptionArray} from './data.js';
import {createElements} from './rendering.js';

export const descriptionData = photoDescriptionArray();
createElements(descriptionData);
