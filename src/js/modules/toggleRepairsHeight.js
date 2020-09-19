'use strict';

function toggleRepairsHeight() {
  const repairBtn = document.querySelectorAll('.repair__button'),
    repairList = document.querySelectorAll('.repair__list');

    repairList.forEach((item) => {
    item.style.height = '176px';
  })

  repairBtn[0].addEventListener('click', function () {
    if (repairBtn[0].classList.contains('button--showing-more')) {
      repairList[0].style.height = 'auto';
      repairBtn[0].classList.remove('button--showing-more');
      repairBtn[0].classList.add('button--closing-more');
      repairBtn[0].textContent = 'Скрыть';
    } else {
      repairList[0].style.height = '176px';
      repairBtn[0].classList.remove('button--closing-more');
      repairBtn[0].classList.add('button--showing-more');
      repairBtn[0].textContent = 'Читать далее';
    }
  });

  repairBtn[1].addEventListener('click', function () {
    if (repairBtn[1].classList.contains('button--showing-more')) {
      repairList[1].style.height = 'auto';
      repairBtn[1].classList.remove('button--showing-more');
      repairBtn[1].classList.add('button--closing-more');
      repairBtn[1].textContent = 'Скрыть';
    } else {
      repairList[1].style.height = '176px';
      repairBtn[1].classList.remove('button--closing-more');
      repairBtn[1].classList.add('button--showing-more');
      repairBtn[1].textContent = 'Читать далее';
    }
  });
};

export default toggleRepairsHeight;
