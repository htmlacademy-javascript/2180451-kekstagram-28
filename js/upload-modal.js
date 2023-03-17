import {isEscapeKey} from './util.js';
export const imgUploadForm = document.querySelector('.img-upload__form');
const imgUpload = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');
const inputFile = imgUploadForm.querySelector('#upload-file');


const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    inputFile.value = '';
  }
  removeInputListener();
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

const showRedactor = () => {
  imgOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocKeydown);
  document.body.classList.add('modal-open');
  addInputListener();
};

imgUpload.addEventListener('change', showRedactor);

const closeRedactor = () => {
  imgOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocKeydown);
  inputFile.value = '';
  removeInputListener();
};

imgUploadCancel.addEventListener('click', () => {
  closeRedactor();
  document.body.classList.remove('modal-open');
});

imgUploadCancel.addEventListener('keydown', onDocKeydown);
