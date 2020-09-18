'use strict';

function toggleRepairsHeight() {
  const brandRepairBtn = document.querySelectorAll('.brand-repair__button'),
    brandRepairList = document.querySelectorAll('.brand-repair__list');

  brandRepairList.forEach((item) => {
    item.style.height = '176px';
  })

  brandRepairBtn[0].addEventListener('click', function () {
    if (brandRepairBtn[0].classList.contains('button--showing-more')) {
      brandRepairList[0].style.height = 'auto';
      brandRepairBtn[0].classList.remove('button--showing-more');
      brandRepairBtn[0].classList.add('button--closing-more');
      brandRepairBtn[0].textContent = 'Скрыть';
    } else {
      brandRepairList[0].style.height = '176px';
      brandRepairBtn[0].classList.remove('button--closing-more');
      brandRepairBtn[0].classList.add('button--showing-more');
      brandRepairBtn[0].textContent = 'Читать далее';
    }
  });

  brandRepairBtn[1].addEventListener('click', function () {
    if (brandRepairBtn[1].classList.contains('button--showing-more')) {
      brandRepairList[1].style.height = 'auto';
      brandRepairBtn[1].classList.remove('button--showing-more');
      brandRepairBtn[1].classList.add('button--closing-more');
      brandRepairBtn[1].textContent = 'Скрыть';
    } else {
      brandRepairList[1].style.height = '176px';
      brandRepairBtn[1].classList.remove('button--closing-more');
      brandRepairBtn[1].classList.add('button--showing-more');
      brandRepairBtn[1].textContent = 'Читать далее';
    }
  });
};

export default toggleRepairsHeight;
