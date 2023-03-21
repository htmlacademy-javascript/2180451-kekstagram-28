import {isEscapeKey, isEnterKey, createComment} from './util.js';
import {descriptionData} from './main.js';
import { picContainer } from './rendering.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const commentsContainer = bigPicture.querySelector('.social__comments');
const photoCaption = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const loadCommentsButton = bigPicture.querySelector('.comments-loader');
const COMMENT_SHOW_COUNT = 5;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    loadCommentsButton.classList.remove('hidden');
    closeBigPicture.removeEventListener('click', closePhoto);
    closeBigPicture.removeEventListener('keydown', closePhotoByEnter);
  }
};

const clearComments = () => {
  while (commentsContainer.firstChild) {
    commentsContainer.removeChild(commentsContainer.firstChild);
  }
};

const showComments = (arr, count) => {
  for (let i = 0; i < count; i++) {
    arr[i].classList.remove('hidden');
  }
  commentsCount.textContent = `${commentsContainer.children.length - commentsContainer.querySelectorAll('.hidden').length} из ${commentsContainer.children.length} комментариев`;
};

const loadComments = () => {
  const hiddenComments = commentsContainer.querySelectorAll('.hidden');

  if (hiddenComments.length > COMMENT_SHOW_COUNT) {
    showComments(hiddenComments, COMMENT_SHOW_COUNT);
  }
  if (hiddenComments.length <= COMMENT_SHOW_COUNT) {
    showComments(hiddenComments, hiddenComments.length);
    loadCommentsButton.classList.add('hidden');
  }
};

function closePhoto () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  loadCommentsButton.removeEventListener('click', loadComments);
  closeBigPicture.removeEventListener('click', closePhoto);
  closeBigPicture.removeEventListener('keydown', closePhotoByEnter);
  document.body.classList.remove('modal-open');
  loadCommentsButton.classList.remove('hidden');
}

function closePhotoByEnter (evt) {
  if (isEnterKey(evt)) {
    closePhoto();
  }
}

const onPhotoClick = (evt) => {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture');
    const currentDescription = descriptionData.find((item) => item.id === Number(target.dataset.id));
    bigPicture.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    bigPictureImg.src = currentDescription.url;
    bigPictureLikes.textContent = currentDescription.likes;
    bigPictureComments.textContent = currentDescription.comments.length;
    photoCaption.textContent = currentDescription.description;
    document.body.classList.add('modal-open');

    loadCommentsButton.addEventListener('click', loadComments);
    closeBigPicture.addEventListener('click', closePhoto);
    closeBigPicture.addEventListener('keydown', closePhotoByEnter);

    clearComments();
    createComment(currentDescription.comments, commentsContainer);
    loadComments();
  }
};

picContainer.addEventListener('click', onPhotoClick);