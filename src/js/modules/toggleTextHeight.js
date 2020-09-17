'use strict'

function toggleTextHeight() {

  const heroBtn = document.querySelector('.hero__button'),
    heroTextWrapper = document.querySelector('.hero__text-wrapper');

  heroBtn.addEventListener('click', function () {
    if (heroBtn.classList.contains('button--showing-more')) {
      heroTextWrapper.style.height = 'auto';
      heroBtn.classList.remove('button--showing-more');
      heroBtn.classList.add('button--closing-more');
      heroBtn.textContent = 'Скрыть';
    } else {
      heroTextWrapper.style.height = '90px';
      heroBtn.classList.remove('button--closing-more');
      heroBtn.classList.add('button--showing-more');
      heroBtn.textContent = 'Читать далее';
    }
  });
}

export default toggleTextHeight;
