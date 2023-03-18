import {isEscapeKey} from './util.js';
import {filterTypeChange} from './slider.js';
export const imgUploadForm = document.querySelector('.img-upload__form');
const imgUpload = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');
const inputFile = imgUploadForm.querySelector('#upload-file');
const imgPreviewContainer = document.querySelector('.img-upload__preview-container');
const imgPreview = imgPreviewContainer.querySelector('.img-upload__preview').querySelector('img');

const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    inputFile.value = '';
  }
  removeInputListener();
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

function closeRedactor () {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputFile.value = '';
  imgPreview.removeAttribute('style');
  imgPreview.className = 'effects__preview--none';
  removeInputListener();

  document.removeEventListener('keydown', onDocKeydown);
  imgUploadForm.removeEventListener('change', filterTypeChange);
  imgUploadCancel.removeEventListener('click', closeRedactor);
}

const showRedactor = () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addInputListener();

  document.addEventListener('keydown', onDocKeydown);
  imgUploadForm.addEventListener('change', filterTypeChange);
  imgUploadCancel.addEventListener('click', closeRedactor);
};

imgUpload.addEventListener('change', showRedactor);
