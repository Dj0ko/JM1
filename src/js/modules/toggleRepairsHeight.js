'use strict';

function toggleRepairsHeight() {
  const repairBtn = document.querySelectorAll('.repair__button'),
    repairList = document.querySelectorAll('.repair__list');

  repairList.forEach((item) => {
    item.style.height = '176px';
  })

  repairBtn.forEach((elem, i) => {
    elem.addEventListener('click', (evt) => {
      let target = evt.target;

      if (target.classList.contains('button--showing-more')) {
        repairList[i].style.height = 'auto';
        target.classList.remove('button--showing-more');
        target.classList.add('button--closing-more');
        target.textContent = 'Скрыть';
      } else {
        repairList[i].style.height = '176px';
        target.classList.remove('button--closing-more');
        target.classList.add('button--showing-more');
        target.textContent = 'Читать далее';
      }
    });
  });
};

export default toggleRepairsHeight;
