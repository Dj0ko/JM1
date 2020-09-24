'use strict';

function togglePopup(popupClass, btnClass) {
  //ищем необходимые элементы
  const popup = document.querySelector(popupClass),
    popupContent = popup.querySelector('.popup__content'),
    header = document.querySelector('header'),
    main = document.querySelector('main'),
    footer = document.querySelector('footer');

  let count = -320,
    openPopUp,
    closePopUp;

  //анимация открытия модального окна
  function popUpAnimateOpen() {
    openPopUp = requestAnimationFrame(popUpAnimateOpen);
    openPopup();
    if (count < 0) {
      if (innerWidth < 1440) {
        count += 10;
        popupContent.style.left = count + 'px';
      } else {
        count += 10;
        popupContent.style.right = count + 'px';
      }
    } else {
      cancelAnimationFrame(openPopUp);
    }
  };
 //анимация закрытия модального окна
  function popUpAnimateClose() {
    closePopUp = requestAnimationFrame(popUpAnimateClose);
    setTimeout(() => {
      closePopup();
    }, 500);
    if (count > -320) {
      if (innerWidth < 1440) {
        count -= 10;
        popupContent.style.left = count + 'px';
      } else {
        count -= 10;
        popupContent.style.right = count + 'px';
      }
    } else {
      cancelAnimationFrame(closePopUp);
    }
  };
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
      openPopUp = requestAnimationFrame(popUpAnimateOpen);
    }
  });

  popup.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.classList.contains('popup__button')) {
      closePopUp = requestAnimationFrame(popUpAnimateClose);
    } else {
      target = target.closest('.popup__content');

      if (!target) {
        closePopUp = requestAnimationFrame(popUpAnimateClose);
      }
    }
  });
}

export default togglePopup;
