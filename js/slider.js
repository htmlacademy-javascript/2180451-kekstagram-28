const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DECIMAL_SYSTEM = 10;
const PERСENT = 100;
const FILTER_EFFECTS = [
  {name: 'none', filter: 'none', min: 0, max: 100, step: 1},
  {name: 'chrome', filter: 'grayscale', min: 0, max: 1, step: 0.1, unit: ''},
  {name: 'sepia', filter: 'sepia', min: 0, max: 1, step: 0.1, unit: ''},
  {name: 'marvin', filter: 'invert', min: 0, max: 100, step: 1, unit: '%'},
  {name: 'phobos', filter: 'blur', min: 0, max: 3, step: 0.1, unit: 'px'},
  {name: 'heat', filter: 'brightness', min: 1, max: 3, step: 0.1, unit: ''}
];
const noneEffect = FILTER_EFFECTS[0];
let currentEffect = noneEffect;

export const imgPreviewContainer = document.querySelector('.img-upload__preview-container');
export const imgPreview = imgPreviewContainer.querySelector('.img-upload__preview').querySelector('img');
const sliderContainer = imgPreviewContainer.querySelector('.img-upload__effect-level');
const sliderElement = imgPreviewContainer.querySelector('.effect-level__slider');
const valueElement = imgPreviewContainer.querySelector('.effect-level__value');
const scaleValue = imgPreviewContainer.querySelector('.scale__control--value');

const scaleChange = (operation) => {
  switch (operation) {
    case 'increase':
      if (parseInt(scaleValue.value, DECIMAL_SYSTEM) < MAX_SCALE_VALUE) {
        scaleValue.value = `${parseInt(scaleValue.value, DECIMAL_SYSTEM) + SCALE_STEP}%`;
      }
      break;
    case 'decrease':
      if (parseInt(scaleValue.value, DECIMAL_SYSTEM) > MIN_SCALE_VALUE) {
        scaleValue.value = `${parseInt(scaleValue.value, DECIMAL_SYSTEM) - SCALE_STEP}%`;
      }
  }
  imgPreview.style.transform = `scale(${parseInt(scaleValue.value, DECIMAL_SYSTEM) / PERСENT})`;
};

export const onDecreaseScaleButtonClick = () => scaleChange('decrease');
export const onIncreaseScaleButtonClick = () => scaleChange('increase');

noUiSlider.create(sliderElement, {
  range: {
    min: noneEffect.min,
    max: noneEffect.max,
  },
  start: noneEffect.max,
  step: noneEffect.step,
  connect: 'lower',
});

const checkIsDefault = () => {
  if (currentEffect === noneEffect) {
    sliderContainer.classList.add('hidden');
    imgPreview.style.filter = 'none';
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const updateSlider = () => {
  checkIsDefault();
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });
};

export const resetEffects = () => {
  currentEffect = noneEffect;
  updateSlider();
};

export function onFilterChangeTypeClick (evt) {
  if (evt.target.classList.contains('effects__radio')) {
    const effectsID = evt.target.value;
    imgPreview.className = `effects__preview--${effectsID}`;
    currentEffect = FILTER_EFFECTS.find((effect) => effect.name === effectsID);
    updateSlider();
  }

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    imgPreview.style.filter = `${currentEffect.filter}(${valueElement.value}${currentEffect.unit})`;
  });
}
