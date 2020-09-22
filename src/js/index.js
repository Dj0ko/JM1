import '../scss/style.scss';
import toggleTextHeight from './modules/toggleTextHeight';
import toggleRepairsHeight from './modules/toggleRepairsHeight';
import toggleMenu from './modules/toggleMenu';
import openPopup from './modules/openPopup';
//изменение высоты текста
toggleTextHeight();

//Раскрытие списка ремонта брендов
toggleRepairsHeight();

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

openPopup();


