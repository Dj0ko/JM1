import '../scss/style.scss';
import toggleTextHeight from './modules/toggleTextHeight';
import toggleBrandHeight from './modules/toggleBrandHeight';
import toggleMenu from './modules/toggleMenu';
//изменение высоты текста
toggleTextHeight();

//Раскрытие списка ремонта брендов
toggleBrandHeight();

//Открытие/закрытие меню
toggleMenu();

// import Swiper JS
import Swiper, { Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Pagination]);

// init Swiper:
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


