const STEP = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000;

const rangeElement = document.querySelector('.price-slider');
const minValueInputElement = document.querySelector('.price-slider__min');
const maxValueInputElement = document.querySelector('.price-slider__max');

noUiSlider.create(rangeElement, {
  range: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  start: [MIN_PRICE, MAX_PRICE - STEP],
  step: STEP,
  connect: true,
});

rangeElement.noUiSlider.on('update', () => {
  const currentValues = rangeElement.noUiSlider.get();
  const minValue = Number(currentValues[0]).toFixed(0);
  const maxValue = Number(currentValues[1]).toFixed(0);

  if (minValueInputElement) {
    minValueInputElement.value = minValue;
  }
  if (maxValueInputElement) {
    maxValueInputElement.value = maxValue;
  }
});

function roundValue(value) {
  const number = Number(value);
  if (Number.isNaN(number)) {
    return MIN_PRICE;
  }

  return Math.round(Math.min(MAX_PRICE, Math.max(MIN_PRICE, number)) / STEP) * STEP;
}

function onMinInputChange(event) {
  const value = event.target.value;
  const roundedValue = roundValue(value);
  const currentValues = rangeElement.noUiSlider.get();
  const maxValue = Number(currentValues[1]).toFixed(0);
  const resultMin = Math.min(roundedValue, maxValue - STEP);
  rangeElement.noUiSlider.set([resultMin, null]);
}

function onMaxInputChange(event) {
  const value = event.target.value;
  const roundedValue = roundValue(value);
  const currentValues = rangeElement.noUiSlider.get();
  const minValue = Number(currentValues[0]).toFixed(0);
  const resultMax = Math.min(roundedValue, minValue + STEP);
  rangeElement.noUiSlider.set([null, resultMax]);
}

minValueInputElement.addEventListener('change', onMinInputChange);

maxValueInputElement.addEventListener('change', onMaxInputChange);
