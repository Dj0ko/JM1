'use strict';

function togglePopup(popupClass, btnClass) {
  //ищем необходимые элементы
  const popup = document.querySelector(popupClass),
    header = document.querySelector('header'),
    main = document.querySelector('main'),
    footer = document.querySelector('footer');

  //функция открытия модального окна
  function openPopup() {
    popup.style.display = 'block';
    header.style.opacity = '0.1';
    main.style.opacity = '0.1';
    footer.style.opacity = '0.1';
  }

  //функция закрытия модального окна
  function closePopup() {
    popup.style.display = 'none';
    header.style.opacity = '1';
    main.style.opacity = '1';
    footer.style.opacity = '1';
  }

  //обработчики событий для открытия/закрытия модальных окон
  document.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.classList.contains(btnClass)) {
      openPopup();
    }
  });

  popup.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.classList.contains('popup__button')) {
      closePopup();
    } else {
      target = target.closest('.popup__content');

      if (!target) {
        closePopup();
      }
    }
  });
}

export default togglePopup;
