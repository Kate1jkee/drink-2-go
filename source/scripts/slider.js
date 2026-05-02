const slides = document.querySelectorAll('.slider__item');
const controlsButton = document.querySelectorAll('.slider__control-button');
const leftButton = document.querySelector('.slider__arrow-button--left');
const rightButton = document.querySelector('.slider__arrow-button--right');

let currentSliderIndex = 0;

/**
 * Изменение состояния disabled для левой и правой кнопок слайдера
 */
function changeButtonsDisabled() {
  leftButton.disabled = currentSliderIndex === 0;
  rightButton.disabled = currentSliderIndex === slides.length - 1;
}

/**
 * Обработчик клика на левую кнопку слайдера
 */
function onLeftButtonClick() {
  const currentSlider = slides[currentSliderIndex];
  if (currentSliderIndex !== 0) {
    currentSlider.classList.remove('slider__item--current');
    controlsButton[currentSliderIndex].classList.remove('slider__control-button--active');

    const prevSlider = slides[currentSliderIndex - 1];
    prevSlider.classList.add('slider__item--current');
    controlsButton[currentSliderIndex - 1].classList.add('slider__control-button--active');

    currentSliderIndex = currentSliderIndex - 1;
    changeButtonsDisabled();
  }
}

leftButton.addEventListener('click', onLeftButtonClick);

/**
 * Обработчик клика на правую кнопку слайдера
 */
function onRightButtonClick() {
  const currentSlider = slides[currentSliderIndex];
  if (currentSliderIndex < slides.length - 1) {
    currentSlider.classList.remove('slider__item--current');
    controlsButton[currentSliderIndex].classList.remove('slider__control-button--active');

    const nextSlider = slides[currentSliderIndex + 1];
    nextSlider.classList.add('slider__item--current');
    controlsButton[currentSliderIndex + 1].classList.add('slider__control-button--active');

    currentSliderIndex = currentSliderIndex + 1;
    changeButtonsDisabled();
  }
}

rightButton.addEventListener('click', onRightButtonClick);

/**
 * Обработчик клика на нижние кнопки пагинации слайдера на десктопе
 */
function onControlButtonClick(sliderIndex) {
  if (sliderIndex !== currentSliderIndex) {
    slides[currentSliderIndex].classList.remove('slider__item--current');
    controlsButton[currentSliderIndex].classList.remove('slider__control-button--active');
    slides[sliderIndex].classList.add('slider__item--current');
    controlsButton[sliderIndex].classList.add('slider__control-button--active');
    currentSliderIndex = sliderIndex;

    changeButtonsDisabled();
  }
}

controlsButton.forEach((button, index) => {
  button.addEventListener('click', () => onControlButtonClick(index));
});
