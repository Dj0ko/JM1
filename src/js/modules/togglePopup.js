'use strict';

function togglePopup() {
  const btnPhone = document.querySelector('.button--phone'),
    btnFeedback = document.querySelector('.button--feedback'),
    popupCall = document.querySelector('.popup-call'),
    popupFeedback = document.querySelector('.popup-feedback'),
    popupBtn = document.querySelector('.popup__button'),
    header = document.querySelector('header'),
    main = document.querySelector('main'),
    footer = document.querySelector('footer');

  popupCall.style.display = 'none';
  popupFeedback.style.display = 'none';

  document.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.classList.contains('button--phone')) {
      popupCall.style.display = 'block';
      header.style.opacity = '0.1';
      main.style.opacity = '0.1';
      footer.style.opacity = '0.1';
    } else if (target.classList.contains('button--feedback')) {
      popupFeedback.style.display = 'block';
      header.style.opacity = '0.1';
      main.style.opacity = '0.1';
      footer.style.opacity = '0.1';
    }

    if (target.classList.contains('popup__button') && (popupCall.style.display = 'block')) {
      popupCall.style.display = 'none';
      header.style.opacity = '1';
      main.style.opacity = '1';
      footer.style.opacity = '1';
    }
    if (target.classList.contains('popup__button') && (popupFeedback.style.display = 'block')) {
      popupFeedback.style.display = 'none';
    }
  })
}

export default togglePopup;
