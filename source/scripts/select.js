const select = document.querySelector('.control__select');
const arrow = document.querySelector('.control__select-arrow');

function onSelectClick () {
  arrow.classList.toggle('control__select-arrow--open');
}

select.addEventListener('click', onSelectClick);

function onBlurSelect() {
  arrow.classList.remove('control__select-arrow--open');
}

select.addEventListener('blur', onBlurSelect);
