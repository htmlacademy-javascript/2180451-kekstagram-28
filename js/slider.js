const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const imgPreviewContainer = document.querySelector('.img-upload__preview-container');
const imgPreview = imgPreviewContainer.querySelector('.img-upload__preview').querySelector('img');
const increaseImgScale = imgPreviewContainer.querySelector('.scale__control--bigger');
const decreaseImgScale = imgPreviewContainer.querySelector('.scale__control--smaller');
const scaleValue = imgPreviewContainer.querySelector('.scale__control--value');
const SCALE_STEP = 25;

const decreaseCurrentScale = () => {
  if (parseInt(scaleValue.value, 10) > 25) {
    scaleValue.value = `${parseInt(scaleValue.value, 10) - SCALE_STEP}%`;
    imgPreview.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100})`;
  }
};

const increaseCurrentScale = () => {
  if (parseInt(scaleValue.value, 10) < 100) {
    scaleValue.value = `${parseInt(scaleValue.value, 10) + SCALE_STEP}%`;
    imgPreview.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100})`;
  }
};

decreaseImgScale.addEventListener('click', decreaseCurrentScale);
increaseImgScale.addEventListener('click', increaseCurrentScale);

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (...rest) => {
  console.log(rest);
});
