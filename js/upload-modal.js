import {isEscapeKey} from './util.js';
import {onFilterChangeTypeClick, onDecreaseScaleButtonClick, onIncreaseScaleButtonClick, resetEffects, imgPreview, imgPreviewContainer} from './slider.js';
export const imgUploadForm = document.querySelector('.img-upload__form');
export const imgUploadFile = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');
const inputFile = imgUploadForm.querySelector('#upload-file');
const increaseScaleButton = imgPreviewContainer.querySelector('.scale__control--bigger');
const decreaseScaleButton = imgPreviewContainer.querySelector('.scale__control--smaller');

export const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.getElementById('upload-select-image').reset();
    resetEffects();
    document.removeEventListener('keydown', onDocKeydown);
    imgPreview.style.transform = 'none';
  }
  removeInputListener();
  decreaseScaleButton.removeEventListener('click', onDecreaseScaleButtonClick);
  increaseScaleButton.removeEventListener('click', onIncreaseScaleButtonClick);
  imgUploadForm.removeEventListener('change', onFilterChangeTypeClick);
  imgUploadCancel.removeEventListener('click', onCancelUploadClick);
};

const onInputFocused = () => {
  document.removeEventListener('keydown', onDocKeydown);
};
const onInputUnfocused = () => {
  document.addEventListener('keydown', onDocKeydown);
};
const addInputListener = () => {
  hashtagInput.addEventListener('focus', onInputFocused);
  commentInput.addEventListener('focus', onInputFocused);
  hashtagInput.addEventListener('blur', onInputUnfocused);
  commentInput.addEventListener('blur', onInputUnfocused);
};
function removeInputListener () {
  hashtagInput.removeEventListener('focus', onInputFocused);
  commentInput.removeEventListener('focus', onInputFocused);
  hashtagInput.removeEventListener('blur', onInputUnfocused);
  commentInput.removeEventListener('blur', onInputUnfocused);
}

export function onCancelUploadClick () {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputFile.value = '';
  imgPreview.style.transform = 'none';

  resetEffects();
  removeInputListener();

  document.removeEventListener('keydown', onDocKeydown);
  decreaseScaleButton.removeEventListener('click', onDecreaseScaleButtonClick);
  increaseScaleButton.removeEventListener('click', onIncreaseScaleButtonClick);
  imgUploadForm.removeEventListener('change', onFilterChangeTypeClick);
  imgUploadCancel.removeEventListener('click', onCancelUploadClick);
}

const onUploadImgClick = () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  addInputListener();

  document.addEventListener('keydown', onDocKeydown);
  decreaseScaleButton.addEventListener('click', onDecreaseScaleButtonClick);
  increaseScaleButton.addEventListener('click', onIncreaseScaleButtonClick);
  imgUploadForm.addEventListener('change', onFilterChangeTypeClick);
  imgUploadCancel.addEventListener('click', onCancelUploadClick);
};

imgUploadFile.addEventListener('change', onUploadImgClick);
