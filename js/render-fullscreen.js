import {isEscapeKey, isEnterKey} from './util.js';
import {descriptionData} from './main.js';
import {createComment} from './util.js';
const picContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const commentsContainer = bigPicture.querySelector('.social__comments');
const photoCaption = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const moreComments = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const clearComments = () => {
  while (commentsContainer.firstChild) {
    commentsContainer.removeChild(commentsContainer.firstChild);
  }
};

function onPhotoClick (evt) {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture');
    const currentDescription = descriptionData.find((item) => item.id === Number(target.dataset.id));
    bigPicture.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    bigPictureImg.src = currentDescription.url;
    bigPictureLikes.textContent = currentDescription.likes;
    bigPictureComments.textContent = currentDescription.comments.length;
    photoCaption.textContent = currentDescription.description;
    commentsCount.classList.add('hidden');
    moreComments.classList.add('hidden');

    clearComments();
    createComment(currentDescription.comments, commentsContainer);
  }
}

picContainer.addEventListener('click', onPhotoClick);

function closePhoto () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeBigPicture.addEventListener('click', () => {
  closePhoto();
});

closeBigPicture.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closePhoto();
  }
});
