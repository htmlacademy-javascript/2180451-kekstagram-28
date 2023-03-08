import './data.js';
import './rendering.js';
import {photoDescriptionArray} from './data.js';
import {createElements, picContainer, similarDescriptionsFragment} from './rendering.js';

const descriptionData = photoDescriptionArray();
export {descriptionData};

createElements();
picContainer.append(similarDescriptionsFragment);
