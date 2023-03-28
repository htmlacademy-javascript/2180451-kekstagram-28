import {isEscapeKey} from './util.js';
import {filterTypeChange, decreaseCurrentScale, increaseCurrentScale, resetEffects, imgPreview} from './slider.js';
import { loadPreview } from './upload-img-preview.js';
export const imgUploadForm = document.querySelector('.img-upload__form');
export const imgUploadFile = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');
const inputFile = imgUploadForm.querySelector('#upload-file');
const imgPreviewContainer = document.querySelector('.img-upload__preview-container');
const increaseImgScale = imgPreviewContainer.querySelector('.scale__control--bigger');
const decreaseImgScale = imgPreviewContainer.querySelector('.scale__control--smaller');

export const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.getElementById('upload-select-image').reset();
    resetEffects();
    imgPreview.style.transform = 'none';
  }
  removeInputListener();
  decreaseImgScale.removeEventListener('click', decreaseCurrentScale);
  increaseImgScale.removeEventListener('click', increaseCurrentScale);
  imgUploadForm.removeEventListener('change', filterTypeChange);
  imgUploadCancel.removeEventListener('click', closeRedactor);
};

const inputInFocus = () => {
  document.removeEventListener('keydown', onDocKeydown);
};
const inputOutFocus = () => {
  document.addEventListener('keydown', onDocKeydown);
};
const addInputListener = () => {
  hashtagInput.addEventListener('focus', inputInFocus);
  commentInput.addEventListener('focus', inputInFocus);
  hashtagInput.addEventListener('blur', inputOutFocus);
  commentInput.addEventListener('blur', inputOutFocus);
};
function removeInputListener () {
  hashtagInput.removeEventListener('focus', inputInFocus);
  commentInput.removeEventListener('focus', inputInFocus);
  hashtagInput.removeEventListener('blur', inputOutFocus);
  commentInput.removeEventListener('blur', inputOutFocus);
}

export function closeRedactor () {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputFile.value = '';
  imgPreview.style.transform = 'none';

  resetEffects();
  removeInputListener();

  document.removeEventListener('keydown', onDocKeydown);
  decreaseImgScale.removeEventListener('click', decreaseCurrentScale);
  increaseImgScale.removeEventListener('click', increaseCurrentScale);
  imgUploadForm.removeEventListener('change', filterTypeChange);
  imgUploadCancel.removeEventListener('click', closeRedactor);
}

const showRedactor = () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  addInputListener();
  loadPreview();

  document.addEventListener('keydown', onDocKeydown);
  decreaseImgScale.addEventListener('click', decreaseCurrentScale);
  increaseImgScale.addEventListener('click', increaseCurrentScale);
  imgUploadForm.addEventListener('change', filterTypeChange);
  imgUploadCancel.addEventListener('click', closeRedactor);
};

imgUploadFile.addEventListener('change', showRedactor);
