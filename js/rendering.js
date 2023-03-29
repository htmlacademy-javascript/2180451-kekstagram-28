export const picContainer = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarDescriptionsFragment = document.createDocumentFragment();
const imgFiltersForm = document.querySelector('.img-filters__form');
const filterButtons = imgFiltersForm.querySelectorAll('.img-filters__button');
const imgFilters = document.querySelector('.img-filters');

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
const PICTURE_COUNT = 10;
const SORT_NUMBER = 0.5;
let descriptionDataFiltered = [];
let currentFilter = Filter.DEFAULT;

const randomSort = () => Math.random() - SORT_NUMBER;

const discussedSort = (a, b) => b.comments.length - a.comments.length;

export const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...descriptionDataFiltered].sort(randomSort).slice(0, PICTURE_COUNT);
    case Filter.DISCUSSED:
      return [...descriptionDataFiltered].sort(discussedSort);
    default:
      return [...descriptionDataFiltered];
  }
};

export const renderGallery = (descriptionData) => {
  picContainer.querySelectorAll('.picture').forEach((item) => item.remove());

  descriptionData.forEach((dataItem) => {
    const picElement = picTemplate.cloneNode(true);
    picElement.querySelector('.picture__img').src = dataItem.url;
    picElement.querySelector('.picture__img').alt = dataItem.description;
    picElement.querySelector('.picture__likes').textContent = dataItem.likes;
    picElement.querySelector('.picture__comments').textContent = dataItem['comments'].length;
    picElement.dataset.id = dataItem.id;
    similarDescriptionsFragment.append(picElement);
  });

  picContainer.append(similarDescriptionsFragment);
};

export const setOnFilterClick = (cb) => {
  imgFiltersForm.addEventListener('click', (evt) => {
    filterButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    cb(getFilteredPictures());
  });
};


export const init = (loadedPictures, cb) => {
  imgFilters.classList.remove('img-filters--inactive');
  descriptionDataFiltered = [...loadedPictures];
  setOnFilterClick(cb);
};
