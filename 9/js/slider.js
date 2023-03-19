const imgPreviewContainer = document.querySelector('.img-upload__preview-container');
const sliderContainer = imgPreviewContainer.querySelector('.img-upload__effect-level');
const sliderElement = imgPreviewContainer.querySelector('.effect-level__slider');
const valueElement = imgPreviewContainer.querySelector('.effect-level__value');
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
  step: 10,
  connect: 'lower',
});

function filterValueChange (value) {
  switch(imgPreview.className) {
    case 'effects__preview--none':
      imgPreview.removeAttribute('style');
      sliderContainer.classList.add('hidden');
      break;
    case 'effects__preview--chrome':
      imgPreview.style.filter = `grayscale(${value})`;
      sliderContainer.classList.remove('hidden');
      break;
    case 'effects__preview--sepia':
      imgPreview.style.filter = `sepia(${value})`;
      sliderContainer.classList.remove('hidden');
      break;
    case 'effects__preview--marvin':
      imgPreview.style.filter = `invert(${value}%)`;
      sliderContainer.classList.remove('hidden');
      break;
    case 'effects__preview--phobos':
      imgPreview.style.filter = `blur(${value}px)`;
      sliderContainer.classList.remove('hidden');
      break;
    case 'effects__preview--heat':
      imgPreview.style.filter = `brightness(${value})`;
      sliderContainer.classList.remove('hidden');
      break;
  }
}

export function filterTypeChange (evt) {
  if (evt.target.closest('input[type="radio"]')) {
    imgPreview.className = `effects__preview--${evt.target.value}`;
    imgPreview.style.filter = `${evt.target.value}(${sliderElement.noUiSlider.get()})`;
  }
  switch(evt.target.value) {
    case 'chrome':
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 100,
        step: 1
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      });
  }

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    filterValueChange(sliderElement.noUiSlider.get());
  });
}
