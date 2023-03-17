import {isEscapeKey, isEnterKey} from './util.js';
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
  }
};

const inputsActive = () => {
  hashtagInput.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocKeydown);
  });
  hashtagInput.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocKeydown);
  });
  commentInput.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocKeydown);
  });
  commentInput.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocKeydown);
  });
};

const inputsInactive = () => {
  hashtagInput.removeEventListener('focus', () => {
    document.removeEventListener('keydown', onDocKeydown);
  });
  hashtagInput.removeEventListener('blur', () => {
    document.addEventListener('keydown', onDocKeydown);
  });
  commentInput.removeEventListener('focus', () => {
    document.removeEventListener('keydown', onDocKeydown);
  });
  commentInput.removeEventListener('blur', () => {
    document.addEventListener('keydown', onDocKeydown);
  });
};

const showRedactor = () => {
  imgOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocKeydown);
  document.body.classList.add('modal-open');
  inputsActive();
};

imgUpload.addEventListener('change', showRedactor);

const closeRedactor = () => {
  imgOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocKeydown);
  inputFile.value = '';
  inputsInactive();
};

imgUploadCancel.addEventListener('click', () => {
  closeRedactor();
  document.body.classList.remove('modal-open');
});

imgUploadCancel.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeRedactor();
  }
  document.body.classList.remove('modal-open');
  inputsInactive();
});
