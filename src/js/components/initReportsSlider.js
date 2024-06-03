import Swiper from 'swiper';
import { Navigation, EffectCards } from 'swiper/modules';

const initReportsSlider = () => {
  const reportsSlider = document.querySelector('.js-reports__slider');

  if (!reportsSlider) return;

  new Swiper('.js-reports__slider', {
    modules: [Navigation, EffectCards],
    effect: 'cards',
    grabCursor: true,
    // spaceBetween: 15,
    // slidesPerView: 1,
    // watchSlidesProgress: true,
    // loop: true,
    navigation: {
      nextEl: '.reports__slider-next',
      prevEl: '.reports__slider-prev',
    },
  });
};

export default initReportsSlider;
