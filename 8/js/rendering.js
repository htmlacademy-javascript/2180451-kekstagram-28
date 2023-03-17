export const picContainer = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarDescriptionsFragment = document.createDocumentFragment();

export const createElements = (descriptionData) => {
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
