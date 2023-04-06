import {renderGallery} from './rendering.js';
import {renderFullScreenPhoto} from './render-fullscreen.js';
import {getData} from './api.js';
import {debounce, showAlert} from './util.js';
import {init, getFilteredPictures} from './rendering.js';
import './upload-img-preview.js';
const RERENDER_DELAY = 500;

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery, RERENDER_DELAY);
  init(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
  renderFullScreenPhoto(getFilteredPictures());
} catch (err) {
  showAlert();
}
