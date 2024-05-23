import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import { widthScreen } from '../tools/const.js';

const initCreatedSlider = () => {
  const createdSlider = document.querySelector('.js-created__slider');

  if (widthScreen >= 768 || !createdSlider) return;


  new Swiper('.js-created__slider', {
    modules: [Navigation],
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.created__slider-next',
      prevEl: '.created__slider-prev',
    },
  });
};

export default initCreatedSlider;
