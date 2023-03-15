import {imgUploadForm} from './upload-modal.js';

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

function validateHashtag (value) {
  const HASHTAG = /^#[a-zа-я0-9]{1,19}$/i;
  const hashArray = value.split(' ');
  return hashArray.every((hashtag) => HASHTAG.test(hashtag));
}

// function validateHashtagSpaces (value) {
//   const HASHTAG = /^#[a-zа-я0-9]{1,19}$/i;
//   const hashArray = value.split(' ');
//   return hashArray.every((hashtag) => HASHTAG.test(hashtag));
// }

function validateHashtagCount (value) {
  const HASHTAG_MAX_COUNT = 5;
  const hashArray = value.split(' ');
  return hashArray.length <= HASHTAG_MAX_COUNT;
}

function validateHashtagDublicates (value) {
  value = value.toLowerCase();
  const hashArray = value.split(' ');
  return new Set(hashArray).size === hashArray.length;
}

function validateComment (value) {
  const COMMENT_MAX_LENGTH = 140;
  return value.length <= COMMENT_MAX_LENGTH;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  validateHashtag,
  'Неверный хештег. хештеги должны разделяться пробелом'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  validateHashtagCount,
  'Допустимое количество хештегов равно 5'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  validateHashtagDublicates,
  'использованы одинаковые хештеги'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComment,
  'допустимое количество символов равно 140'
);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
