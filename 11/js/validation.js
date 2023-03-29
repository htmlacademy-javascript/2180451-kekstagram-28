import {imgUploadForm} from './upload-modal.js';
import {sendData} from './api.js';

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const submitPost = document.querySelector('#upload-submit');

const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;
const COMMENT_MAX_LENGTH = 140;
const submitPostText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую'
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});

function validateHashtag (value) {
  const hashArray = value.split(' ');
  return !value.length ? true : hashArray.every((hashtag) => HASHTAG.test(hashtag));
}

function validateHashtagCount (value) {
  const hashArray = value.split(' ');
  return hashArray.length <= HASHTAG_MAX_COUNT;
}

function validateHashtagDublicates (value) {
  const hashArray = value.toLowerCase().split(' ');
  return new Set(hashArray).size === hashArray.length;
}

function validateComment (value) {
  return value.length <= COMMENT_MAX_LENGTH;
}

pristine.addValidator(
  hashtagInput,
  validateHashtag,
  'Неверный хештег. хештеги должны разделяться пробелом'
);

pristine.addValidator(
  hashtagInput,
  validateHashtagCount,
  'Допустимое количество хештегов равно 5'
);

pristine.addValidator(
  hashtagInput,
  validateHashtagDublicates,
  'использованы одинаковые хештеги'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComment,
  'допустимое количество символов равно 140'
);

const blockSubmitButton = () => {
  submitPost.disabled = true;
  submitPost.textContent = submitPostText.SENDING;
};

export const unblockSubmitButton = () => {
  submitPost.disabled = false;
  submitPost.textContent = submitPostText.IDLE;
};

export const setUserFormSubmit = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target));
    }
  });
};

setUserFormSubmit();
