import { widthScreen } from '../tools/const.js';

const goToInit = () => {
  const goTop = document.querySelector('.js-go-top');
  if (!goTop) return;

  if (widthScreen >= 800) {
    const checkScroll = () => {
      if (window.scrollY > 1000) {
        goTop.classList.remove('d-none');
      } else {
        goTop.classList.add('d-none');
      }
    };

    window.addEventListener('scroll', checkScroll);
  }
};

export default goToInit;
