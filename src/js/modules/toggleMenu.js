'use strict';

function toggleMenu() {
  const mainNavMenuWrapper = document.querySelector('.main-nav__menu-wrapper'),
    buttonClosed = document.querySelector('.button--closed'),
    buttonOpened = document.querySelector('.button--opened');

  buttonClosed.addEventListener('click', function () {
    if (mainNavMenuWrapper.classList.contains('main-nav__menu-wrapper--closed')) {
      buttonClosed.classList.remove('button--closed');
      buttonClosed.classList.add('button--opened');
      mainNavMenuWrapper.classList.remove('main-nav__menu-wrapper--closed');
      mainNavMenuWrapper.classList.add('main-nav__menu-wrapper--opened');
    }
  });
  buttonOpened.addEventListener('click', function () {
    if (mainNavMenuWrapper.classList.contains('main-nav__menu-wrapper--opened')) {
      buttonClosed.classList.remove('button--opened');
      buttonClosed.classList.add('button--closed');
      mainNavMenuWrapper.classList.remove('main-nav__menu-wrapper--opened');
      mainNavMenuWrapper.classList.add('main-nav__menu-wrapper--closed');
    }
  });
};

export default toggleMenu;
