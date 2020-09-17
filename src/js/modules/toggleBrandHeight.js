'use strict';

function toggleBrandHeight() {
  const brandRepairBtn = document.querySelector('.brand-repair__button'),
    brandRepairList = document.querySelector('.brand-repair__list');

  brandRepairList.style.height = '176px';

  brandRepairBtn.addEventListener('click', function () {
    if (brandRepairBtn.classList.contains('button--showing-more')) {
      brandRepairList.style.height = 'auto';
      brandRepairBtn.classList.remove('button--showing-more');
      brandRepairBtn.classList.add('button--closing-more');
      brandRepairBtn.textContent = 'Скрыть';
    } else {
      brandRepairList.style.height = '176px';
      brandRepairBtn.classList.remove('button--closing-more');
      brandRepairBtn.classList.add('button--showing-more');
      brandRepairBtn.textContent = 'Читать далее';
    }
  });
};

export default toggleBrandHeight;
