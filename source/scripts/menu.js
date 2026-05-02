const button = document.querySelector('.main-header__toggle');
const menu = document.querySelector('.main-nav');

function onButtonClick () {
  menu.classList.toggle('main-nav--open');
}

button.addEventListener('click', onButtonClick);
