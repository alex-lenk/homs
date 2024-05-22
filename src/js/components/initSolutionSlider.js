import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import { widthScreen } from '../tools/const.js';

const initSolutionSlider = () => {
  const solutionSlider = document.querySelector('.js-solution__slider');

  if (widthScreen >= 768 || !solutionSlider) return;


  new Swiper('.js-solution__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.solution__slider-next',
      prevEl: '.solution__slider-prev',
    },
  });
};

export default initSolutionSlider;
