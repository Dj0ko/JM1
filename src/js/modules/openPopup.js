'use strict';

function openPopup() {
  const btnPhone = document.querySelector('.button--phone'),
    popupCall = document.querySelector('.popup-call'),
    popupBtn = document.querySelector('.popup__button'),
    header = document.querySelector('header'),
    main = document.querySelector('main'),
    footer = document.querySelector('footer');

  popupCall.style.display = 'none';

  btnPhone.addEventListener('click', () => {
    popupCall.style.display = 'block';
    header.style.opacity = '0.1';
    main.style.opacity = '0.1';
    footer.style.opacity = '0.1';
  });

  popupBtn.addEventListener('click', () => {
    popupCall.style.display = 'none';
    header.style.opacity = '1';
    main.style.opacity = '1';
    footer.style.opacity = '1';
  });
}

export default openPopup;
